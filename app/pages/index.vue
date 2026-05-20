<script setup>
import PrimaryButton from '~/components/PrimaryButton.vue';

definePageMeta({
    layout: 'default'
})
</script>
<template>
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
                <div class="flex items-center gap-3 px-6 py-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors">
                    <span class="material-symbols-outlined text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#757682" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m300-300 280-80 80-280-280 80-80 280Zm180-120q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z"/></svg>
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
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
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
            <article
                class="w-54 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
                data-purpose="business-card">
                <!-- Header -->
                <div class="py-3 px-4 flex justify-between items-start border-b border-slate-100">
                    <div class="flex items-center gap-2">
                        <img alt="لوگو کافه ونوس"
                            class="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-card-dark shadow-md ring-2 ring-primary/10 dark:ring-primary/30"
                            src="/img/avatar/ionibowcher.png" width="14" height="14" />
                        <div class="flex flex-col items-start">
                            <div class="flex items-center gap-2">
                                <h3
                                    class="font-bold text-lg text-text-light dark:text-text-dark leading-tight tracking-tight">
                                    سارا احمدی</h3>
                                <span class="fill-blue-500 text-md" title="تایید شده">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"
                                        width="20px">
                                        <path
                                            d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="flex items-center gap-2 mt-1">
                                <div
                                    class="flex items-center gap-1 text-xs font-medium text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded-md">
                                    <span class="fill-orange-500 text-[14px]"><svg xmlns="http://www.w3.org/2000/svg"
                                            height="14px" viewBox="0 -960 960 960" width="14px">
                                            <path xmlns="http://www.w3.org/2000/svg"
                                                d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z">
                                            </path>
                                        </svg></span>
                                    <span>۴.۵</span>
                                </div>
                                <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                <span class="text-xs text-text-muted-light dark:text-text-muted-dark">۲ ساعت پیش</span>
                            </div>
                        </div>
                    </div>
                    <button
                        class="fill-slate-400 hover:fill-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors">
                        <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#1f1f1f">
                                <path
                                    d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="p-4">
                    <p class="text-slate-700 text-md font-medium leading-7 mb-4">
                        امروز برای صبحانه رفتم کافه ونوس. فضای داخلی فوق‌العاده دنج بود و برخورد پرسنل هم خیلی محترمانه.
                        پنکیک‌هاشون رو حتما پیشنهاد می‌کنم! 🥞☕️
                    </p>
                </div>
                <!-- Gallery -->
                <div class="px-4 pb-2">
                    <a class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors group"
                        href="#">
                        <img src="/img/biz/4.webp" alt="Logo"
                            class="w-12 h-12 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform"
                            width="12" height="12" />
                        <div class="flex-1">
                            <h4 class="font-bold text-sm text-slate-800">کافه رستوران ونوس</h4>
                            <div class="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                <span class="flex items-center fill-yellow-500 font-bold">
                                    <span class="text-[14px] ml-0.5 fill-slate-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 1080"
                                            width="20px">
                                            <path xmlns="http://www.w3.org/2000/svg"
                                                d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                        </svg>
                                    </span>
                                    ۴.۸
                                </span>
                                <span>•</span>
                                <span>کافه و رستوران</span>
                                <span>•</span>
                                <span>ولیعصر</span>
                            </div>
                        </div>
                        <span class="fill-slate-400 group-hover:fill-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                            </svg>
                        </span>
                    </a>
                </div>
                <div
                    class="px-4 py-2 flex items-center justify-between text-xs text-text-sub-light dark:text-text-sub-dark border-b border-divider-light dark:border-divider-dark mt-2">

                    <div class="flex items-center gap-1">
                        <span class="flex items-center bg-blue-100 dark:bg-blue-900/30 p-0.5 rounded-full">
                            <span class="text-[10px] fill-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960"
                                    width="10px">
                                    <path
                                        d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                                </svg>
                            </span>
                        </span>
                        <span class="mr-1">
                            ۲۴۳ نفر این تجربه را مفید دانستند
                        </span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span>۳ کامنت</span>
                        <span>•</span>
                        <span>۱ بازنشر</span>
                    </div>
                </div>
                <div class="px-2 py-1 flex items-center justify-between">
                    <button
                        class="flex items-center gap-2 px-3 py-3 group/item rounded-md group hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors group flex-1 justify-center">
                        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                            </svg>
                        </span>
                        <span class="text-sm font-medium group-hover/item:text-primary hidden sm:inline">مفید</span>
                    </button>
                    <button
                        class="flex items-center gap-2 px-3 py-3 group/item rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors group flex-1 justify-center">
                        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                            </svg>
                        </span>
                        <span class="text-sm font-medium group-hover/item:text-primary hidden sm:inline">نظر</span>
                    </button>
                    <button
                        class="flex items-center gap-2 px-3 py-3 group/item rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors group flex-1 justify-center">
                        <span
                            class="text-xl fill-current group-hover/item:fill-primary transition-colors transform -scale-x-100">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z" />
                            </svg>
                        </span>
                        <span class="text-sm font-medium group-hover/item:text-primary hidden sm:inline">ارسال</span>
                    </button>
                    <button
                        class="flex items-center gap-2 px-3 py-3 group/item rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors group flex-1 justify-center">
                        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z">
                                </path>
                            </svg>
                        </span>
                        <span class="text-sm font-medium group-hover/item:text-primary hidden sm:inline">ذخیره</span>
                    </button>
                </div>
            </article>
            <!-- Card 2: Dental -->

            <!-- Card 3: Auto Repair -->
            <article
                class="w-54 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
                data-purpose="business-card">
                <!-- Header -->
                <div class="py-3 px-4 flex justify-between items-start border-b border-slate-100">
                    <div class="flex items-center gap-2">
                        <img alt="لوگو کافه ونوس"
                            class="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-card-dark shadow-md ring-2 ring-primary/10 dark:ring-primary/30"
                            src="/img/avatar/amyelsner.png" width="14" height="14" />
                        <div class="flex flex-col items-start">
                            <div class="flex items-center gap-2">
                                <h3
                                    class="font-bold text-lg text-text-light dark:text-text-dark leading-tight tracking-tight">
                                     مریم رضایی</h3>
                                <span
                                    class="bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-[10px] px-2 py-0.5 rounded-full font-medium">کاربر
                                    تازه</span>
                            </div>
                            <div class="flex items-center gap-2 mt-1">
                                <div
                                    class="flex items-center gap-1 text-xs font-medium text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded-md">
                                    <span class="fill-orange-500 text-[14px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960"
                                            width="14px">
                                            <path xmlns="http://www.w3.org/2000/svg"
                                                d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                        </svg>
                                    </span>
                                    <span>۴.۵</span>
                                </div>
                                <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                <span class="text-xs text-text-muted-light dark:text-text-muted-dark">۲ ساعت پیش</span>
                            </div>
                        </div>
                    </div>
                    <button
                        class="fill-slate-400 hover:fill-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors">
                        <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#1f1f1f">
                                <path
                                    d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="p-4">
                    <p class="text-slate-700 text-md font-medium leading-7 mb-4">
                        محیطی فوق‌العاده دنج و آروم. برخورد پرسنل عالی بود و قهوه‌هاشون واقعا با کیفیت و خوش‌طعم بود
                    </p>
                </div>
                <div class="grid grid-cols-3 px-4 gap-2 mb-6 mt-auto">
                    <img src="/img/biz/1.webp" alt="Clinic Interior"
                        class="w-full aspect-square object-cover hover:opacity-90 transition-opacity cursor-pointer rounded-md" />
                    <img src="/img/biz/2.webp" alt="Dental Chair"
                        class="w-full aspect-square object-cover hover:opacity-90 transition-opacity cursor-pointer rounded-md" />
                    <div class="relative w-full aspect-square overflow-hidden cursor-pointer group rounded-md">
                        <img src="/img/biz/3.webp" alt="Reception" class="w-full h-full object-cover rounded-md" />
                        <div
                            class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                            <span class="text-white text-xs font-bold">+5</span>
                        </div>
                    </div>
                </div>
                <!-- Gallery -->
                <div class="px-4 pb-2">
                    <a class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors group"
                        href="#">
                        <img src="/img/biz/4.webp" alt="Logo"
                            class="w-12 h-12 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform"
                            width="12" height="12" />
                        <div class="flex-1">
                            <h4 class="font-bold text-sm text-slate-800">کافه رستوران ونوس</h4>
                            <div class="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                <span class="flex items-center fill-yellow-500 font-bold">
                                    <span class="text-[14px] ml-0.5 fill-slate-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 1080"
                                            width="20px">
                                            <path xmlns="http://www.w3.org/2000/svg"
                                                d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                        </svg>
                                    </span>
                                    ۴.۸
                                </span>
                                <span>•</span>
                                <span>کافه و رستوران</span>
                                <span>•</span>
                                <span>ولیعصر</span>
                            </div>
                        </div>
                        <span class="fill-slate-400 group-hover:fill-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                            </svg>
                        </span>
                    </a>
                </div>
                <div
                    class="px-4 py-2 flex items-center justify-between text-xs text-text-sub-light dark:text-text-sub-dark border-b border-divider-light dark:border-divider-dark mt-2">

                    <div class="flex items-center gap-1">
                        <span class="flex items-center bg-blue-100 dark:bg-blue-900/30 p-0.5 rounded-full">
                            <span class="text-[10px] fill-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960"
                                    width="10px">
                                    <path
                                        d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                                </svg>
                            </span>
                        </span>
                        <span class="mr-1">
                            ۲۴۳ نفر این تجربه را مفید دانستند
                        </span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span>۳ کامنت</span>
                        <span>•</span>
                        <span>۱ بازنشر</span>
                    </div>
                </div>
                <div class="px-2 py-1 flex items-center justify-between">
                    <button
                        class="flex items-center gap-2 px-3 py-3 group/item rounded-md group hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors group flex-1 justify-center">
                        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                            </svg>
                        </span>
                        <span class="text-sm font-medium group-hover/item:text-primary hidden sm:inline">مفید</span>
                    </button>
                    <button
                        class="flex items-center gap-2 px-3 py-3 group/item rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors group flex-1 justify-center">
                        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                            </svg>
                        </span>
                        <span class="text-sm font-medium group-hover/item:text-primary hidden sm:inline">نظر</span>
                    </button>
                    <button
                        class="flex items-center gap-2 px-3 py-3 group/item rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors group flex-1 justify-center">
                        <span
                            class="text-xl fill-current group-hover/item:fill-primary transition-colors transform -scale-x-100">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z" />
                            </svg>
                        </span>
                        <span class="text-sm font-medium group-hover/item:text-primary hidden sm:inline">ارسال</span>
                    </button>
                    <button
                        class="flex items-center gap-2 px-3 py-3 group/item rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors group flex-1 justify-center">
                        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z">
                                </path>
                            </svg>
                        </span>
                        <span class="text-sm font-medium group-hover/item:text-primary hidden sm:inline">ذخیره</span>
                    </button>
                </div>
            </article>
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
</template>
<style>
.review-box-gradient {
    background: linear-gradient(to bottom, #f9fafb, #ffffff);
}
</style>