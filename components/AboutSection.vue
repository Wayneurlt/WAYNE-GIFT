<script setup lang="ts">
import { profile } from '~/data/profile'
import { projects } from '~/data/projects'

const highlights = [
  'End-to-end delivery: one point of contact, from idea to launch.',
  'Clear communication: regular updates and honest timelines.',
  'Built to last: clean, tested, well-documented code.'
]

function urlFor(title: string) {
  return projects.find((project) => project.title === title)?.liveUrl
}

const linkClass = 'text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors hover:decoration-slate-300'
</script>

<template>
  <section id="about" class="scroll-mt-24">
    <h2 class="section-label">About Me</h2>

    <div class="max-w-xl space-y-4 text-[15px] font-medium leading-relaxed text-slate-300">
      <p>{{ profile.bio }}</p>
      <p>
        Currently, I'm a Software Developer at Play Communications, where I build and ship
        products like
        <a :href="urlFor('Temi')" target="_blank" rel="noopener noreferrer" :class="linkClass">Temi</a>,
        <a href="https://theplaygroup.net/" target="_blank" rel="noopener noreferrer" :class="linkClass">Play Communications</a>, and
        <a :href="urlFor('ByZara')" target="_blank" rel="noopener noreferrer" :class="linkClass">ByZara</a>.
        In 2025, I moved onto the team helping build
        <a :href="urlFor('Zuri Health')" target="_blank" rel="noopener noreferrer" :class="linkClass">Zuri Health</a>,
        one of the platforms I'm proudest to have worked on.
      </p>
      <p>
        When I'm not writing code, you'll probably find me gaming on PlayStation, on the
        basketball court, hunched over a chess board, playing football, or just dancing to
        whatever's playing.
      </p>
      <p>Based in {{ profile.location }}.</p>
    </div>

    <ul class="mt-8 grid gap-3 sm:grid-cols-2">
      <li v-for="item in highlights" :key="item" class="flex gap-3 text-sm leading-relaxed text-slate-400">
        <span class="mt-0.5 text-amber">▹</span>
        {{ item }}
      </li>
    </ul>

    <div class="mt-10 flex flex-wrap items-center gap-6">
      <a href="#work" class="btn-ghost">View My Work</a>
      <a href="#contact" class="nav-link text-sm font-medium">Start a project →</a>
    </div>
  </section>
</template>
