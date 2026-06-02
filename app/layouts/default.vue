<script setup>
const reviewModalShow = ref(false);
</script>
<template>
    <div class="bg-surface text-on-surface">
        <Header @openReview="reviewModalShow = true"></Header>
        <NuxtPage />
        <Footer @openReview="reviewModalShow = true" />
        <ReviewModal v-model="reviewModalShow" />
    </div>
</template>