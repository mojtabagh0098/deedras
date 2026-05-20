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
    <header class="sticky top-0 z-50 w-full border-b border-[#e8eaf3] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,35,111,0.05)] px-4 py-3">
        <div class="layout-container mx-auto max-w-7xl flex items-center justify-between gap-4">
            <div class="flex items-center gap-8">
                <RouterLink to="/" class="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
                    <div class="size-8 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                        <svg class="fill-primary text-2xl" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"></path>
                        </svg>
                    </div>
                    <h2 class="hidden md:block text-2xl font-black tracking-tight text-primary">دیدرس</h2>
                </RouterLink>
                <div class="flex items-center bg-surface-light rounded-full px-4 w-94 md:w-96 border border-transparent transition-all">
                    <div class="flex items-center gap-2 flex-grow">
                        <span class="material-symbols-outlined fill-outline text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px"
                                fill="#757682">
                                <path
                                    d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                            </svg>
                        </span>
                        <input class="bg-transparent border-none text-sm w-full py-3" placeholder="چه چیزی؟"
                            type="text">
                    </div>
                    <div class="flex items-center gap-2 border-r border-outline-variant/30 pr-3 mr-3">
                        <span class="material-symbols-outlined fill-outline text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px"
                                fill="#757682">
                                <path
                                    d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                            </svg>
                        </span>
                        <span class="text-sm text-outline">تهران</span>
                    </div>
                </div>
            </div>
            <div class="hidden md:flex items-center gap-3">
                <RouterLink to="add-review" class="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                    <span class="material-symbols-outlined text-lg fill-white">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                            <path
                                d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                        </svg>
                    </span>
                    ثبت تجربه جدید
                </RouterLink>
                <div class="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>
                <button @click="showAuthModal = true"
                    class="flex items-center gap-2 text-primary font-bold text-sm px-4 py-2 rounded-full hover:bg-primary/5 transition-colors">
                    <span class="material-symbols-outlined fill-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                            <path
                                d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 48₀−₅₆₀t₅₆.₅−₂₃.₅ZM₄₈₀−₆₄₀Zm₀ ₄₀₀Z" />
                        </svg>
                    </span>
                    ورود / ثبت‌نام
                </button>
                <LoginModal v-model="showAuthModal" @authSuccess="handleAuthSuccess"></LoginModal>
            </div>
        </div>
    </header>
</template>