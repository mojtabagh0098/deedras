<script setup lang="ts">
const { isMobile } = useDevice()

// لایوت پیش‌فرض اتوماتیک را غیرفعال می‌کنیم تا خودمان دستی با NuxtLayout کنترلش کنیم

const emit = defineEmits(['openReview'])
</script>

<template>
    <ExploreDesktop  v-if="!isMobile" @openReview="emit('openReview')" />
    <div v-else class="bg-slate-50 min-h-screen pb-16">
      <ExploreMobile @openReview="emit('openReview')" />
    </div>
</template>