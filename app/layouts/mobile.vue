<script setup>
// متغیر route را برای دسترسی به اطلاعات آدرس فعلی تعریف می‌کنیم
const route = useRoute();

// در Nuxt نیازی به ایمپورت ref نیست (Auto-imported)
const reviewModalShow = ref(false);
</script>

<template>
    <div class="bg-surface text-on-surface mobile">
        <!-- حالا route به درستی شناخته می‌شود -->
        <HeaderMobile v-if="!route.path.startsWith('/p/')" />
        
        <NuxtPage />
    </div>
</template>