<script setup lang="ts">
const canvasRef = useTemplateRef('canvasRef')

const R180 = Math.PI
const R90 = Math.PI / 2
const R15 = Math.PI / 12
const STROKE = '#e2e8f025'
const MIN_BRANCH = 32
const SEGMENT_LENGTH = 6
const FRAME_INTERVAL = 1000 / 40

type Seed = [x: number, y: number, rad: number]
type Step = () => void
// Shared per-tree so the whole tree collectively tapers its forking rate,
// rather than each branch path getting its own independent budget.
type Counter = { value: number }

let ctx: CanvasRenderingContext2D | null = null
let width = 0
let height = 0
let raf = 0
let lastTime = 0
let resizeTimer: ReturnType<typeof setTimeout> | undefined
let reduceMotion = false

function polarToCart(x: number, y: number, r: number, theta: number): [number, number] {
  return [x + r * Math.cos(theta), y + r * Math.sin(theta)]
}

function randomMiddle() {
  return Math.random() * 0.6 + 0.2
}

function grow(seeds: Seed[]) {
  if (!ctx) return

  const step = (x: number, y: number, rad: number, counter: Counter): void => {
    if (!ctx) return
    const length = Math.random() * SEGMENT_LENGTH
    counter.value += 1
    const [nx, ny] = polarToCart(x, y, length, rad)

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(nx, ny)
    ctx.stroke()

    if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100) return

    const rad1 = rad + Math.random() * R15
    const rad2 = rad - Math.random() * R15
    const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5

    if (Math.random() < rate) steps.push(() => step(nx, ny, rad1, counter))
    if (Math.random() < rate) steps.push(() => step(nx, ny, rad2, counter))
  }

  let steps: Step[] = seeds.map(([x, y, rad]) => () => step(x, y, rad, { value: 0 }))

  // Reduced motion: run the whole simulation synchronously and draw the final result.
  if (reduceMotion) {
    let guard = 0
    while (steps.length && guard < 20000) {
      const pending = steps
      steps = []
      pending.forEach((run) => run())
      guard += pending.length
    }
    return
  }

  const frame = (time: number) => {
    if (time - lastTime < FRAME_INTERVAL) {
      raf = requestAnimationFrame(frame)
      return
    }
    const prevSteps = steps
    steps = []
    lastTime = time

    prevSteps.forEach((run) => {
      // 50% chance to defer to the next frame, for a more organic growth pace.
      if (Math.random() < 0.5) steps.push(run)
      else run()
    })

    if (steps.length) raf = requestAnimationFrame(frame)
  }

  raf = requestAnimationFrame(frame)
}

function start() {
  const canvas = canvasRef.value
  if (!canvas || !ctx) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  canvas.width = width * dpr
  canvas.height = height * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)
  ctx.lineWidth = 1
  ctx.strokeStyle = STROKE

  cancelAnimationFrame(raf)
  lastTime = 0

  // Seed one branch growing inward from each edge (top, bottom, left, right);
  // just top/bottom on narrow screens to keep it light on mobile.
  let seeds: Seed[] = [
    [randomMiddle() * width, -5, R90],
    [randomMiddle() * width, height + 5, -R90],
    [-5, randomMiddle() * height, 0],
    [width + 5, randomMiddle() * height, R180]
  ]
  if (width < 500) seeds = seeds.slice(0, 2)

  grow(seeds)
}

function handleResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(start, 300)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  start()

  window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  clearTimeout(resizeTimer)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 -z-10 print:hidden"
    style="mask-image: radial-gradient(circle, transparent, black); -webkit-mask-image: radial-gradient(circle, transparent, black)"
    aria-hidden="true"
  >
    <canvas ref="canvasRef" width="400" height="400" />
  </div>
</template>
