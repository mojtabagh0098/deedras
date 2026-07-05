<script setup>
import PrimaryButton from '~/components/PrimaryButton.vue';
import ReviewCard from '~/components/reviews/review-card.vue';

definePageMeta({
    layout: 'empty'
})
const source = ref([
    { id: 2 },
    { id: 3 }
])
</script>
<template>
    <!-- <NuxtLayout name="default"> -->
    <main class="max-w-7xl mx-auto md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <nav
            class="col-span-1 lg:col-span-2 hidden md:flex flex-col h-screen sticky top-0 py-6 items-center border-l dark:border-outline-variant bg-surface-container-lowest dark:bg-surface-dim shadow-sm flex-shrink-0 z-40">
            <!-- Brand -->
            <RouterLink class="mb-stack-lg group flex flex-col items-center gap-2" to="/">
                <div class="flex items-center justify-center">
                    <span class="size-12 font-eng-headline text-eng-headline font-bold">
                        <img src="/img/logo.png" />
                    </span>
                </div>
            </RouterLink>
            <!-- Nav Links -->
            <ul class="flex flex-col gap-4 w-full p-4">
                <li>
                    <RouterLink
                        class="flex flex-col items-center gap-1 p-3 rounded-lg text-primary dark:text-primary-fixed-dim font-bold transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container duration-200 scale-95 transition-transform duration-150"
                        to="/">
                        <span class="material-symbols-outlined fill-primary">
                            <svg v-if="1 != 1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                width="24px">
                                <path
                                    d="m335-310 202-58q20-6 34.5-20.5T592-423l58-202q3-11-5.5-19.5T625-650l-202 58q-20 6-34.5 20.5T368-537l-58 202q-3 11 5.5 19.5T335-310Zm145-110q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
                            </svg>
                        </span>
                        <span class="font-label-sm text-label-sm">اکتشاف</span>
                    </RouterLink>
                </li>
                <li>
                    <a class="flex flex-col items-center gap-1 p-3 rounded-lg text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors duration-200"
                        href="#">
                        <span class="material-symbols-outlined">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path
                                    d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" />
                            </svg>
                            <svg v-if="1 != 1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                width="24px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                            </svg>
                        </span>
                        <span class="font-label-sm text-label-sm">نقشه</span>
                    </a>
                </li>
                <li>
                    <a class="flex flex-col items-center gap-1 p-3 rounded-lg text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors duration-200"
                        href="#">
                        <span class="material-symbols-outlined relative">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path
                                    d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                            </svg>
                            <svg v-if="1 != 1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                width="24px">
                                <path
                                    d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                            </svg>
                            <span class="absolute top-0 left-0 w-2 h-2 rounded-full bg-error"></span>
                        </span>
                        <span class="font-label-sm text-label-sm text-center">اعلان ها</span>
                    </a>
                </li>
                <li>
                    <a class="flex flex-col items-center gap-1 p-3 rounded-lg text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container transition-colors duration-200"
                        href="#">
                        <span class="material-symbols-outlined">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path
                                    d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                            </svg>
                            <svg v-if="1 != 1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                width="24px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                            </svg>
                        </span>
                        <span class="font-label-sm text-label-sm">Saved</span>
                    </a>
                </li>
            </ul>
            <!-- CTA -->
            <div class="w-full px-4 mb-stack-lg">
                <button
                    class="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-full hover:bg-primary-container transition-colors shadow-sm">
                    <span class="material-symbols-outlined text-[20px]">ثبت تجربه</span>
                </button>
            </div>
            <!-- Profile Mini -->
            <div class="mt-auto pt-6 border-t border-outline-variant">
                <div v-if="1 != 1" class="sidebar-item mb-4">
                    <span class="material-symbols-outlined">settings</span>
                    <span class="hidden lg:block font-label-md">تنظیمات</span>
                </div>
                <div class="flex items-center gap-3 px-2">
                    <img alt="User Avatar" class="w-10 h-10 rounded-full object-cover border-2 border-primary"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSgE8_mzo02PRP5pM23r8dcCaPDGdAfq96i4_Wh1VW6tKH73mSrC9AotynH8j3VcPT7QCLi28KeLpuxdpiIONWPop7b3zzzAasiivsUwloXWke68qt9lcE_r8PfveGo1o1G1Ki7kwUMiq_8OXwaSrF1uknnDaEVNlHRD8qdn7oy7rmT_ot3UbUSmRrsPz05qLZq0PzjtZHzAM4CUKCG2x75XzENx9iZ9qVphdXXmDS_7OYaA9Cbhkq0gmHBXTKYGud0W598mX6flI">
                    <div class="hidden lg:block overflow-hidden">
                        <p class="text-xs font-bold truncate">سارا احمدی</p>
                        <p class="text-[10px] text-on-surface-variant">@sarah_arch</p>
                    </div>
                </div>
            </div>
        </nav>
        <div class="col-span-1 lg:col-span-6 flex flex-col gap-2 py-6">

            <section class="">
                <h2 class="text-3xl font-black text-primary tracking-tight mb-6">
                    دیدرس
                </h2>
                <p class="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                    تجربه‌های واقعی مردم از مکان‌های شهر
                </p>
            </section>
            <div
                class="bg-surface-container-lowest border border-outline-variant rounded-full h-14 flex items-center shadow-sm relative focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
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

            <section id="section-featured-businesses" class="max-w-2xl mx-auto pt-2 pb-14 section-clickable">
                <div
                    class="flex overflow-x-auto hide-scrollbar gap-2 mb-2 border-b border-surface-container-low sticky top-0">
                    <button
                        class="text-primary font-label-sm text-label-sm whitespace-nowrap px-1 py-3 border-b-2 border-primary">
                        برای شما
                    </button>
                    <button
                        class="text-on-surface-variant hover:text-primary font-label-sm text-label-sm whitespace-nowrap px-1 py-3 border-b-2 border-transparent transition-colors">
                        جدیدترین‌ها
                    </button>
                    <button
                        class="text-on-surface-variant hover:text-primary font-label-sm text-label-sm whitespace-nowrap px-1 py-3 border-b-2 border-transparent transition-colors">
                        پرطرفدار
                    </button>
                    <button
                        class="text-on-surface-variant hover:text-primary font-label-sm text-label-sm whitespace-nowrap px-1 py-3 border-b-2 border-transparent transition-colors">
                        اطراف من
                    </button>
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
                <h3 class="w-full text-title-lg font-title-lg text-on-surface font-semibold text-[20px] mb-2 flex items-center gap-2">
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
    </main>
    <!-- </NuxtLayout> -->
</template>
<style>
.review-box-gradient {
    background: linear-gradient(to bottom, #f9fafb, #ffffff);
}
</style>