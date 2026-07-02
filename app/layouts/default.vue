<script setup>
const reviewModalShow = ref(false);
</script>
<template>
    <div class="bg-surface text-on-surface">
        <HeaderDesktop @openReview="reviewModalShow = true" />
        <NuxtPage />
        <Footer @openReview="reviewModalShow = true" />
        <ReviewModal v-model="reviewModalShow" />
    </div>
</template>