<script setup lang="ts">
import { testimonials } from '~/data/testimonials'

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
</script>

<template>
  <section v-if="testimonials.length" id="testimonials" class="scroll-mt-24">
    <h2 class="section-label">Kind words</h2>

    <div class="grid gap-6 sm:grid-cols-2">
      <figure v-for="t in testimonials" :key="t.name" class="card relative flex flex-col overflow-hidden p-6">
        <blockquote class="relative flex-1 text-[15px] leading-relaxed text-slate-300">{{ t.quote }}</blockquote>

        <figcaption class="mt-6 flex items-center gap-3">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-lightest bg-navy-lightest text-xs font-bold tracking-wider text-amber">
            {{ initials(t.name) }}
          </span>
          <span class="min-w-0 text-xs leading-snug">
            <span class="block font-semibold text-slate-200">{{ t.name }}</span>
            <a
              v-if="t.url"
              :href="t.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-500 transition hover:text-slate-300 hover:underline"
            >
              {{ t.role }} ↗
            </a>
            <span v-else class="text-slate-500">{{ t.role }}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
