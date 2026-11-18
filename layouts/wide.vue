<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <div id="top" class="mx-auto min-h-screen max-w-screen-2xl px-6 md:px-12 lg:px-16">
    <StarsBackground />
    <div class="grain-overlay"></div>
    <header class="flex items-center justify-between py-6">
      <NuxtLink to="/#top" class="font-serif text-xl font-semibold tracking-tight text-slate-200">
        {{ profile.name }}
      </NuxtLink>
      <NuxtLink to="/#work" class="nav-link text-sm font-medium">← Back to home</NuxtLink>
    </header>
    <main class="pb-8 pt-6">
      <slot />
    </main>
  </div>
</template>
