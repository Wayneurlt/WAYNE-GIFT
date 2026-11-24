<script setup lang="ts">
import data from '~/data/chatbots.json'

definePageMeta({ layout: 'wide' })

useHead({
  title: 'Chatbots | Wayne Gift',
  meta: [
    {
      name: 'description',
      content: 'WhatsApp, Instagram and website chatbots built by Wayne Gift on SendPulse.'
    }
  ]
})

type Bot = { id: string; name: string; channel: string; createdAt: string; phone?: string }
const bots = data.bots as Bot[]

const channelName: Record<string, string> = { WHATSAPP: 'WhatsApp', INSTAGRAM: 'Instagram', LIVE_CHAT: 'Website chat' }
const waLink = (b: Bot) => (b.phone ? `https://wa.me/${b.phone}?text=${encodeURIComponent('Hi')}` : undefined)

const query = ref('')
const visible = ref(30)
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return bots.filter((b) => !q || b.name.toLowerCase().includes(q))
})
watch(query, () => (visible.value = 30))

function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }) {
  return new Date(iso).toLocaleDateString('en-GB', opts)
}
</script>

<template>
  <div>
    <div>
      <h1 class="font-serif text-4xl font-semibold tracking-tight text-slate-200 sm:text-5xl">Chatbots</h1>

      <p class="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">
        {{ bots.length }} WhatsApp, Instagram and website chatbots I built on SendPulse. Tap a WhatsApp bot to open it in WhatsApp.
      </p>
      <p class="mt-3 text-sm text-slate-500">
        Looking for websites, web apps or mobile apps?
        <NuxtLink to="/work" class="nav-link font-medium text-slate-300">See all my work →</NuxtLink>
      </p>

      <div class="mt-8">
        <input
          v-model="query"
          type="search"
          placeholder="Search chatbots…"
          aria-label="Search chatbots"
          class="w-full rounded border border-navy-lightest bg-navy-light px-3 py-1.5 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-slate-500 sm:w-64"
        />
      </div>

      <p v-if="!filtered.length" class="mt-10 text-sm text-slate-400">No chatbots match your search.</p>

      <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <li v-for="bot in filtered.slice(0, visible)" :key="bot.id">
          <component
            :is="waLink(bot) ? 'a' : 'div'"
            :href="waLink(bot)"
            :target="waLink(bot) ? '_blank' : undefined"
            :rel="waLink(bot) ? 'noopener noreferrer' : undefined"
            :aria-label="waLink(bot) ? `Open ${bot.name} on WhatsApp` : undefined"
            class="flex items-center gap-3 rounded border border-navy-lightest bg-navy-light p-4 transition-colors"
            :class="waLink(bot) ? 'hover:border-slate-500' : ''"
          >
            <span class="shrink-0 text-slate-400">
              <SocialIcon v-if="bot.channel === 'WHATSAPP'" name="whatsapp" class="h-5 w-5" />
              <svg v-else-if="bot.channel === 'INSTAGRAM'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.6 3.75 5.6 3.75 9S14.5 18.4 12 21c-2.5-2.6-3.75-5.6-3.75-9S9.5 5.6 12 3Z" />
              </svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="block break-words text-sm font-medium leading-snug text-slate-200">{{ bot.name }}</span>
              <span class="mt-1 block text-xs text-slate-500">{{ channelName[bot.channel] ?? bot.channel }} · {{ formatDate(bot.createdAt, { month: 'short', year: 'numeric' }) }}</span>
            </span>
          </component>
        </li>
      </ul>

      <button
        v-if="filtered.length > visible"
        type="button"
        class="mt-6 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-300"
        @click="visible += 30"
      >
        Show more
      </button>
    </div>
    <TheFooter />
  </div>
</template>
