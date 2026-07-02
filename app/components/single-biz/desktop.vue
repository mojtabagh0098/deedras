<script setup lang="ts">
const isModalOpen = ref(false)
</script>
<template>
    <!-- Main Layout: 3-Column Grid -->
    <main class="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <!-- Left Column (DOM Col 1, Visual Right in RTL): Contact/Location/Map/Hours -->
        <div class="col-span-1 lg:col-span-3 flex flex-col gap-6 sticky top-[80px]">
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
                    <button
                        class="w-full flex items-center justify-center gap-1 px-4 py-2 bg-surface-container-lowest border border-border-light rounded-lg text-on-background hover:bg-surface-container-low transition-colors text-sm font-semibold">
                        <span class="material-symbols-outlined text-[18px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                                <path
                                    d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z" />
                            </svg>
                        </span>
                        مشاهده منو
                    </button>
                </div>
            </div>
        </div>
        <!-- Middle Column (DOM Col 2, Visual Center): Hero, Input, Feed -->
        <div class="col-span-1 lg:col-span-6 flex flex-col gap-6">
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
                            class="w-24 h-24 rounded-2xl border-4 border-surface-container-lowest overflow-hidden shadow-sm bg-white relative z-10">
                            <img alt="Company Logo" class="w-full h-full object-cover" src="/img/biz/coffe.webp" />
                        </div>
                        <button
                            class="bg-primary hover:bg-blue-800 text-white px-5 py-2 rounded-full font-label-md text-sm transition-all shadow-sm flex items-center gap-2">
                            <span class="material-symbols-outlined text-[18px] fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px">
                                    <path
                                        d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                                </svg>
                            </span> دنبال کردن
                        </button>
                    </div>
                    <div class="mb-4">
                        <h1 class="text-2xl font-bold text-on-background mb-1 tracking-tight">کافه رستوران بلک‌برن</h1>
                        <p class="text-on-surface-variant text-sm mb-3">رستوران و کافه • نیاوران</p>
                        <div class="flex items-center gap-4 text-sm text-on-surface-variant flex-wrap">
                            <div class="flex items-center gap-1 text-on-background">
                                <span class="material-symbols-outlined text-star-rating icon-fill text-[18px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                        width="24px">
                                        <path
                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm126 18L314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Zm0-201Z" />
                                    </svg>
                                </span>
                                <span class="font-bold">۴.۸</span>
                                <span class="font-medium text-on-background">(۱۲۴ نظر)</span>
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
                                        height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f">
                                        <rect fill="none" height="24" width="24" />
                                        <path
                                            d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z" />
                                    </svg>
                                </span>
                                <span class="font-medium text-on-background">رتبه #۳ در کافه‌های تهران</span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-6 pt-6 border-t border-border-light bg-surface/50 rounded-xl p-5 border border-primary-container/10">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-2">
                                <div
                                    class="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                                    <span class="material-symbols-outlined text-[18px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                            height="18px" viewBox="0 0 24 24" width="18px">
                                            <g>
                                                <rect fill="none" height="24" width="24" x="0"></rect>
                                            </g>
                                            <g>
                                                <g>
                                                    <polygon
                                                        points="19,9 20.25,6.25 23,5 20.25,3.75 19,1 17.75,3.75 15,5 17.75,6.25">
                                                    </polygon>
                                                    <polygon
                                                        points="19,15 17.75,17.75 15,19 17.75,20.25 19,23 20.25,20.25 23,19 20.25,17.75">
                                                    </polygon>
                                                    <path
                                                        d="M11.5,9.5L9,4L6.5,9.5L1,12l5.5,2.5L9,20l2.5-5.5L17,12L11.5,9.5z M9.99,12.99L9,15.17l-0.99-2.18L5.83,12l2.18-0.99 L9,8.83l0.99,2.18L12.17,12L9.99,12.99z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <h3 class="font-bold text-base text-on-background">خلاصه هوشمند دیدرس <span
                                        class="text-on-surface-variant font-normal text-sm mr-1">از دیدگاه جامعه
                                        کاربران</span></h3>
                            </div>
                            <div
                                class="flex items-center gap-1 text-primary text-xs font-bold bg-primary/5 px-2 py-1 rounded">
                                <span class="material-symbols-outlined text-[14px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960"
                                        width="14px">
                                        <path
                                            d="M168-144q-29.7 0-50.85-21.15Q96-186.3 96-216v-528q0-29.7 21.15-50.85Q138.3-816 168-816h624q29.7 0 50.85 21.15Q864-773.7 864-744v528q0 29.7-21.15 50.85Q821.7-144 792-144H168Zm0-72h624v-528H168v528Zm43-71h192v-72H211v72Zm371-73 170-170-51-51-119 119-51-51-51 51 102 102Zm-371-84h192v-72H211v72Zm0-156h192v-72H211v72Zm-43 384v-528 528Z" />
                                    </svg>
                                </span>
                                <span>مبتنی بر ۱۲۴ نظر</span>
                            </div>
                        </div>
                        <div class="pr-3 border-r-2 border-primary-container/30">
                            <p class="text-body-lg text-on-background leading-relaxed mb-5">
                                کاربران فضای کار مناسب و پریزهای برق در دسترس را تحسین می‌کنند. کیفیت قهوه نقطه قوت اصلی
                                است، اما قیمت‌ها نسبت به میانگین منطقه بالاتر ارزیابی شده است. محیط آرام و مناسب برای
                                تمرکز است.
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span
                                    class="inline-flex items-center gap-1.5 bg-surface-container-lowest border border-border-light shadow-sm text-on-surface-variant text-sm px-3 py-1.5 rounded-full">
                                    <span class="material-symbols-outlined fill-green-600 text-[18px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                                            width="18px">
                                            <path
                                                d="M444-288h72v-156h156v-72H516v-156h-72v156H288v72h156v156Zm36.28 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                                        </svg>
                                    </span>
                                    فضای کاری عالی
                                </span>
                                <span
                                    class="inline-flex items-center gap-1.5 bg-surface-container-lowest border border-border-light shadow-sm text-on-surface-variant text-sm px-3 py-1.5 rounded-full">
                                    <span class="material-symbols-outlined fill-green-600 text-[18px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                                            width="18px">
                                            <path
                                                d="M444-288h72v-156h156v-72H516v-156h-72v156H288v72h156v156Zm36.28 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                                        </svg>
                                    </span>
                                    کیفیت بالای قهوه
                                </span>
                                <span
                                    class="inline-flex items-center gap-1.5 bg-surface-container-lowest border border-border-light shadow-sm text-on-surface-variant text-sm px-3 py-1.5 rounded-full">
                                    <span class="material-symbols-outlined fill-red-500 text-[18px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24"
                                            width="18px">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        </svg>
                                    </span>
                                    قیمت بالاتر از حد متوسط
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
                                    width="24px" fill="#1f1f1f">
                                    <path
                                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Zm80-80h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z" />
                                </svg>
                            </span> عکس
                        </button>
                        <button
                            class="flex items-center gap-2 text-on-surface-variant hover:bg-surface-container-low py-2 px-3 rounded-lg transition-colors font-label-md text-sm font-medium">
                            <span class="material-symbols-outlined text-emerald-500">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#1f1f1f">
                                    <path
                                        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l126-126q10-10 22-5t12 19v344q0 14-12 19t-22-5L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                                </svg>
                            </span> ویدیو
                        </button>
                        <button
                            class="flex items-center gap-2 text-on-surface-variant hover:bg-surface-container-low py-2 px-3 rounded-lg transition-colors font-label-md text-sm font-medium">
                            <span class="material-symbols-outlined text-amber-500">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#1f1f1f">
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
        <!-- Right Column (DOM Col 3, Visual Left): AI Analysis, Trust Index, Metrics -->
        <div class="col-span-1 lg:col-span-3 flex flex-col gap-6 sticky top-[80px]">
            <!-- Trust Index (90% Donut) -->
            <div class="flex flex-col gap-4"><!-- Trust Index Compact -->
                <div
                    class="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-border-light flex items-center justify-between">
                    <div>
                        <h3 class="font-bold text-sm text-on-background mb-1">شاخص اعتماد</h3>
                        <p class="text-xs text-on-surface-variant">بر اساس تایید کاربران واقعی</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="text-right">
                            <div class="text-2xl font-bold text-primary">۹۰٪</div>
                            <div class="text-[10px] font-semibold text-success tracking-wider">عالی</div>
                        </div>
                        <div
                            class="w-12 h-12 rounded-full border-4 border-surface-container relative flex items-center justify-center">
                            <svg class="w-12 h-12 absolute -rotate-90" viewBox="0 0 36 36">
                                <path class="text-primary"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none" stroke="currentColor" stroke-dasharray="90, 100" stroke-width="4">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div><!-- Mini Metrics -->
                <div class="grid grid-cols-2 gap-3">
                    <div
                        class="bg-surface-container-lowest rounded-2xl p-3 shadow-sm border border-border-light flex flex-col items-center text-center">
                        <span class="font-bold text-lg text-on-background">۹۵٪</span><span
                            class="text-[10px] text-on-surface-variant font-medium">پاسخگویی مالک</span>
                    </div>
                    <div
                        class="bg-surface-container-lowest rounded-2xl p-3 shadow-sm border border-border-light flex flex-col items-center text-center">
                        <span class="font-bold text-lg text-on-background">۲۴h</span><span
                            class="text-[10px] text-on-surface-variant font-medium">زمان پاسخ</span>
                    </div>
                </div>
            </div>
            <!-- Performance Metrics -->
            <div class="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-border-light">
                <div class="flex flex-col gap-4">
                    <div>
                        <h3 class="font-bold text-lg text-on-background leading-tight mb-2">مالک این کسب‌وکار هستید؟
                        </h3>
                        <div
                            class="flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-bold px-3 py-1.5 rounded-md border border-blue-100 w-fit">
                            <span class="material-symbols-outlined text-[16px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.85 6.85l1.44 1.44-4.88 4.88-3.29-3.29c-.39-.39-1.02-.39-1.41 0l-6 6.01c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44c.31.31.85.09.85-.35V6.5c.01-.28-.21-.5-.49-.5h-4.29c-.45 0-.67.54-.36.85z"/></svg>
                            </span>
                            <span>۲۴۳ کاربر در ۳۰ روز گذشته</span>
                        </div>
                    </div>
                    <p class="text-sm text-on-surface-variant leading-relaxed">
                        پروفایل خود را به رایگان مدیریت کنید و از امکانات ویژه دیدرس بهره‌مند شوید:
                    </p>
                    <ul class="flex flex-col gap-2">
                        <li class="flex items-start gap-2 text-sm text-on-background">
                            <span class="material-symbols-outlined fill-primary text-[18px] mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/></svg>
                            </span>
                            <span>پاسخگویی مستقیم به نظرات کاربران</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm text-on-background">
                            <span class="material-symbols-outlined fill-primary text-[18px] mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/></svg>
                            </span>
                            <span>به‌روزرسانی اطلاعات، منو و ساعات کاری</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm text-on-background">
                            <span class="material-symbols-outlined fill-primary text-[18px] mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/></svg>
                            </span>
                            <span>دسترسی به آمار و گزارش‌های بازدید</span>
                        </li>
                    </ul>
                </div>
                <div class="pt-3 border-t border-border-light/50 mt-2 bg-surface-bright/30">
                    <button
                        class="w-full flex items-center justify-center gap-2 text-[14px] px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-sm font-semibold mb-3">
                        <span class="material-symbols-outlined text-[20px] fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M708-24v-108H600v-72h108v-108h72v108h108v72H780v108h-72ZM96-168v-216H48v-72l48-192h576l48 192v72h-48v144h-72v-144H432v216H96Zm72-72h192v-144H168v144Zm-46-216h524-524ZM96-696v-72h576v72H96Zm26 240h524l-30-120H152l-30 120Z"/></svg>
                        </span>
                        مدیریت رایگان این پروفایل
                    </button>
                    <p class="text-center text-[11px] text-on-surface-variant">
                        فرآیند تایید هویت در کمتر از ۵ دقیقه انجام می‌شود.
                    </p>
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
</style>