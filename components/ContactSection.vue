<script setup lang="ts">
import { profile } from '~/data/profile'

const whatsapp = profile.socials.find((social) => social.icon === 'whatsapp')

const whatsappHref = computed(() => {
  if (!whatsapp) return undefined
  const firstName = profile.name.split(' ')[0]
  const message = encodeURIComponent(`Hi ${firstName}, I'd like to talk about a project.`)
  return `${whatsapp.href}?text=${message}`
})
</script>

<template>
  <section id="contact" class="scroll-mt-24 pb-4 text-center sm:pb-16">
    <p class="text-xs font-bold uppercase tracking-widest text-slate-500">What's Next?</p>
    <h2 class="mt-3 font-serif text-4xl font-semibold text-slate-200 sm:text-6xl">Get In Touch</h2>
    <p class="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
      Have a project, a role, or just an idea you want to talk through? Message me and I'll
      get back to you within a day or two.
    </p>

    <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
      <a v-if="whatsappHref" :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="btn-ghost">
        Chat on WhatsApp
      </a>
      <a :href="`mailto:${profile.email}`" class="nav-link text-sm font-medium">or email instead →</a>
    </div>
  </section>
</template>
