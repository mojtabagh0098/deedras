<script setup>
// متغیر route را برای دسترسی به اطلاعات آدرس فعلی تعریف می‌کنیم
const route = useRoute();

// در Nuxt نیازی به ایمپورت ref نیست (Auto-imported)
const reviewModalShow = ref(false);
</script>

<template>
    <div class="bg-surface text-on-surface mobile">
        <NuxtPage />

        <nav class="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant z-50 h-[72px] pb-[env(safe-area-inset-bottom)] px-2 flex justify-between items-center shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
            <RouterLink class="flex-1 flex flex-col items-center justify-center gap-1" :class="{ 'text-primary': $route.path === '/' }" to="/">
                <div class="w-12 h-8 flex items-center justify-center">
                    <span class="material-symbols-outlined" :class="{ 'fill-primary': $route.path === '/' }">
                        <svg v-if="$route.path === '/'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                    </span>
                </div>
                <span class="text-[11px] font-bold">خانه</span>
            </RouterLink>
            <RouterLink class="flex-1 flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface gap-1" :class="{ 'text-primary': $route.path === '/explore' }"
                to="/explore">
                <span class="material-symbols-outlined" :class="{ 'fill-primary': $route.path === '/explore' }">
                    <svg v-if="$route.path !== '/explore'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="m335-310 202-58q20-6 34.5-20.5T592-423l58-202q3-11-5.5-19.5T625-650l-202 58q-20 6-34.5 20.5T368-537l-58 202q-3 11 5.5 19.5T335-310Zm145-110q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
                    </svg>
                </span>
                <span class="text-[11px] font-medium">کاوش</span>
            </RouterLink>
            <!-- Large Center FAB -->
            <div class="flex-1 flex justify-center -mt-8 relative z-10">
                <button
                    class="w-16 h-16 bg-primary text-on-primary rounded-[20px] shadow-lg flex items-center justify-center rotate-45 transition-transform hover:bg-primary-container">
                    <span class="material-symbols-outlined -rotate-45 text-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    </span>
                </button>
            </div>
            <RouterLink class="flex-1 flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface gap-1" :class="{ 'text-primary': $route.path === '/saved' }"
                to="/saved">
                <span class="material-symbols-outlined" :class="{ 'fill-primary': $route.path === '/saved' }">
                    <svg v-if="$route.path !== '/saved'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                    </svg>
                </span>
                <span class="text-[11px] font-medium">ذخیره‌ها</span>
            </RouterLink>
            <RouterLink class="flex-1 flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface gap-1" :class="{ 'text-primary': $route.path === '/profile' }"
                to="/profile">
                <span class="material-symbols-outlined" :class="{ 'fill-primary': $route.path === '/profile' }">
                    <svg v-if="$route.path !== '/profile'" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z"/><path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></g></g></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/></g></svg>
                </span>
                <span class="text-[11px] font-medium">پروفایل</span>
            </RouterLink>
        </nav>
    </div>
</template>