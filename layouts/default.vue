<template>
  <div id="top" class="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:flex lg:gap-8 lg:px-20">
    <StarsBackground />
    <div class="grain-overlay"></div>
    <BranchAccent />
    <TheHeader />
    <main class="lg:w-[52%] lg:py-24">
      <slot />
    </main>
  </div>
</template>
