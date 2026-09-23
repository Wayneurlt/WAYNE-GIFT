<template>
  <div id="top" class="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:flex lg:gap-8 lg:px-20">
    <StarsBackground />
    <div class="grain-overlay"></div>
    <TheHeader />
    <main class="lg:w-[52%] lg:py-24">
      <div class="flex flex-col gap-24 py-16 sm:gap-32 sm:py-20 lg:gap-40 lg:py-0">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <TheFooter />
    </main>
  </div>
</template>
