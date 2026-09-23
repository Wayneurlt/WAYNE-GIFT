<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <footer class="py-10 text-center lg:pb-0 lg:pt-16">
    <div>
      <div class="mb-4 flex justify-center gap-6 lg:hidden">
        <a
          v-for="social in profile.socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="text-slate-500 transition-colors hover:text-slate-200"
        >
          <SocialIcon :name="social.icon" class="h-4 w-4" />
        </a>
      </div>
      <p class="font-mono text-xs text-slate-500">Designed &amp; built by {{ profile.name }}</p>
    </div>
  </footer>
</template>
