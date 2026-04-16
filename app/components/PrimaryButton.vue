<template>
  <button 
    class="px-6 py-2 rounded-md transition-all duration-300 flex items-center gap-2 shadow-xl"
    :class="variant === 'primary' ? 'bg-primary-600 hover:bg-primary-400 text-white' : 'bg-white/10 hover:bg-white/20'"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { default: 'primary' }
})
</script>