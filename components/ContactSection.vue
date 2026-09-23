<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="contact" class="scroll-mt-24 pb-4 text-center sm:pb-16">
    <p class="text-xs font-bold uppercase tracking-widest text-slate-500">What's Next?</p>
    <h2 class="mt-3 font-serif text-4xl font-semibold text-slate-200 sm:text-6xl">Get In Touch</h2>
    <p class="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
      Have a project, a role, or just an idea you want to talk through? My inbox is always
      open, and I'll get back to you within a day or two.
    </p>
    <a :href="`mailto:${profile.email}`" class="btn-ghost mt-10 inline-flex">Say Hello</a>
  </section>
</template>
