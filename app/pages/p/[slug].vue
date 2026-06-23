<script setup lang="ts">
const { isMobile } = useDevice()

// لایوت پیش‌فرض اتوماتیک را غیرفعال می‌کنیم تا خودمان دستی با NuxtLayout کنترلش کنیم
// definePageMeta({
//   layout: false
// })

const emit = defineEmits(['openReview'])
</script>

<template>
  <div>
      <SingleBizDesktop  v-if="!isMobile" @openReview="emit('openReview')" />
      <div  v-else class="bg-slate-50 min-h-screen pb-16">
        <SingleBizMobile @openReview="emit('openReview')" />
      </div>
  </div>
</template>