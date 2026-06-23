<script setup>
import PrimaryButton from '~/components/PrimaryButton.vue';
import ReviewCard from '~/components/reviews/review-card.vue';

// definePageMeta({
//     layout: 'default'
// })
const source = ref([
    { id: 2 },
    { id: 3 }
])
</script>
<template>
    <!-- <NuxtLayout name="default"> -->
        <section class="py-16 md:py-24 text-center">
            <h2 class="text-4xl md:text-6xl font-black text-primary tracking-tight mb-6">به دیدرس خوش آمدید</h2>
            <p class="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-12">
                مرجع تجربه‌های واقعی و محلی؛ جایی برای کشف بهترین‌های شهر از زبان کسانی که آنجا بوده‌اند.
            </p>
            <!-- Large Hero Search Box -->
            <div
                class="max-w-4xl mx-auto bg-surface-container-lowest p-4 rounded-[32px] shadow-2xl shadow-primary/5 flex flex-col md:flex-row items-center gap-4">
                <div class="w-full md:flex-1 relative">
                    <div
                        class="flex items-center gap-3 px-6 py-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors">
                        <span class="material-symbols-outlined text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px"
                                fill="#757682">
                                <path
                                    d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                            </svg>
                        </span>
                        <div class="text-right">
                            <span class="block text-[10px] text-outline font-bold uppercase">کجا؟</span>
                            <span class="text-sm font-bold text-on-surface">انتخاب شهر</span>
                        </div>
                    </div>
                </div>
                <div class="w-full md:flex-[2] relative">
                    <div
                        class="flex items-center gap-3 px-6 py-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors">
                        <span class="material-symbols-outlined text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#757682" height="24px"
                                viewBox="0 -960 960 960" width="24px">
                                <path
                                    d="m300-300 280-80 80-280-280 80-80 280Zm180-120q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z" />
                            </svg>
                        </span>
                        <div class="text-right flex-grow">
                            <span class="block text-[10px] text-outline font-bold uppercase">چه چیزی؟</span>
                            <input
                                class="bg-transparent border-none p-0 focus:ring-0 text-sm font-bold text-on-surface w-full"
                                placeholder="رستوران، کافه، مرکز خرید..." type="text">
                        </div>
                    </div>
                </div>
                <button
                    class="w-full md:w-auto px-10 py-5 bg-primary text-white rounded-[24px] font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="18px"
                            fill="#fff">
                            <path
                                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </span>
                    جستجو
                </button>
            </div>
            <!-- Category Chips -->
            <div class="mt-8 flex flex-wrap justify-center gap-3">
                <span
                    class="px-5 py-2 bg-secondary text-white rounded-full text-sm font-bold cursor-pointer transition-all hover:scale-105">رستوران
                    و کافه</span>
                <span
                    class="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container transition-all cursor-pointer">گردشگری</span>
                <span
                    class="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container transition-all cursor-pointer">مراکز
                    خرید</span>
                <span
                    class="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container transition-all cursor-pointer">خدمات
                    درمانی</span>
                <span
                    class="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container transition-all cursor-pointer">ورزشی</span>
            </div>
        </section>
        <section id="section-featured-businesses" class="max-w-2xl mx-auto pt-2 pb-14 px-4 section-clickable">
            <div class="flex items-center justify-between mb-7 section-clickable" id="featured-businesses-header">
                <h2 class="text-2xl font-bold text-[#22223b]" contenteditable="false">
                    تجربه‌های اخیر
                </h2>
            </div>
            <div class="flex flex-col gap-6">
                <!-- Card 1: Restaurant -->
                <!-- <ReviewCard v-for="(item, index) in source" :key="index" :review="item" /> -->
                <ReviewCard :experience="{
                    id: 'exp-123',
                    user: {
                        name: 'سارا احمدی',
                        avatar: '/img/avatar/ionibowcher.png',
                        verified: true
                    },
                    rating: 4.5,
                    timeAgo: '۲ ساعت پیش',
                    text: 'امروز برای صبحانه رفتم کافه ونوس. فضای داخلی فوق‌العاده دنج بود و برخورد پرسنل هم خیلی محترمانه. پنکیک‌هاشون رو حتما پیشنهاد می‌کنم! 🥞☕️',
                    image: '/img/biz/review-image.png',
                    business: {
                        id: 'cafe-venus',
                        name: 'کافه رستوران ونوس',
                        logo: '/img/biz/4.webp',
                        rating: 4.8,
                        category: 'کافه و رستوران',
                        location: 'ولیعصر'
                    },
                    stats: {
                        useful: 243,
                        comments: 3,
                        reposts: 1
                    }
                }" />
                <!-- Card 4 (Partial - Visual Hint) -->
                <article aria-hidden="true"
                    class="w-54 bg-white rounded-2xl shadow-md border border-gray-100 opacity-60 pointer-events-none hidden md:block">
                    <div class="p-5 flex justify-between items-start">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-full bg-gray-200"></div>
                            <div class="space-y-2">
                                <div class="h-4 w-32 bg-gray-200 rounded"></div>
                                <div class="h-3 w-20 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                        <div class="h-6 w-20 bg-gray-100 rounded-lg"></div>
                    </div>
                    <!-- Fade out effect -->
                    <div class="h-32 bg-gradient-to-b from-white to-transparent"></div>
                </article>
            </div>
        </section>
    <!-- </NuxtLayout> -->
</template>
<style>
.review-box-gradient {
    background: linear-gradient(to bottom, #f9fafb, #ffffff);
}
</style>