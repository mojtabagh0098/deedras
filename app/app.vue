<!-- app/app.vue -->
<script setup>
const { isMobile } = useDevice()
const layout = isMobile ? 'mobile' : 'default'
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>