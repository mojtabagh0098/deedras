<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const visible = ref(false);
const searchVisible = ref(false);
const loginVisible = ref(false);
const isSticky = ref(false)
let lastScroll = 0
let topScroll = ref(true);
let scrolled = ref(false);
const showAuthModal = ref(false);

function handleAuthSuccess(data) {
  console.log('User authenticated:', data)
}

const handleScroll = () => {
    const current = window.scrollY

    // if user is top of page
    if (current <= 0) {
        topScroll.value = true
        isSticky.value = false
        scrolled.value = false
    } else {
        topScroll.value = false

        // if user is scrolling in top
        if (current < lastScroll) {
            isSticky.value = true
        } else {
            isSticky.value = false
            scrolled.value = true
        }
    }

    lastScroll = current
}

onMounted(() => {
    lastScroll = window.scrollY
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
    <header class="sticky top-0 z-50 w-full border-b border-[#e8eaf3] bg-white dark:bg-[#1a1d2d] px-4 py-3 shadow-sm">
        <div class="layout-container mx-auto max-w-7xl flex items-center justify-between gap-4">
            <div class="flex items-center gap-8">
                <RouterLink to="/" class="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
                    <div class="size-8 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                        <svg class="fill-primary text-2xl" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"></path></svg>
                    </div>
                    <h2 class="text-2xl font-black tracking-tight text-primary">دیدرس</h2>
                </RouterLink>
                <div class="hidden md:flex items-center gap-2">
                    <div class="relative group">
                        <label class="flex relative w-full z-20 group">
                            <div class="flex items-stretch rounded-lg border-2 border-transparent transition-all duration-150 group-focus-within:border-primary">
                                
                                <input class="peer w-full h-10 pr-4 pl-4 rounded-r-lg border border-[#e8eaf3] bg-[#f8f9fb] text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-muted/70"
                                    placeholder="جستجو برای رستوران، کافه..." type="text" />
                                <input class="w-30 h-10 pr-4 pl-3 rounded-l-lg border border-[#e8eaf3] bg-[#f8f9fb] text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-muted/70"
                                    placeholder="تهران" type="text" />
                                <button class="absolute inset-y-0 left-0 flex items-center pl-3 text-white bg-primary hover:bg-primary/90 rounded-l-lg px-4 transition-colors z-30">
                                    <svg class="w-[24px]" fill="#fff" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path></svg>
                                </button>
                            </div>
                        </label>
                        <div
                            class="absolute top-full right-0 w-full lg:w-[calc(100%+3rem)] bg-white rounded-lg shadow-xl border border-[#e8eaf3] mt-2 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-10 overflow-hidden">
                            <div class="p-2">
                                <div class="text-xs font-bold text-text-muted px-3 py-2">جستجوهای اخیر</div>
                                <a class="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group/item"
                                    href="#">
                                    <svg class="w-[24px] fill-gray-400 group-hover/item:text-primary text-xl" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"></path></svg>
                                    <span class="text-sm text-text-main">رستوران شاندیز</span>
                                </a>
                                <a class="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group/item"
                                    href="#">
                                    <svg class="w-[24px] fill-gray-400 group-hover/item:text-primary text-xl" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"></path></svg>
                                    
                                    <span class="text-sm text-text-main">کافه لمیز</span>
                                </a>
                                <div class="border-t border-gray-100 my-2"></div>
                                <div class="text-xs font-bold text-text-muted px-3 py-2">پیشنهادات محبوب</div>
                                <a class="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group/item"
                                    href="#">
                                    <svg class="w-[24px] fill-gray-400 group-hover/item:text-primary text-xl" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4"></path></svg>
                                    <span class="text-sm text-text-main">رستوران‌های سنتی</span>
                                </a>
                                <a class="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group/item"
                                    href="#">
                                    <svg class="w-[24px] fill-gray-400 group-hover/item:text-primary text-xl" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2m0 5h-2V5h2zM4 19h16v2H4z"></path></svg>
                                    <span class="text-sm text-text-main">کافه‌های فضای باز</span>
                                </a>
                                <a class="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer group/item"
                                    href="#">
                                    <svg class="w-[24px] fill-gray-400 group-hover/item:text-primary text-xl" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1m15.03-7c0-8-15.03-8-15.03 0zM1.02 17h15v2h-15z"></path></svg>
                                    <span class="text-sm text-text-main">فست فود</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <RouterLink to="add-biz" class="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-text-muted hover:text-primary transition-colors">
                    <svg class="w-[24px]" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zM2 4h15v2H2z"></path><path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></path></svg>
                    <span>ثبت کسب‌وکار</span>
                </RouterLink>
                <button
                    @click="showAuthModal = true"
                    class="flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-md transition-all">
                    <span>ورود / ثبت‌نام</span>
                </button>
                <LoginModal v-model="showAuthModal" @authSuccess="handleAuthSuccess"></LoginModal>
            </div>
        </div>
    </header>
</template>