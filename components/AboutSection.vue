<script setup lang="ts">
import { profile } from '~/data/profile'

const highlights = [
  'End-to-end delivery: one point of contact, from idea to launch.',
  'Clear communication: regular updates and honest timelines.',
  'Built to last: clean, tested, well-documented code.'
]
</script>

<template>
  <section id="about" class="scroll-mt-24">
    <h2 class="section-label">About Me</h2>

    <div class="max-w-xl space-y-4 text-[15px] leading-relaxed text-slate-400">
      <p>{{ profile.bio }}</p>
      <p>Based in {{ profile.location }}.</p>
    </div>

    <ul class="mt-8 grid gap-3 sm:grid-cols-2">
      <li v-for="item in highlights" :key="item" class="flex gap-3 text-sm leading-relaxed text-slate-400">
        <span class="mt-0.5 text-amber">▹</span>
        {{ item }}
      </li>
    </ul>

    <div class="mt-10 flex flex-wrap items-center gap-6">
      <a :href="profile.resumeUrl" class="btn-ghost">Download Résumé</a>
      <a href="#contact" class="nav-link text-sm font-medium">Start a project →</a>
    </div>
  </section>
</template>
