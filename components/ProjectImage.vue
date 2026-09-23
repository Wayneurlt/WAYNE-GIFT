<script setup lang="ts">
// mShots renders a screenshot asynchronously — the first request or two for a
// URL it hasn't seen before can return a fixed 400x300 "Generating Preview…"
// placeholder instead of the real capture. That placeholder is reliably
// 400x300 regardless of the requested width, so we can detect it and quietly
// retry with backoff until the real screenshot is ready.
const props = defineProps<{ src: string; alt: string; class?: string }>()

const currentSrc = ref(props.src)
const attempt = ref(0)
const delays = [4000, 6000, 10000, 15000]
let timer: ReturnType<typeof setTimeout> | undefined

function isMshots(url: string) {
  return url.includes('s.wordpress.com/mshots')
}

function isPlaceholder(img: HTMLImageElement) {
  return img.naturalWidth === 400 && img.naturalHeight === 300
}

function handleLoad(event: Event) {
  if (!isMshots(props.src)) return
  const img = event.target as HTMLImageElement

  if (isPlaceholder(img) && attempt.value < delays.length) {
    const delay = delays[attempt.value]
    attempt.value += 1
    timer = setTimeout(() => {
      currentSrc.value = `${props.src}&_retry=${attempt.value}`
    }, delay)
  }
}

watch(
  () => props.src,
  (newSrc) => {
    if (timer) clearTimeout(timer)
    currentSrc.value = newSrc
    attempt.value = 0
  }
)

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <img :src="currentSrc" :alt="alt" :class="props.class" loading="lazy" @load="handleLoad" />
</template>
