<script setup lang="ts">
import { skillGroups } from '~/data/skills'
</script>

<template>
  <section id="skills" class="scroll-mt-24">
    <h2 class="section-label">Skills &amp; Tools</h2>

    <p class="max-w-xl text-[15px] leading-relaxed text-slate-400">
      Languages, frameworks, and tools I reach for to take a project from idea to production.
    </p>

    <div class="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
      <div v-for="group in skillGroups" :key="group.title">
        <h3 class="text-xs font-bold uppercase tracking-widest text-slate-500">{{ group.title }}</h3>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li v-for="item in group.items" :key="item" class="tag">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
