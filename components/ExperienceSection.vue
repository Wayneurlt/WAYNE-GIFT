<script setup lang="ts">
import { experience } from '~/data/experience'
</script>

<template>
  <section id="experience" class="scroll-mt-24">
    <h2 class="section-label">Experience</h2>

    <p class="max-w-xl text-[15px] leading-relaxed text-slate-400">
      Where I've worked and what I've built along the way.
    </p>

    <ol class="mt-10 space-y-10">
      <li v-for="job in experience" :key="job.company + job.period" class="sm:grid sm:grid-cols-[160px_1fr] sm:gap-6">
        <div class="font-mono text-xs text-slate-500">{{ job.period }}</div>
        <div class="mt-1 sm:mt-0">
          <h3 class="font-semibold text-slate-200">
            {{ job.title }}
            <span class="font-normal text-slate-500">at {{ job.company }}</span>
          </h3>
          <ul v-if="job.highlights?.length" class="mt-3 space-y-1.5">
            <li v-for="point in job.highlights" :key="point" class="flex gap-2 text-sm leading-relaxed text-slate-400">
              <span class="mt-0.5 shrink-0 text-amber">▹</span>{{ point }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
