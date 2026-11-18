<script setup lang="ts">
import { projectImage, type Project } from '~/data/projects'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <div class="card group flex flex-col overflow-hidden">
    <div class="aspect-[16/10] w-full overflow-hidden border-b border-navy-lightest bg-navy-light">
      <ProjectImage
        :src="projectImage(project, index)"
        :alt="`${project.title} screenshot`"
        class="h-full w-full object-cover object-top opacity-90 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.03]"
      />
    </div>
    <div class="flex flex-1 flex-col p-6">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-semibold text-slate-200">{{ project.title }}</h3>
        <span class="mt-0.5 shrink-0 text-[11px] font-bold uppercase tracking-widest text-slate-500">{{ project.category }}</span>
      </div>
      <p v-if="project.role" class="mt-1 text-xs font-semibold text-amber">{{ project.role }}</p>
      <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ project.description }}</p>

      <ul v-if="project.highlights?.length" class="mt-3 space-y-1.5">
        <li v-for="point in project.highlights" :key="point" class="flex gap-2 text-sm leading-relaxed text-slate-400">
          <span class="mt-0.5 shrink-0 text-amber">▹</span>{{ point }}
        </li>
      </ul>

      <div class="flex-1"></div>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>

      <div class="mt-5 flex gap-5 text-xs font-medium">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="text-slate-300 transition hover:text-slate-100 hover:underline">
          Live ↗
        </a>
        <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" rel="noopener noreferrer" class="text-slate-300 transition hover:text-slate-100 hover:underline">
          Code ↗
        </a>
      </div>
    </div>
  </div>
</template>
