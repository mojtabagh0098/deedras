<script setup>
import PrimaryButton from '~/components/PrimaryButton.vue';
import ReviewCard from '~/components/reviews/review-card.vue';

const source = ref([
    { id: 2 },
    { id: 3 }
])
</script>
<template>
    <div class="col-span-1 lg:col-span-6 flex flex-col py-6 bg-white">

        <section class="px-4">
            <h2 class="text-3xl font-black text-primary tracking-tight mb-6">
                دیدرس
            </h2>
            <p class="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                تجربه‌های واقعی مردم از مکان‌های شهر
            </p>
        </section>
        
        <div class="sticky top-0 z-30 pt-2 pb-0 px-6 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/50 shadow-sm"
            id="sticky-header">
                <!-- Search Bar -->
                <div class="bg-surface-container-lowest border border-outline-variant rounded-full h-14 flex items-center shadow-sm relative focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all mx-4">
                <input
                    class="flex-1 bg-transparent border-none focus:ring-0 text-body-md font-body-md px-4 placeholder:text-outline h-full"
                    placeholder="جستجو برای مکان، تجربه، یا افراد..." type="text">
                <button
                    class="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:bg-primary-container transition-colors ml-1">
                    <span class="material-symbols-outlined text-xl fill-white" data-icon="search">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                            <path
                                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </span>
                </button>
            </div>
            <!-- Feed Filter Tabs -->
            <div class="flex mt-4 w-full">
                <button
                    class="flex-1 p-3 text-[14px] font-bold text-primary-container border-b-4 border-primary-container transition-colors hover:bg-surface-container-low/50 rounded-t-sm">برای
                    شما</button>
                <button
                    class="flex-1 p-3 text-[14px] font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/50 border-b-4 border-transparent transition-colors rounded-t-sm">جدیدترین‌ها</button>
                <button
                    class="flex-1 p-3 text-[14px] font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/50 border-b-4 border-transparent transition-colors rounded-t-sm">پرطرفدار</button>
                <button
                    class="flex-1 p-3 text-[14px] font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/50 border-b-4 border-transparent transition-colors rounded-t-sm">اطراف
                    من</button>
            </div>
        </div>

        <section id="section-featured-businesses" class="max-w-2xl mx-auto pb-14 section-clickable">
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
    </div>
    <div class="col-span-1 lg:col-span-4 flex flex-col gap-6 py-6 sticky top-0">
            <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 flex flex-col gap-4">
                <h3
                    class="text-title-lg font-title-lg text-on-surface font-semibold text-[20px] flex items-center gap-2">
                    <span class="material-symbols-outlined fill-tertiary-container" data-icon="trending_up">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                            <path
                                d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" />
                        </svg>
                    </span> ترندهای این هفته
                </h3>
                <ul class="flex flex-col">
                    <li
                        class="py-3 border-b border-outline-variant last:border-0 last:pb-0 first:pt-0 flex gap-3 group cursor-pointer">
                        <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                            <img alt="موزه هنرهای معاصر"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                data-alt="A modern minimalist museum interior showcasing contemporary art, bright white walls, soft lighting, professional architecture."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5jxJusHCP2LJwnCKljgzdxlFFyoDsoc4nUmUxJxbd7G_F4pILtKp4ZVMynvgiaARV7BJGpigwuKpaiHALZSh7brobQXAVUxWVWoUZnVk7Loxj1RVVkmUvg4Sr_4sQMJ1UvD9NgDGNVv-birFkVmMnL7vwBpD3x7_1k2RvNkZuYF4kd11hy5NyWPpw4yRFvIRDbFG1LvHPxU7KHxDImqnxhcRfvZBWwGtEd916mLJOkFwChIQ7Hi5Q4YrD5a4LRPm3Ta406hNPfhI">
                        </div>
                        <div class="flex flex-col justify-center min-w-0">
                            <h4
                                class="font-label-sm text-label-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                                موزه هنرهای معاصر</h4>
                            <p class="text-[12px] text-on-surface-variant truncate mt-1">نمایشگاه جدید هنر مدرن</p>
                            <div class="flex items-center gap-1 mt-1 text-[11px] text-on-surface-variant">
                                <span class="material-symbols-outlined text-[12px] text-tertiary-container"
                                    data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span> ۴.۸ (۲۴۵
                                نظر)
                            </div>
                        </div>
                    </li>
                    <li
                        class="py-3 border-b border-outline-variant last:border-0 last:pb-0 flex gap-3 group cursor-pointer">
                        <div
                            class="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-variant flex items-center justify-center">
                            <img alt="بوک‌لند"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                data-alt="A sleek minimalist bookstore interior with tall wooden shelves, bright lighting, quiet and professional reading environment."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqD9h1CvINXCQToiZSjV9aO1DRLi0PzPgVK10kBM2DoLtTgDNa1y8xpQ2YFQRDW6OS5d9VX0JhdIuejFiky8NE0qu_TUthn-4NcaUpB40p_GeUqbXdZk3OviqIz_HfuXRqDqzjdNKChNdvlwK6kQuYe2TwY3fIGsvQyVfA6hj8d5LH-yJCLtM43btcI_7bI6nNWy6vN1dZsa74w81SdTzcSEKjJpH8Ys2TXPpU1saPcQ0kifZ8Tx6oT9u42T0xWFbLljW6YqsV71M">
                        </div>
                        <div class="flex flex-col justify-center min-w-0">
                            <h4
                                class="font-label-sm text-label-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                                کتابفروشی بوک‌لند</h4>
                            <p class="text-[12px] text-on-surface-variant truncate mt-1">پالادیوم</p>
                            <div class="flex items-center gap-1 mt-1 text-[11px] text-on-surface-variant">
                                <span class="material-symbols-outlined text-[12px] text-tertiary-container"
                                    data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span> ۴.۶ (۱۲۰
                                نظر)
                            </div>
                        </div>
                    </li>
                    <li
                        class="py-3 border-b border-outline-variant last:border-0 last:pb-0 flex gap-3 group cursor-pointer">
                        <div
                            class="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-surface-variant flex items-center justify-center">
                            <img alt="مجموعه ورزشی"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                data-alt="A bright modern sports complex with minimal design lines, clean facilities, high-end athletic aesthetic."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEPyQfwpL6fvCwsFpSanOFVWjhIUfWdMMdXMA_C1rs_ugjLi8b2UP6Ca2L9R9Bm1P_CiZaj7uTikvEkQyW0lpMQbcWurZsKBVkMbnYr6yXp0TN43mqhaSLOXuz_ZtjhB29k9Sr_KmIhAQAqXIwWyzh5zswzhXCqhudRTqi4l16qBHDKAJpA-hRCX0mO3VMPAsJPI2oweDsJ-BFKv0Cs9HErJeJG2gnQCQl0oHCCMZkomL4ba-lqheGi2ON06eTEPQW2DI0WA7TQIQ">
                        </div>
                        <div class="flex flex-col justify-center min-w-0">
                            <h4
                                class="font-label-sm text-label-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                                مجموعه ورزشی انقلاب</h4>
                            <p class="text-[12px] text-on-surface-variant truncate mt-1">جاده تندرستی</p>
                            <div class="flex items-center gap-1 mt-1 text-[11px] text-on-surface-variant">
                                <span class="material-symbols-outlined text-[12px] text-tertiary-container"
                                    data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span> ۴.۷ (۳۸۰
                                نظر)
                            </div>
                        </div>
                    </li>
                </ul>
                <button
                    class="w-full mt-2 text-primary font-label-sm text-label-sm font-bold py-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant">مشاهده
                    برترین‌ها</button>
            </div>
            <div class="flex flex-wrap gap-2">
                <h3
                    class="w-full text-title-lg font-title-lg text-on-surface font-semibold text-[20px] mb-2 flex items-center gap-2">
                    موضوعات محبوب
                </h3>
                <span
                    class="px-3 py-1.5 bg-surface-container-low rounded-full text-[13px] font-medium text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-colors">فضای
                    کار</span>
                <span
                    class="px-3 py-1.5 bg-surface-container-low rounded-full text-[13px] font-medium text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-colors">قهوه
                    تخصصی</span>
                <span
                    class="px-3 py-1.5 bg-surface-container-low rounded-full text-[13px] font-medium text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-colors">دنج</span>
                <span
                    class="px-3 py-1.5 bg-surface-container-low rounded-full text-[13px] font-medium text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-colors">قرار
                    کاری</span>
                <span
                    class="px-3 py-1.5 bg-surface-container-low rounded-full text-[13px] font-medium text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-colors">فضای
                    باز</span>
                <span
                    class="px-3 py-1.5 bg-surface-container-low rounded-full text-[13px] font-medium text-on-surface-variant hover:bg-primary hover:text-white cursor-pointer transition-colors">وای‌فای</span>
            </div>
            <div
                class="flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-on-surface-variant mt-4 px-2 border-t py-2 border-surface-container-low">
                <a class="hover:text-primary transition-colors" href="#">درباره دیدرس</a>
                <a class="hover:text-primary transition-colors" href="#">قوانین و مقررات</a>
                <a class="hover:text-primary transition-colors" href="#">حریم خصوصی</a>
                <a class="hover:text-primary transition-colors" href="#">کسب‌وکارها</a>
                <span class="w-full mt-2 text-outline">© ۱۴۰۵ پلتفرم دیدرس</span>
            </div>
    </div>
</template>
<style>
.review-box-gradient {
    background: linear-gradient(to bottom, #f9fafb, #ffffff);
}
</style>