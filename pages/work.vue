<script setup lang="ts">
import { categories, projects } from '~/data/projects'

definePageMeta({ layout: 'wide' })

useHead({
  title: 'All Work | Wayne Gift',
  meta: [
    {
      name: 'description',
      content: 'Every website, web app, and mobile app Wayne Gift has built, filterable by type.'
    }
  ]
})

const activeCategory = ref<(typeof categories)[number]>('All')

const query = ref('')
const sortBy = ref<'featured' | 'az'>('featured')

const filteredProjects = computed(() => {
  const q = query.value.trim().toLowerCase()
  const list = projects.filter((project) => {
    if (activeCategory.value !== 'All' && project.category !== activeCategory.value) return false
    if (!q) return true
    return [project.title, project.description, ...project.tags].some((text) => text.toLowerCase().includes(q))
  })
  if (sortBy.value === 'az') return [...list].sort((a, b) => a.title.localeCompare(b.title))
  // Featured first; the rest keep the order they have in data/projects.ts.
  return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
})
</script>

<template>
  <div>
    <div>
      <h1 class="font-serif text-4xl font-semibold tracking-tight text-slate-200 sm:text-5xl">All Work</h1>

      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">
        Every project I've shipped, {{ projects.length }} so far. Ask for a full case study on any of them.
      </p>
      <p class="mt-3 text-sm text-slate-500">
        I also build WhatsApp chatbots.
        <NuxtLink to="/chatbots" class="nav-link font-medium text-slate-300">See my chatbots →</NuxtLink>
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
      <div class="flex flex-wrap gap-2">
        <button
          v-for="category in categories"
          :key="category"
          class="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors"
          :class="activeCategory === category ? 'bg-navy-lightest text-slate-200' : 'text-slate-500 hover:text-slate-300'"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

        <div class="flex flex-1 flex-wrap items-center gap-3 sm:justify-end">
          <input
            v-model="query"
            type="search"
            placeholder="Search projects…"
            aria-label="Search projects"
            class="w-full rounded border border-navy-lightest bg-navy-light px-3 py-1.5 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-slate-500 sm:w-56"
          />
          <select
            v-model="sortBy"
            aria-label="Sort projects"
            class="rounded border border-navy-lightest bg-navy-light px-3 py-1.5 text-sm text-slate-300 outline-none focus:border-slate-500"
          >
            <option value="featured">Featured first</option>
            <option value="az">A–Z</option>
          </select>
        </div>
      </div>

      <p v-if="!filteredProjects.length" class="mt-10 text-sm text-slate-400">No projects match your search.</p>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ProjectCard v-for="(project, index) in filteredProjects" :key="project.title" :project="project" :index="index" />
      </div>
    </div>
    <TheFooter />
  </div>
</template>
