<template>
  <button 
    class="px-5 py-2 rounded-md transition-all duration-300 flex items-center gap-2 font-[600] text-sm shadow-xl"
    :class="variant === 'primary' ? 'bg-white text-primary-600 border-primary-600 border-[2px] hover:bg-primary-300' : 'bg-white/10 hover:bg-white/20'"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { default: 'primary' }
})
</script>