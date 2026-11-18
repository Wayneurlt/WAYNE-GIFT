<script setup lang="ts">
import { projects } from '~/data/projects'

const featured = projects.filter((project) => project.featured).slice(0, 4)
</script>

<template>
  <section id="work" class="scroll-mt-24">
    <h2 class="section-label">Work</h2>

    <p class="max-w-xl text-[15px] leading-relaxed text-slate-400">
      A snapshot of recent projects across web and mobile. Ask for a full case study on any of
      them.
    </p>

    <div class="mt-10 grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="(project, index) in featured" :key="project.title" :project="project" :index="index" />
    </div>

    <div class="mt-10">
      <NuxtLink to="/work" class="nav-link text-sm font-medium">
        View all work ({{ projects.length }} projects) →
      </NuxtLink>
    </div>
  </section>
</template>
