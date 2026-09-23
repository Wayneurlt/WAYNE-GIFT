<script setup lang="ts">
interface Props {
  factor?: number
  speed?: number
  starColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  factor: 0.02,
  speed: 26,
  starColor: '#e2e8f0'
})

const TILE_W = 3200
const TILE_H = 2000

function generateStars(count: number) {
  const shadows: string[] = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * TILE_W)
    const y = Math.floor(Math.random() * TILE_H)
    shadows.push(`${x}px ${y}px ${props.starColor}`)
  }
  return shadows.join(', ')
}

const boxShadow1 = ref('')
const boxShadow2 = ref('')
const boxShadow3 = ref('')
const offsetX = ref(0)
const offsetY = ref(0)
let reduceMotion = false

function handleMouseMove(e: MouseEvent) {
  if (reduceMotion) return
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  offsetX.value = -(e.clientX - centerX) * props.factor
  offsetY.value = -(e.clientY - centerY) * props.factor
}

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  boxShadow1.value = generateStars(420)
  boxShadow2.value = generateStars(220)
  boxShadow3.value = generateStars(110)
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,#15294d_0%,#0a192f_45%,#050b16_100%)]"
    aria-hidden="true"
  >
    <div class="absolute inset-x-0 bottom-0 h-[65vh] bg-[radial-gradient(ellipse_at_bottom,rgba(240,180,41,0.16)_0%,rgba(240,180,41,0)_70%)]"></div>

    <div
      class="absolute inset-0 transition-transform duration-500 ease-out"
      :style="{ transform: `translate(${offsetX}px, ${offsetY}px)` }"
    >
      <div
        class="star-layer"
        :style="{
          left: '50%',
          top: '50%',
          width: `${TILE_W}px`,
          marginLeft: `${-TILE_W / 2}px`,
          marginTop: `${-TILE_H}px`,
          height: `${TILE_H * 2}px`
        }"
      >
        <div class="star-drift" :style="{ animationDuration: reduceMotion ? '0s' : `${speed}s` }">
          <div class="star-dot" :style="{ top: '0px', width: '1px', height: '1px', boxShadow: boxShadow1 }" />
          <div class="star-dot" :style="{ top: `${TILE_H}px`, width: '1px', height: '1px', boxShadow: boxShadow1 }" />
        </div>
      </div>

      <div
        class="star-layer"
        :style="{
          left: '50%',
          top: '50%',
          width: `${TILE_W}px`,
          marginLeft: `${-TILE_W / 2}px`,
          marginTop: `${-TILE_H}px`,
          height: `${TILE_H * 2}px`
        }"
      >
        <div class="star-drift" :style="{ animationDuration: reduceMotion ? '0s' : `${speed * 2}s` }">
          <div class="star-dot" :style="{ top: '0px', width: '1.5px', height: '1.5px', boxShadow: boxShadow2 }" />
          <div class="star-dot" :style="{ top: `${TILE_H}px`, width: '1.5px', height: '1.5px', boxShadow: boxShadow2 }" />
        </div>
      </div>

      <div
        class="star-layer"
        :style="{
          left: '50%',
          top: '50%',
          width: `${TILE_W}px`,
          marginLeft: `${-TILE_W / 2}px`,
          marginTop: `${-TILE_H}px`,
          height: `${TILE_H * 2}px`
        }"
      >
        <div class="star-drift" :style="{ animationDuration: reduceMotion ? '0s' : `${speed * 3}s` }">
          <div class="star-dot" :style="{ top: '0px', width: '2px', height: '2px', boxShadow: boxShadow3 }" />
          <div class="star-dot" :style="{ top: `${TILE_H}px`, width: '2px', height: '2px', boxShadow: boxShadow3 }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.star-layer {
  position: absolute;
  overflow: visible;
}

.star-drift {
  position: relative;
  width: 100%;
  height: 100%;
  animation-name: stars-drift;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.star-dot {
  position: absolute;
  left: 0;
  border-radius: 9999px;
  background: transparent;
}

@keyframes stars-drift {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>
