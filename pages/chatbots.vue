<script setup lang="ts">
import data from '~/data/chatbots.json'

definePageMeta({ layout: 'wide' })

useHead({
  title: 'Chatbots | Wayne Gift',
  meta: [
    {
      name: 'description',
      content: 'WhatsApp virtual-hospital and consumer chatbots built by Wayne Gift on SendPulse.'
    }
  ]
})

// Only WhatsApp bots are listed: those are the ones I built.
const bots = data.bots.filter((b) => b.channel === 'WHATSAPP')

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
        {{ bots.length }} WhatsApp virtual-hospital and consumer chatbots I built on SendPulse.
      </p>

      <ul class="mt-6 max-w-xl list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-500">
        <li>
          Source: SendPulse chatbots API, read-only, retrieved {{ formatDate(data.retrievedAt) }}. Only bot names,
          creation dates and inbox totals were read. No contacts or messages were accessed.
        </li>
        <li>Scope: {{ data.scope }}.</li>
        <li>"Conversations" is the number of conversations in a bot's inbox. It is not a count of users.</li>
      </ul>

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
        <li
          v-for="bot in filtered.slice(0, visible)"
          :key="bot.id"
          class="flex items-center justify-between gap-4 rounded border border-navy-lightest bg-navy-light p-4"
        >
          <div class="min-w-0">
            <p class="break-words text-sm font-medium leading-snug text-slate-200">{{ bot.name }}</p>
            <p class="mt-1 text-xs text-slate-500">WhatsApp · {{ formatDate(bot.createdAt, { month: 'short', year: 'numeric' }) }}</p>
          </div>
          <div class="shrink-0 text-right">
            <p class="text-sm font-medium tabular-nums text-slate-200">{{ bot.inboxTotal.toLocaleString('en-GB') }}</p>
            <p class="text-[11px] text-slate-500">conversations</p>
          </div>
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
