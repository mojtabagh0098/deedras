<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  name: { type: String, default: 'Cafe Roasters' },
  location: { type: String, default: 'Vanak Sq, Tehran' },
  image: { type: String, default: 'https://lh3.googleusercontent.com/aida-public/...' },
  showFollow: { type: Boolean, default: true }
})

const isVisible = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const heroSection = document.querySelector('section.bg-surface-container-lowest') || 
                      document.querySelector('#main-hero') // fallback

  if (!heroSection) return

  const triggerPoint = heroSection.offsetTop + heroSection.offsetHeight - 80

  if (window.scrollY > triggerPoint) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Initial check
  setTimeout(handleScroll, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    :class="[
      'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-outline-variant transition-transform duration-300 lg:mr-[338px]',
      isVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
    id="sticky-business-header"
  >
    <div class="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
      <!-- Right Side (RTL) - Profile Info -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl overflow-hidden border border-outline-variant flex-shrink-0">
          <img
            :src="image"
            :alt="name"
            class="w-full h-full object-cover"
          >
        </div>
        <div class="flex flex-col">
          <h2 class="font-bold text-base text-on-surface leading-tight">
            {{ name }}
          </h2>
          <p class="text-sm text-on-surface-variant">
            {{ location }}
          </p>
        </div>
      </div>

      <!-- Left Side (RTL) - Actions -->
      <div class="flex items-center gap-2">
        <!-- ثبت تجربه -->
        <button
          class="bg-[#1e3a8a] text-white font-medium px-5 h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-900 transition-all active:scale-95 shadow-sm"
        >
          <span class="material-symbols-outlined text-xl fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>
          </span>
          <span class="hidden sm:inline">ثبت تجربه</span>
        </button>

        <!-- دنبال کردن -->
        <button
          v-if="showFollow"
          class="bg-white text-[#1e3a8a] border border-[#1e3a8a] font-medium px-5 h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-all active:scale-95"
        >
          <span class="material-symbols-outlined text-xl fill-primary">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-640Zm0 400Z"/></svg>
          </span>
          <span class="hidden sm:inline">دنبال کردن</span>
        </button>

        <!-- More Menu -->
        <button
          class="text-on-surface-variant hover:bg-surface-container-low w-10 h-10 rounded-xl flex items-center justify-center transition-colors border border-outline-variant hover:border-primary/30"
        >
          <span class="material-symbols-outlined text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>