<script setup lang="ts">
import { profile } from '~/data/profile'

const isOpen = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' }
]

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header>
    <!-- Mobile top bar -->
    <div class="flex items-center justify-between py-5 lg:hidden">
      <a href="#top" class="text-lg font-bold text-slate-200">
        {{ initials }}
      </a>
      <button
        class="flex h-10 w-10 items-center justify-center rounded border border-navy-lightest text-slate-300"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile nav overlay -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-navy lg:hidden">
        <button
          class="absolute right-6 top-5 flex h-10 w-10 items-center justify-center rounded border border-navy-lightest text-slate-300"
          aria-label="Close menu"
          @click="closeMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-200"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>

        <div class="mt-4 flex gap-6">
          <a
            v-for="social in profile.socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="text-slate-400 transition-colors hover:text-slate-200"
          >
            <SocialIcon :name="social.icon" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </transition>

    <!-- Desktop sidebar -->
    <div class="hidden lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-center lg:gap-14 lg:py-24">
      <div>
        <h1 class="font-serif text-5xl font-semibold tracking-tight text-slate-200">{{ profile.name }}</h1>
        <p class="mt-3 text-lg font-medium tracking-tight text-slate-200">{{ profile.role }}</p>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
          {{ profile.tagline }}
        </p>

        <nav class="mt-16">
          <ul class="flex flex-col">
            <li v-for="link in links" :key="link.href">
              <a :href="link.href" class="group flex items-center py-3 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-200">
                <span class="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-5">
        <a
          v-for="social in profile.socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          :title="social.label"
          class="text-slate-400 transition hover:-translate-y-0.5 hover:text-slate-200"
        >
          <SocialIcon :name="social.icon" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </header>
</template>
