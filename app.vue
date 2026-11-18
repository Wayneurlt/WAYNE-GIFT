<script setup lang="ts">
import { profile } from '~/data/profile'

const url = useRequestURL()
const route = useRoute()
const canonical = computed(() => `${url.origin}${route.path === '/' ? '/' : route.path}`)
const title = 'Wayne Gift | Full-Stack Software Developer'
const description =
  'Wayne Gift is a full-stack software developer building fast, reliable websites, web apps, and mobile apps. View my work and get in touch.'

useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.role,
        url: url.origin,
        email: profile.email,
        address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
        sameAs: profile.socials.map((s) => s.href).filter((h) => !h.includes('wa.me'))
      })
    }
  ]
})

useSeoMeta({
  ogType: 'website',
  ogSiteName: profile.name,
  ogTitle: title,
  ogDescription: description,
  ogUrl: canonical,
  twitterCard: 'summary',
  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
