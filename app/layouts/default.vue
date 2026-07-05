<script setup>
const reviewModalShow = ref(false);
const route = useRoute();
</script>
<template>
    <div class="bg-surface text-on-surface">
        <HeaderDesktop @openReview="reviewModalShow = true" v-if="!route.path.startsWith('/')" />
        <NuxtPage />
        <Footer @openReview="reviewModalShow = true"  v-if="!route.path.startsWith('/')" />
        <ReviewModal v-model="reviewModalShow" />
    </div>
</template>