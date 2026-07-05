<script setup lang="ts">
const isModalOpen = ref(false)
</script>
<template>
    <!-- Main Layout: 3-Column Grid -->
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
                    <RouterLink class="flex flex-col items-center gap-1 p-3 rounded-lg text-primary dark:text-primary-fixed-dim font-bold transition-colors hover:bg-surface-container-low dark:hover:bg-surface-container duration-200 scale-95 transition-transform duration-150"
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
        <!-- Middle Column (DOM Col 2, Visual Center): Hero, Input, Feed -->
        <div class="col-span-1 lg:col-span-6 flex flex-col gap-6 py-6">
            <!-- Hero Banner -->
            <div
                class="bg-surface-container-lowest rounded-2xl shadow-sm border border-border-light overflow-hidden flex flex-col relative">
                <div class="h-48 relative">
                    <img alt="Cafe Interior Cover" class="w-full h-full object-cover" src="/img/biz/1.webp" />
                    <div
                        class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none">
                    </div>
                </div>
                <div class="px-6 pb-6 relative bg-surface-container-lowest">
                    <div class="flex justify-between items-end -mt-12 mb-4">
                        <div
                            class="w-24 h-24 rounded-full border-4 border-surface-container-lowest overflow-hidden shadow-sm bg-white relative z-10">
                            <img alt="Company Logo" class="w-full h-full object-cover" src="/img/biz/coffe.webp" />
                        </div>
                        <button
                            class="bg-primary hover:bg-blue-800 text-white px-5 py-2 rounded-full font-label-md text-sm transition-all shadow-sm flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px] fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z"/></g></svg>
                            </span> دنبال کردن
                        </button>
                    </div>
                    <div class="mb-4">
                        <h1 class="text-2xl font-bold text-on-background mb-1 tracking-tight">کافه رستوران بلک‌برن</h1>
                        <p class="text-on-surface-variant font-body-md text-body-md mt-1">
                             رستوران و کافه • نیاوران
                        </p>
                        <p class="text-on-surface mt-2 max-w-lg">
                            Specialty coffee, artisanal pastries, and a space for community. Open everyday 8 AM - 10 PM. ☕️✨
                        </p>
                        <div class="flex items-center gap-4 mt-3 text-sm text-on-surface-variant flex-wrap">
                            <div class="flex items-center gap-1 text-on-background">
                                <span class="material-symbols-outlined text-star-rating icon-fill text-[18px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                        width="24px">
                                        <path
                                            d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                                    </svg>
                                </span>
                                <span class="text-on-surface font-bold">آخرین تجربه:</span>
                                ۲ روز پیش
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="material-symbols-outlined text-[18px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                        width="24px">
                                        <path
                                            d="M40-272q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240v-32Zm800 112H738q11-18 16.5-38.5T760-240v-40q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v40q0 33-23.5 56.5T840-160ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm466 0q-47 47-113 47-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-240Zm0-400Z" />
                                    </svg>
                                </span>
                                <span class="font-medium text-on-background">۸.۵k دنبال‌کننده</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <span class="material-symbols-outlined text-[18px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                        height="24px" viewBox="0 0 24 24" width="24px">
                                        <rect fill="none" height="24" width="24" />
                                        <path
                                            d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z" />
                                    </svg>
                                </span>
                                <span class="font-medium text-on-background">
                                    پیشنهاد شده توسط 3 نفر
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Start a Post Input (LinkedIn Style) -->
            <div
                class="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
                <div class="flex gap-3 items-center">
                    <img alt="User Profile" class="w-[48px] h-[48px] rounded-full shadow-sm border border-border-light"
                        src="/img/avatar/onyamalimba.png" />
                    <button @click="isModalOpen = true"
                        class="flex-1 text-right bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low transition-colors rounded-full py-2.5 px-4 text-on-surface-variant font-body-md text-sm outline-none cursor-text text-start">
                        تجربه خود را از این مکان بنویسید...
                    </button>
                    <ExperienceModal v-model="isModalOpen" />
                </div>
                <div class="flex justify-between items-center pl-1 pr-12">
                    <div class="flex gap-1">
                        <button
                            class="flex items-center gap-2 text-on-surface-variant hover:bg-surface-container-low py-2 px-3 rounded-lg transition-colors font-label-md text-sm font-medium">
                            <span class="material-symbols-outlined text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px">
                                    <path
                                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Zm80-80h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z" />
                                </svg>
                            </span> عکس
                        </button>
                        <button
                            class="flex items-center gap-2 text-on-surface-variant hover:bg-surface-container-low py-2 px-3 rounded-lg transition-colors font-label-md text-sm font-medium">
                            <span class="material-symbols-outlined text-emerald-500">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px">
                                    <path
                                        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                                </svg>
                            </span> ویدیو
                        </button>
                        <button
                            class="flex items-center gap-2 text-on-surface-variant hover:bg-surface-container-low py-2 px-3 rounded-lg transition-colors font-label-md text-sm font-medium">
                            <span class="material-symbols-outlined text-amber-500">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px">
                                    <path
                                        d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm126 18L314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Zm0-201Z" />
                                </svg>
                            </span> امتیازدهی
                        </button>
                    </div>
                    <button
                        class="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors">ثبت</button>
                </div>
            </div>
            <div class="bg-primary rounded-xl p-5 shadow-sm border border-border-light">
                <div class="flex flex-row items-center justify-between">
                    <h3 class="font-headline-md text-white font-bold text-center">آیا این مکان را پیشنهاد می‌کنید؟</h3>
                    <div class="flex gap-4 justify-center">
                        <button
                            class="flex-2 flex items-center justify-center gap-2 bg-white text-primary border border-outline-variant hover:-translate-y-1 transition text-on-surface rounded-lg p-2 font-label-md transition">
                            <span class="material-symbols-outlined fill-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px">
                                    <path
                                        d="M280-120v-520l280-280 74 74-52 206h338v176L774-120H280Zm80-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406ZM80-120v-520h200v80H160v360h120v80H80Z" />
                                </svg>
                            </span> بله حتما
                        </button>
                        <button
                            class="flex-2 flex items-center glass justify-center gap-2 border border-outline-variant text-white rounded-lg p-2 font-label-md transition">
                            <span class="material-symbols-outlined text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#fff">
                                    <path
                                        d="M240-840h440v520L400-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14Zm360 80H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z" />
                                </svg>
                            </span> فعلا نه
                        </button>
                    </div>
                </div>
            </div>
            <!-- Experience Feed -->
            <div class="flex flex-col gap-6">
                <!-- Post 1 -->
                <ReviewsReviewCard :experience="{
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
            </div>
        </div>
        <!-- Left Column (DOM Col 1, Visual Right in RTL): Contact/Location/Map/Hours -->
        <div class="col-span-1 lg:col-span-4 flex flex-col gap-6 py-6 sticky top-[-444px]">
            <!-- Location & Contact -->
            <div
                class="bg-surface-container-lowest rounded-2xl shadow-sm border border-border-light flex flex-col gap-4">
                <div class="w-full h-32 bg-surface-container overflow-hidden relative">
                    <img alt="Map" class="w-full h-full object-cover opacity-80" src="/img/map.png" />
                    <div class="absolute inset-0 px-5 flex items-center justify-center">
                        <span class="material-symbols-outlined fill-primary text-3xl drop-shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-4 px-5">
                    <div class="flex items-start gap-3 text-on-surface-variant">
                        <span class="material-symbols-outlined text-[20px] fill-primary-container shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" />
                            </svg>
                        </span>
                        <span class="font-body-md text-sm leading-relaxed">تهران، نیاوران، خیابان باهنر، بعد از چهارراه
                            کامرانیه، پلاک ۱۲</span>
                    </div>
                    <div class="flex items-center gap-3 text-on-surface-variant">
                        <span class="material-symbols-outlined text-[20px] fill-primary-container shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                            </svg>
                        </span>
                        <span class="font-body-md text-sm truncate" dir="ltr">+98 21 2288 9900</span>
                    </div>
                    <div class="flex items-center gap-3 text-on-surface-variant">
                        <span class="material-symbols-outlined text-[20px] fill-primary-container shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                            </svg>
                        </span>
                        <a class="font-body-md text-sm truncate text-primary-container hover:underline" dir="ltr"
                            href="#">blackburncafe.com</a>
                    </div>
                </div>
                <hr class="border-border-light" />
                <!-- Hours Accordion -->
                <details class="group cursor-pointer px-5">
                    <summary
                        class="flex justify-between items-center font-label-md text-on-background select-none list-none">
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-[20px] fill-success">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                </svg>
                            </span>
                            <span class="text-success font-semibold">باز است</span>
                            <span class="text-on-surface-variant font-normal text-xs">• بسته شدن: ۲۳:۳۰</span>
                        </div>
                        <span
                            class="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px">
                                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
                            </svg>
                        </span>
                    </summary>
                    <div
                        class="mt-3 pt-3 border-t border-border-light flex flex-col gap-2 text-sm text-on-surface-variant">
                        <div class="flex justify-between font-semibold text-on-background"><span>امروز
                                (چهارشنبه)</span><span>۰۸:۰۰ - ۲۳:۳۰</span></div>
                        <div class="flex justify-between"><span>پنج‌شنبه</span><span>۰۸:۰۰ - ۲۳:۳۰</span></div>
                        <div class="flex justify-between"><span>جمعه</span><span>۰۹:۰۰ - ۲۳:۳۰</span></div>
                        <div class="flex justify-between"><span>شنبه</span><span>۰۸:۰۰ - ۲۳:۳۰</span></div>
                        <div class="flex justify-between"><span>یکشنبه</span><span>۰۸:۰۰ - ۲۳:۳۰</span></div>
                        <div class="flex justify-between"><span>دوشنبه</span><span>۰۸:۰۰ - ۲۳:۳۰</span></div>
                        <div class="flex justify-between"><span>سه‌شنبه</span><span>۰۸:۰۰ - ۲۳:۳۰</span></div>
                    </div>
                </details>
                <hr class="border-border-light" />
                <div class="flex flex-col gap-2 px-5 pb-5">
                    <button
                        class="w-full flex items-center justify-center gap-1 px-4 py-2 bg-surface-container-lowest border border-border-light rounded-lg text-on-background hover:bg-surface-container-low transition-colors text-sm font-semibold">
                        <span class="material-symbols-outlined text-[18px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="m22.43 10.59-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58.51 0 1.02-.19 1.41-.58l8.99-8.99c.79-.76.8-2.02.03-2.82zm-10.42 10.4-9-9 9-9 9 9-9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1z" />
                            </svg>
                        </span>
                        مسیریابی
                    </button>
                </div>
            </div>
            <div
                class="bg-surface-container-lowest rounded-2xl p-stack-md shadow-sm border py-3 px-5 border-outline-variant/50">
                <h3 class="font-headline-md text-[20px] font-bold text-on-surface mb-4">
                    در یک نگاه
                </h3>
                <ul class="flex flex-row flex-wrap gap-3 justify-evenly">
                    <li class="flex items-center gap-3 text-on-surface font-body-md">
                        <span class="material-symbols-outlined text-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path
                                    d="M240-120v-720h280q100 0 170 70t70 170q0 100-70 170t-170 70H400v240H240Zm160-400h128q33 0 56.5-23.5T608-600q0-33-23.5-56.5T528-680H400v160Z" />
                            </svg>
                        </span> پارکینگ
                        دارد
                    </li>
                    <li class="flex items-center gap-3 text-on-surface font-body-md">
                        <span class="material-symbols-outlined text-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path
                                    d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
                            </svg>
                        </span> قیمت متوسط
                    </li>
                    <li class="flex items-center gap-3 text-on-surface font-body-md">
                        <span class="material-symbols-outlined text-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path
                                    d="M440-80v-520H80l400-280 400 280H520v520h-80Zm40-600h146-292 146ZM120-80v-210L88-466l78-14 30 160h164v240h-80v-160h-80v160h-80Zm480 0v-240h164l30-160 78 14-32 176v210h-80v-160h-80v160h-80ZM334-680h292L480-782 334-680Z" />
                            </svg>
                        </span> فضای باز
                    </li>
                    <li class="flex items-center gap-3 text-on-surface font-body-md">
                        <span class="material-symbols-outlined text-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path
                                    d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                            </svg>
                        </span> امکان
                        رزرو
                    </li>
                </ul>
            </div>
            <div
                class="bg-surface-container-lowest rounded-2xl p-stack-md shadow-sm border py-3 px-5 border-outline-variant/50">
                <h3 class="font-headline-md text-[20px] font-bold text-on-surface mb-4">
                    مکان‌های مشابه
                </h3>
                <div class="flex flex-col gap-4">
                    <!-- Item -->
                    <div class="flex items-center justify-between gap-3 group cursor-pointer">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-full overflow-hidden bg-surface-variant flex-shrink-0">
                                <img class="w-full h-full object-cover"
                                    data-alt="Small circular logo for 'Roasters Co', minimalist typography, coffee bean graphic, monochrome style."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTgJbSjzZ4Pe_juJLmAvC1aHPsGGc96MWXbsfqHo_yEHBkD3Jvn0d6rSOYG79UAORNMr-tGKb76DJlkvAvJ0B1K8W3xWJ48X7JJvYU-y3Kkp2B1JF3ni-lC8Oo_-ZEXyJcSAJ8Y1yTMZDkaAQNjLXuXKIa3xEv9uKFdpbQOXsn36LSZXUSVUWyb2KvIDluJ-5_Q3_M2vnKQ6kSagu9tP6zFcRtpi1IPhAa4br_nYaLgkfOIhTSbD1xgS62RhAww_UbmHST3iEd2tQ">
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-on-surface text-label-md group-hover:underline">سوخاری
                                    دی</span>
                                <span class="text-on-surface-variant text-sm mb-3">رستوران و کافه • نیاوران</span>
                            </div>
                        </div>
                        <button
                            class="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm font-bold hover:bg-surface-variant transition-colors">
                            دنبال کردن
                        </button>
                    </div>
                    <!-- Item -->
                    <div class="flex items-center justify-between gap-3 group cursor-pointer">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-full overflow-hidden bg-surface-variant flex-shrink-0">
                                <img class="w-full h-full object-cover"
                                    data-alt="Small circular logo for 'The Bakery', warm inviting bread icon, pastel background, cute social media avatar."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQFgqrH2yMj4lXCMuwU2IgaRVcgaBDyg6AkMt_1fcOW69W_iTMB2jdbcRx8ySjeWu8olXDBYPqAs_2SxaYLszAlRK-0lNms3DckAYK_NsapPgLbUPy3ESEVAY9GZ12jO5F9WyDInvSr2UjX4nHE3SnGr_2Rj15gx9eIGNdqOB5UDvgHCCt4B1m1RVK0ZZCv8y0idTXLfoGNxErHGOKQePMeEzn5IsLiunyQaMNoFX_pwZxMzyIItu62W4V8sDaYM2WB2RZ8tUy1Fc">
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-on-surface text-label-md group-hover:underline">طهران
                                    باربیکیو</span>
                                <span class="text-on-surface-variant text-sm mb-3">رستوران و کافه • نیاوران</span>
                            </div>
                        </div>
                        <button
                            class="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm font-bold hover:bg-surface-variant transition-colors">
                            دنبال کردن
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>ش
<style>
body {
    background-color: theme('colors.background');
    color: theme('colors.on-background');
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.icon-fill {
    font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Donut Chart CSS */
.donut-chart {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: conic-gradient(theme('colors.success') 90%, theme('colors.surface-container') 0);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.donut-chart::before {
    content: "";
    position: absolute;
    width: 96px;
    height: 96px;
    background-color: theme('colors.surface-container-lowest');
    border-radius: 50%;
}

.glass {
    background: #ffffff14;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>