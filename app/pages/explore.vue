<template>
    <div class="col-span-6 flex flex-col gap-6 py-6">
        <div class="relative group">
            <div
                class="bg-surface-container-lowest border border-outline-variant rounded-full h-14 flex items-center shadow-sm relative focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all mx-4">
                <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path
                            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z">
                        </path>
                    </svg>
                </div>
                <input
                    class="flex-1 bg-transparent border-none focus:ring-0 text-body-md font-body-md pl-12 pr-12 py-4 placeholder:text-outline"
                    placeholder="جستجو برای مکان، تجربه، یا افراد..." type="text">
                <button class="absolute inset-y-1.5 left-1.5 w-11 h-11 bg-primary fill-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors" data-icon="search">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>
                </button>
            </div>
        </div>
        <div class="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button
                class="bg-primary text-on-primary border border-primary rounded-2xl px-5 py-2 text-label-md font-label-md whitespace-nowrap shadow-sm">کافه</button>
            <button
                class="bg-white border border-border-light rounded-2xl px-5 py-2 text-label-md font-label-md text-text-primary hover:border-primary hover:bg-surface-container-low transition-colors whitespace-nowrap shadow-sm">فست‌فود</button>
            <button
                class="bg-white border border-border-light rounded-2xl px-5 py-2 text-label-md font-label-md text-text-primary hover:border-primary hover:bg-surface-container-low transition-colors whitespace-nowrap shadow-sm">رستوران
                سنتی</button>
            <button
                class="bg-white border border-border-light rounded-2xl px-5 py-2 text-label-md font-label-md text-text-primary hover:border-primary hover:bg-surface-container-low transition-colors whitespace-nowrap shadow-sm">فضای
                باز</button>
            <button
                class="bg-white border border-border-light rounded-2xl px-5 py-2 text-label-md font-label-md text-text-primary hover:border-primary hover:bg-surface-container-low transition-colors whitespace-nowrap shadow-sm">قهوه
                تخصصی</button>
        </div>
        <div class="flex items-center gap-6 overflow-x-auto no-scrollbar border-b border-border-light mb-2">
            <button class="pb-3 text-label-md font-label-md text-primary border-b-2 border-primary whitespace-nowrap px-2">ترندها</button>
            <button class="pb-3 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap px-2">پربازدیدترین‌ها</button>
            <button class="pb-3 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap px-2">بیشترین تجربه</button>
            <button class="pb-3 text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap px-2">نزدیک من</button>
        </div>
        <div class="flex flex-col gap-6">
            <RouterLink to="/p/venus" class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(30,58,138,0.05)] hover:shadow-[0_15px_35px_-5px_rgba(30,58,138,0.1)] transition-shadow duration-300 flex flex-col md:flex-row cursor-pointer">
                <!-- Image Area (Right side on RTL desktop, Top on mobile) -->
                <div class="md:w-[30%] h-48 md:h-auto relative shrink-0">
                    <img alt="کافه رستوران ونوس"
                        class="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-r-xl"
                        src="/img/biz/123.jpg">
                    <!-- Overlay badge (optional, for visual interest) -->
                    <div
                        class="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                        <span class="w-2 h-2 rounded-full bg-green-500"></span>
                        باز
                    </div>
                </div>
                <!-- Content Area -->
                <div class="p-3 flex flex-col justify-between flex-1 gap-4">
                    <div class="flex flex-col gap-2">
                        <!-- Header: Title & Rating -->
                        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                            <h2 class="font-headline-md text-[20px] font-[600] text-primary m-0 leading-tight">کافه رستوران
                                ونوس</h2>
                            <div
                                class="flex items-center gap-1 bg-surface py-1 px-2 rounded-md border border-outline-variant/50 w-fit">
                                <span class="font-label-md text-label-md text-on-surface-variant text-xs">
                                    243 تجربه
                                </span>
                            </div>
                        </div>
                        <!-- Meta Info -->
                        <div
                            class="flex flex-wrap items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                            <span class="flex items-center gap-1 text-[12px]">
                                <span class="material-symbols-outlined">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"/></svg>
                                </span>
                                 کافه و رستوران
                            </span>
                            <span class="text-outline-variant">•</span>
                            <span class="flex items-center gap-1 text-[12px]">
                                <span class="material-symbols-outlined">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                                </span>
                                ولیعصر، تهران
                            </span>
                        </div>
                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2">
                            <span
                                class="bg-[#eff6ff] text-primary px-3 py-1 rounded-full font-label-md text-xs border border-primary/10">💻
                                فضای کار</span>
                            <span
                                class="bg-[#eff6ff] text-primary px-3 py-1 rounded-full font-label-md text-xs border border-primary/10">☕
                                قهوه تخصصی</span>
                        </div>
                    </div>
                    <!-- Social Proof Box -->
                    <div class="relative">
                        <span class="material-symbols-outlined absolute top-0 right-0 text-outline-variant/40 text-3xl rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"/></svg>
                        </span>
                        <p
                            class="font-body-md text-on-surface-variant text-sm relative z-10 leading-relaxed italic pr-6">
                            "فضای داخلی فوق‌العاده دنج بود و برخورد پرسنل هم خیلی محترمانه..."
                        </p>
                    </div>
                </div>
            </RouterLink>
        </div>

    </div>
    <div class="col-span-4 flex flex-col gap-6 py-6 sticky top-0">
        <div class="bg-white rounded-3xl shadow-sm border border-border-light p-5">
            <h2 class="text-label-md font-label-md text-text-primary mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-on-surface-variant text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z" />
                    </svg>
                </span>
                جستجوهای اخیر
            </h2>
            <div class="flex flex-col gap-3">
                <div
                    class="flex items-center justify-between group cursor-pointer p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <div
                        class="flex items-center gap-2 text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                        <span class="material-symbols-outlined text-sm fill-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </span>
                        <span>کافه های رو باز ولیعصر</span>
                    </div>
                    <button class="text-outline-variant hover:text-error transition-colors">
                        <span class="material-symbols-outlined text-sm fill-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div
                    class="flex items-center justify-between group cursor-pointer p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <div
                        class="flex items-center gap-2 text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                        <span class="material-symbols-outlined text-sm fill-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </span>
                        <span>رستوران ایتالیایی</span>
                    </div>
                    <button class="text-outline-variant hover:text-error transition-colors">
                        <span class="material-symbols-outlined text-sm fill-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div
                    class="flex items-center justify-between group cursor-pointer p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <div
                        class="flex items-center gap-2 text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                        <span class="material-symbols-outlined text-sm fill-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </span>
                        <span>موزه هنرهای معاصر</span>
                    </div>
                    <button class="text-outline-variant hover:text-error transition-colors">
                        <span class="material-symbols-outlined text-sm fill-on-surface-variant">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="bg-surface-white rounded-3xl shadow-sm border border-border-light p-5">
            <h2 class="text-label-md font-label-md text-text-primary mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined fill-on-surface-variant text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                    </svg>
                </span>
                فیلترهای پیشرفته
            </h2>
            <div class="flex flex-col gap-4">
                <label class="flex items-center justify-between cursor-pointer">
                    <span class="text-body-sm text-text-primary">الان باز است</span>
                    <div class="relative">
                        <input checked="" class="sr-only peer" type="checkbox">
                        <div
                            class="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                        </div>
                    </div>
                </label>
                <label class="flex items-center justify-between cursor-pointer">
                    <span class="text-body-sm text-text-primary">فضای باز</span>
                    <div class="relative">
                        <input class="sr-only peer" type="checkbox">
                        <div
                            class="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                        </div>
                    </div>
                </label>
                <label class="flex items-center justify-between cursor-pointer">
                    <span class="text-body-sm text-text-primary">مناسب کار با لپ‌تاپ</span>
                    <div class="relative">
                        <input checked="" class="sr-only peer" type="checkbox">
                        <div
                            class="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                        </div>
                    </div>
                </label>
            </div>
            <button
                class="w-full mt-5 py-2 text-primary rounded-xl text-label-sm font-label-sm hover:bg-gray-50 transition-colors border border-transparent hover:border-border-light">
                نمایش تمام فیلترها
            </button>
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