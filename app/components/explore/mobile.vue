<template>
    <div
        class="sticky top-0 z-50 bg-white backdrop-blur-md pt-4 shadow-sm border-b border-border-light">
        <!-- Top Search Bar -->
        <header class="w-full px-4 flex justify-between items-center gap-3">
            <!-- Search Input Container -->
            <div class="flex-grow h-12 bg-surface-container-lowest rounded-full border border-border-light flex items-center px-4 focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-sm">
                <input
                    class="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder-on-surface-variant h-full px-2"
                    dir="rtl" placeholder="جستجو برای مکان، تجربه..." type="text">
                <span class="material-symbols-outlined fill-on-surface-variant shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </span>
            </div>
            <!-- Filter Icon Button -->
            <button
                class="w-12 h-12 rounded-full bg-surface-container-lowest border border-border-light flex items-center justify-center hover:bg-surface-container-low transition-colors shadow-sm shrink-0">
                <span class="material-symbols-outlined fill-on-surface">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>
                </span>
            </button>
        </header>
        <!-- Category Chips -->
        <div class="px-4 mt-4 overflow-x-auto no-scrollbar scrollbar-none">
            <div class="flex gap-2 w-max pb-1">
                <button
                    class="bg-primary text-on-primary px-4 py-2 rounded-full text-label-md font-label-md flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
                    کافه
                </button>
                <button
                    class="bg-surface-container-lowest border border-border-light text-on-surface px-4 py-2 rounded-full text-label-md font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
                    فست‌فود
                </button>
                <button
                    class="bg-surface-container-lowest border border-border-light text-on-surface px-4 py-2 rounded-full text-label-md font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
                    رستوران سنتی
                </button>
                <button
                    class="bg-surface-container-lowest border border-border-light text-on-surface px-4 py-2 rounded-full text-label-md font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
                    فضای باز
                </button>
                <button
                    class="bg-surface-container-lowest border border-border-light text-on-surface px-4 py-2 rounded-full text-label-md font-label-md flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
                    قهوه تخصصی
                </button>
            </div>
        </div>
        <!-- Sort Tabs -->
        <div class="flex items-center justify-between gap-6 px-4 mt-4 border-b border-border-light/50 overflow-x-auto no-scrollbar">
            <button
                class="text-primary font-bold text-label-md font-label-md pb-2 border-b-2 border-primary shrink-0">ترندها</button>
            <button
                class="text-on-surface-variant text-label-md font-label-md pb-2 hover:text-primary transition-colors shrink-0">پربازدیدترین‌ها</button>
            <button
                class="text-on-surface-variant text-label-md font-label-md pb-2 hover:text-primary transition-colors shrink-0">بیشترین
                تجربه</button>
            <button
                class="text-on-surface-variant text-label-md font-label-md pb-2 hover:text-primary transition-colors shrink-0">نزدیک
                من</button>
        </div>
    </div>
    <main class="py-4 space-y-6">
        <article
            class="bg-white dark:bg-surface-dark border-y sm:border sm:rounded-xl border-border-light dark:border-border-dark overflow-hidden sm:mx-4 shadow-sm">
            <div class="relative aspect-video">
                <img alt="فضای داخلی کافه با نور گرم و میز چوبی" class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQiJRzoi5ujdOsBfxu1yAXjmgdYyoglJKBXHS8sVPTggiHxK74xySwghNlSEuNkcGomPKTgOlHXbLrtqY2wEdqFM8XwUq8QIb1GWzT3HoXS0GrlrUrU9_7u1OGsK3zURz-g9spZ4GuNdOuiwp4C6WkBb9ezv_lNZnRYipuW-jBhAQ4ET0aczKTTC2IMj6XVui_qgrlPw8oDz1MSXJ7JjAw5zegx2l9UdQh5vv2kbv010wlOJWFMDhYf2oQM88D7BayrK6J2trS1w8">
                <div
                    class="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-xs font-bold text-gray-800 dark:text-gray-100">باز</span>
                </div>
                <div
                    class="absolute bottom-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
                    <span class="text-xs font-medium text-gray-800 dark:text-gray-100">۲۴۳ تجربه</span>
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h2 class="text-lg font-bold text-primary dark:text-blue-400 mb-1">کافه رستوران ونوس</h2>
                        <div class="flex items-center text-sm text-text-muted-light dark:text-text-muted-dark gap-3">
                            <div class="flex items-center gap-1">
                                <span class="material-icons text-base fill-text-muted-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"/></svg>
                                </span>
                                <span>کافه و رستوران</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="material-icons text-base fill-text-muted-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                                </span>
                                <span>ولیعصر، تهران</span>
                            </div>
                        </div>
                    </div>
                    <button
                        class="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-blue-400 transition-colors">
                        <span class="material-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>
                        </span>
                    </button>
                </div>
                <div class="flex flex-wrap gap-2 my-3">
                    <span
                        class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-tag-bg-light dark:bg-tag-bg-dark text-tag-text-light dark:text-tag-text-dark">
                        <span class="material-icons text-[14px] fill-tag-text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                        </span>
                        فضای کار
                    </span>
                    <span
                        class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-tag-bg-light dark:bg-tag-bg-dark text-tag-text-light dark:text-tag-text-dark">
                        <span class="material-icons text-[14px] fill-tag-text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="14px" viewBox="0 0 24 24" width="14px"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M18.5,3H6C4.9,3,4,3.9,4,5v5.71c0,3.83,2.95,7.18,6.78,7.29c3.96,0.12,7.22-3.06,7.22-7v-1h0.5c1.93,0,3.5-1.57,3.5-3.5 S20.43,3,18.5,3z M16,5v3H6V5H16z M16,10v1c0,2.76-2.24,5-5,5s-5-2.24-5-5v-1 M18.5,8H18V5h0.5C19.33,5,20,5.67,20,6.5 S19.33,8,18.5,8z M4,19h16v2H4V19z"/></g></svg>
                        </span>
                        قهوه تخصصی
                    </span>
                </div>
                <p
                    class="text-sm text-text-light dark:text-text-dark italic border-r-2 border-primary pr-3 opacity-90 line-clamp-2">
                    "فضای داخلی فوق‌العاده دنج بود و برخورد پرسنل هم خیلی محترمانه..."
                </p>
            </div>
        </article>
        <article
            class="bg-white dark:bg-surface-dark border-y sm:border sm:rounded-xl border-border-light dark:border-border-dark overflow-hidden sm:mx-4 shadow-sm">
            <div class="relative aspect-video">
                <img alt="نمای بیرونی کافه با میزهای فضای باز" class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoOUZ_IUC4tW_xE-TFVxWhz5Hkb1CbdBgXYVStp-XEh7iIXQGiaeU2j13z4y1TrTn4A5a881E-kaYQ76YrfJ61ztpqzPlVaIoqtiZtbjbh0k_xQmY-fA5ycj31rokobQ-OTNOOEX_kbsku9aaP3JWan09mVhOECx9cWks95h0v-pSOkPUiNO7ge1ZT16fIpc-fjpMsc9epPFjO81uOgWcr_p_Q1N6W-8UjK6j38M0SCFwGISapJy0t3G6jIeJIuShHhHGO4PJBPPw">
                <div
                    class="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <div class="w-2 h-2 rounded-full bg-red-500"></div>
                    <span class="text-xs font-bold text-gray-800 dark:text-gray-100">بسته</span>
                </div>
                <div
                    class="absolute bottom-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
                    <span class="text-xs font-medium text-gray-800 dark:text-gray-100">۱۸۷ تجربه</span>
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h2 class="text-lg font-bold text-primary dark:text-blue-400 mb-1">کافه لمیز (شعبه چهارراه
                            ولیعصر)</h2>
                        <div class="flex items-center text-sm text-text-muted-light dark:text-text-muted-dark gap-3">
                            <div class="flex items-center gap-1">
                                <span class="material-icons text-base fill-text-muted-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 5v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10m4-2H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-2 5V5h2v3h-2zm2 11H2v2h18v-2z"/></svg>
                                </span>
                                <span>کافه</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="material-icons text-base fill-text-muted-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                                </span>
                                <span>چهارراه ولیعصر، تهران</span>
                            </div>
                        </div>
                    </div>
                    <button class="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-blue-400 transition-colors">
                        <span class="material-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>
                        </span>
                    </button>
                </div>
                <div class="flex flex-wrap gap-2 my-3">
                    <span
                        class="bg-badge-container text-on-surface text-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                        <span class="material-icons text-[14px] fill-tag-text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="14px" viewBox="0 0 24 24" width="14px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M22,9L12,2L2,9h9v13h2V9H22z M12,4.44L15.66,7H8.34L12,4.44z"/><polygon points="4.14,12 2.18,12.37 3,16.74 3,22 5,22 5.02,18 7,18 7,22 9,22 9,16 4.9,16"/><polygon points="19.1,16 15,16 15,22 17,22 17,18 18.98,18 19,22 21,22 21,16.74 21.82,12.37 19.86,12"/></g></g></svg>
                        </span>
                        فضای باز
                    </span>
                    <span
                        class="bg-badge-container text-on-surface text-label-sm px-2 py-1 rounded-md flex items-center gap-1">
                        <span class="material-icons text-[14px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>
                        </span>
                        حیوان خانگی مجاز
                    </span>
                </div>
                <p
                    class="text-sm text-text-light dark:text-text-dark italic border-r-2 border-primary pr-3 opacity-90 line-clamp-2">
                    "قهوه‌های دمی اینجا حرف نداره، مخصوصا تو فضای بازش خیلی میچسبه."
                </p>
            </div>
        </article>
    </main>
</template>
<style lang="css">
.scrollbar-none {
    scrollbar-width: none;
}
</style>