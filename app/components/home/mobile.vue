<template>
    <header class="sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant px-margin-mobile h-16 flex items-center justify-between">
        <div class="text-headline-md font-bold text-primary flex items-center gap-1">
            <RouterLink class="mb-stack-lg group flex flex-col items-center gap-2" to="/">
                <div class="flex items-center justify-center">
                    <span class="size-10 font-eng-headline text-eng-headline font-bold">
                        <img src="/img/logo.png" alt="Logo" />
                    </span>
                </div>
            </RouterLink>
        </div>
        <div class="flex items-center gap-4">
            <div class="relative">
                <RouterLink to="/notifications" class="relative text-on-surface-variant p-2">
                    <span class="material-symbols-outlined text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                            fill="#1f1f1f">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                        </svg>
                    </span>
                    <span class="absolute top-[30px] left-0 w-2 h-2 bg-error rounded-full"></span>
                </RouterLink>
            </div>
        </div>
    </header>
    <main class="flex-1 flex flex-col w-full">
        <!-- Search & Tabs Section (Sticky below app bar) -->
        <div class="sticky top-16 z-40 bg-surface-container-lowest border-b border-outline-variant pb-2 shadow-sm">
            <!-- Search Field -->
            <div class="px-margin-mobile py-3">
                <div
                    class="bg-surface-container h-12 rounded-full flex items-center px-4 border border-transparent focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors">
                    <span class="material-symbols-outlined fill-on-surface-variant">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    </span>
                    <input
                        class="flex-1 bg-transparent border-none text-body-md focus:ring-0 px-2 placeholder:text-outline h-full font-body-md text-on-surface"
                        placeholder="جستجو برای مکان، تجربه یا افراد..." type="text">
                    <button class="text-on-surface-variant">
                        <span class="material-symbols-outlined fill-on-surface">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
                        </span>
                    </button>
                </div>
            </div>
            <!-- Horizontal Tabs -->
            <div class="flex overflow-x-auto hide-scrollbar px-margin-mobile gap-6 border-b border-outline-variant">
                <button
                    class="whitespace-nowrap pb-3 text-label-md font-bold text-primary border-b-2 border-primary">برای
                    شما</button>
                <button
                    class="whitespace-nowrap pb-3 text-label-md font-medium text-on-surface-variant hover:text-on-surface">جدیدترین‌ها</button>
                <button
                    class="whitespace-nowrap pb-3 text-label-md font-medium text-on-surface-variant hover:text-on-surface">پربازدید</button>
                <button
                    class="whitespace-nowrap pb-3 text-label-md font-medium text-on-surface-variant hover:text-on-surface">اطراف
                    من</button>
            </div>
        </div>
        <div class="flex flex-col gap-2 bg-surface-container-low pt-2">
            <!-- Feed Card 1 -->
            <article class="bg-surface-container-lowest flex flex-col gap-3 shadow-sm mx-0 sm:mx-margin-mobile mb-2">
                <!-- Header -->
                <div class="flex items-center justify-between px-4 pt-4 pb-2">
                    <div class="flex items-center gap-3">
                        <img alt="سارا احمدی" class="w-10 h-10 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASOeehWwqz4_GQSfm_E66lE6Pk-HbWcRR8pqm_qgOnLxCG5CDhh8_00Rg9bqMd9Lf1f2fwRyTCoFns2DlqNBO5Yenm9CQS-CrI_lP9JL9tJtFjKfuR2olpx-5y0rButBxE1wtzfIUPSw_3PD0pcnX4fMwLLxMZdFKec9-nmdFxZJC5ApjawyBkibM1QYRH208iQK_x6Scq4aKMsMaxjoJE3H83GMhBEiz7UDyWGAeLo4MQDsl4JGePHWvBrTNpYmN8s4bnj5DcfWY">
                        <div>
                            <div class="flex items-center gap-1">
                                <h3 class="font-label-md font-bold text-on-surface">سارا احمدی</h3>
                                <span class="material-symbols-outlined text-[14px] fill-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"/><polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"/></g></g></svg>
                                </span>
                            </div>
                            <p class="text-[11px] text-on-surface-variant">راهنمای محلی سطح ۵ • ۲ ساعت پیش</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="text-on-surface-variant p-1">
                            <span class="material-symbols-outlined text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Content Text -->
                <div>
                    <p class="text-body-md text-on-surface leading-relaxed px-4">
                        امروز برای کار به این کافه اومدم. فضای بسیار
                        آرام و نورگیری داره. اینترنت پایدار و پریز برق به تعداد کافی در کنار میزها تعبیه شده. قهوه‌شون
                        هم کیفیت قابل قبولی داشت.
                    </p>
                </div>
                <!-- Chips -->
                <div class="flex flex-wrap gap-2 px-4">
                    <span class="bg-surface-container text-on-surface-variant px-2 py-1 rounded-md text-[11px]">#فضای_کار</span>
                    <span class="bg-surface-container text-on-surface-variant px-2 py-1 rounded-md text-[11px]">#کافه_گردی</span>
                </div>
                <!-- Image -->
                <div class="overflow-hidden mt-1 h-48 w-full">
                    <img alt="کافه فضای کار" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOYzwyZohG-TuKKsOH5yDdmx0dmLFCuebq1l1vgbGNGnt3EQSFtCkIpAkdy6PysJ-9eZPcZd7NNwqXigUxCLrifb9KsDKf2bRGgVTMPldL39qFhjxH8oV5ko1D8-03i6Ld1c3u7Bs8--mrzHi_c-7xBOXjbkJo4LmlTzTi4QBE8e7hBB1H-iHWc2_FBNUXh3sklDfb_Dnb5JHYv6GKwQ-gAyt1zWu3sxnQ4ZcyhdPLz0Pus923Yo_5NIXP5oP4jgVI-PSUTPRRyhc">
                </div>
                <!-- Location Card -->
                <div class="border border-outline-variant rounded-xl p-2 mx-4 flex items-center gap-3 bg-surface-bright mt-1">
                    <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined fill-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"/></g></g></svg>
                        </span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-label-md font-bold text-on-surface truncate">کافه ویونا (شعبه پسیان)</h4>
                        <div class="flex items-center gap-1 text-[11px] text-on-surface-variant">
                            <span class="material-symbols-outlined fill-on-surface-variant">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                            </span>
                            <span class="truncate">زعفرانیه</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-1 bg-surface-container-high px-2 py-1 rounded-md">
                        <span class="text-label-sm font-bold">۴.۵</span>
                        <span class="material-symbols-outlined text-[12px] text-star-rating"
                            style="font-variation-settings: 'FILL' 1;">star</span>
                    </div>
                </div>
                <!-- Actions -->
                <div class="flex items-center justify-between border-t border-outline-variant pt-3 px-4 mt-1">
                    <div class="flex items-center gap-4">
                        <button class="flex items-center gap-1 text-on-surface-variant text-label-sm">
                            <span class="material-symbols-outlined fill-on-surface-variant text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>                            
                            </span> ۲۴
                        </button>
                        <button class="flex items-center gap-1 text-on-surface-variant text-label-sm">
                            <span class="material-symbols-outlined fill-on-surface-variant text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"></path></svg>
                            </span> ۵
                        </button>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="text-on-surface-variant">
                            <span class="material-symbols-outlined text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
                            </span>
                        </button>
                        <button class="text-on-surface-variant">
                            <span class="material-symbols-outlined text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
                <!-- Business Reply (Nested) -->
                <div class="bg-surface-container-lowest border-r-2 border-primary pr-3 pl-2 py-2 my-2 rounded-l-lg mx-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                            <span class="material-symbols-outlined text-[14px] fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="14px" viewBox="0 0 24 24" width="14px"><g><rect fill="none" height="24" width="24"></rect></g><g><g></g><g><path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"></path></g></g></svg>
                            </span>
                        </div>
                        <span class="text-label-sm font-bold text-on-surface">کافه ویونا (مدیریت)</span>
                    </div>
                    <p class="text-[12px] text-on-surface-variant">سارا عزیز، خوشحالیم که از فضای کار ما رضایت داشتید.
                        منتظر دیدار مجدد شما هستیم.</p>
                </div>
            </article>
            <!-- Discovery Modules -->
            <div class="bg-surface-container-lowest p-4 mb-2 shadow-sm">
                <h3 class="font-headline-md text-on-surface font-bold mb-3">ترندهای این هفته</h3>
                <div class="flex overflow-x-auto hide-scrollbar gap-4 -mx-4 px-4 pb-2">
                    <!-- Trend Card 1 -->
                    <div class="w-40 shrink-0 border border-outline-variant rounded-xl overflow-hidden">
                        <img alt="موزه" class="h-24 w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5jxJusHCP2LJwnCKljgzdxlFFyoDsoc4nUmUxJxbd7G_F4pILtKp4ZVMynvgiaARV7BJGpigwuKpaiHALZSh7brobQXAVUxWVWoUZnVk7Loxj1RVVkmUvg4Sr_4sQMJ1UvD9NgDGNVv-birFkVmMnL7vwBpD3x7_1k2RvNkZuYF4kd11hy5NyWPpw4yRFvIRDbFG1LvHPxU7KHxDImqnxhcRfvZBWwGtEd916mLJOkFwChIQ7Hi5Q4YrD5a4LRPm3Ta406hNPfhI">
                        <div class="p-2">
                            <h4 class="font-label-sm font-bold truncate">موزه هنرهای معاصر</h4>
                            <div class="flex items-center gap-1 mt-1 text-[10px] text-on-surface-variant">
                                <span class="material-symbols-outlined text-[12px] text-star-rating"
                                    style="font-variation-settings: 'FILL' 1;">star</span> ۴.۸
                            </div>
                        </div>
                    </div>
                    <!-- Trend Card 2 -->
                    <div class="w-40 shrink-0 border border-outline-variant rounded-xl overflow-hidden">
                        <img alt="کتابفروشی" class="h-24 w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqD9h1CvINXCQToiZSjV9aO1DRLi0PzPgVK10kBM2DoLtTgDNa1y8xpQ2YFQRDW6OS5d9VX0JhdIuejFiky8NE0qu_TUthn-4NcaUpB40p_GeUqbXdZk3OviqIz_HfuXRqDqzjdNKChNdvlwK6kQuYe2TwY3fIGsvQyVfA6hj8d5LH-yJCLtM43btcI_7bI6nNWy6vN1dZsa74w81SdTzcSEKjJpH8Ys2TXPpU1saPcQ0kifZ8Tx6oT9u42T0xWFbLljW6YqsV71M">
                        <div class="p-2">
                            <h4 class="font-label-sm font-bold truncate">کتابفروشی بوک‌لند</h4>
                            <div class="flex items-center gap-1 mt-1 text-[10px] text-on-surface-variant">
                                <span class="material-symbols-outlined text-[12px] text-star-rating"
                                    style="font-variation-settings: 'FILL' 1;">star</span> ۴.۶
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="font-headline-md text-on-surface font-bold mt-4 mb-2">موضوعات محبوب</h3>
                <div class="flex flex-wrap gap-2">
                    <span
                        class="px-3 py-1.5 border border-outline-variant rounded-full text-label-sm">#رستوران_ایتالیایی</span>
                    <span
                        class="px-3 py-1.5 border border-outline-variant rounded-full text-label-sm">#طبیعت_گردی</span>
                    <span
                        class="px-3 py-1.5 border border-outline-variant rounded-full text-label-sm">#گالری_هنری</span>
                    <span class="px-3 py-1.5 border border-outline-variant rounded-full text-label-sm">#کافه_بازی</span>
                </div>
            </div>
            <!-- Feed Card 2 -->
            <article
                class="bg-surface-container-lowest p-4 rounded-2xl flex flex-col gap-3 shadow-sm mx-0 sm:mx-margin-mobile mb-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <img alt="علی رضایی" class="w-10 h-10 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTeBdWQ5uuI2syUvQBt4XdzmgyRZ_eJqtfveWOEPeQ5zczeRATRC2CF1R15uap1MeJ_a0inxzalEnaeVxXyXjnyHzA9BoSW0gFYZEHRV-cs_UGaCyRndAbSVnKk_B0pZ03S1q3iSOcxftgO5-lG38THeWk1d_K-3eAxt0ANyxRgGGbtxrt6xCNUduuwMSVRpzNzX9ds8LPgj4dVn7mzZpYs7Ztl0e3mZY4mBF1Qp3WPuQ57nKoGrdWNltSph48usS3V5eucY45oxM">
                        <div>
                            <div class="flex items-center gap-1">
                                <h3 class="font-label-md font-bold text-on-surface">علی رضایی</h3>
                            </div>
                            <p class="text-[11px] text-on-surface-variant">منتقد غذا • ۵ ساعت پیش</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="text-on-surface-variant p-1">
                            <span class="material-symbols-outlined text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <p class="text-body-md text-on-surface leading-relaxed">معماری داخلی بینظیر و منوی کاملاً حرفه‌ای.
                        کباب بره اینجا رو حتما امتحان کنید. سرویس‌دهی بسیار محترمانه بود.</p>
                </div>
                <!-- Chips -->
                <div class="flex flex-wrap gap-2">
                    <span class="bg-surface-container text-on-surface-variant px-2 py-1 rounded-md text-[11px]">#فضای_کار</span>
                    <span class="bg-surface-container text-on-surface-variant px-2 py-1 rounded-md text-[11px]">#کافه_گردی</span>
                </div>
                <div class="rounded-2xl overflow-hidden mt-1 h-48 w-full">
                    <img alt="کباب" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB48JnQOXYasaEB1tvcdf6VuZIqB3q2kw2-0nEZ0HeVwwKPx1xjhXtHCjh_UPKO5xHrUhA-SO8rp33tgtYBFDE7IIDN5qJFiSGsrF3AqyXPVab1dNx9uwmsN2xicESUA8EgQdlzTzC7cpjGnbXAEJ5WtLHnCWTeA79VkQwhG0ql57x2uGqiRv5xmyPBcnjI1r85Zh9t2AMJ9TfbOlyN8BcM4DY0Co6edIn2OtvqiSheslJKEr4HnbS-1f-iOLjjbHeCoxZ-4p12-vo">
                </div>
                <div
                    class="border border-outline-variant rounded-xl p-2 flex items-center gap-3 bg-surface-bright mt-1">
                    <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined fill-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"></rect></g><g><g></g><g><path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"></path></g></g></svg>
                        </span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-label-md font-bold text-on-surface truncate">رستوران دیوان</h4>
                        <div class="flex items-center gap-1 text-[11px] text-on-surface-variant">
                            <span class="material-symbols-outlined text-[12px] fill-on-surface-variant">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
                            </span>
                            <span class="truncate">فرشته، مجتمع سام سنتر</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between border-t border-outline-variant pt-3 mt-1">
                    <div class="flex items-center gap-4">
                        <button class="flex items-center gap-1 text-on-surface-variant text-label-sm">
                            <span class="material-symbols-outlined fill-on-surface-variant text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>                            
                            </span> ۲۴
                        </button>
                        <button class="flex items-center gap-1 text-on-surface-variant text-label-sm">
                            <span class="material-symbols-outlined fill-on-surface-variant text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"></path></svg>
                            </span> ۵
                        </button>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="text-on-surface-variant">
                            <span class="material-symbols-outlined text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
                            </span>
                        </button>
                        <button class="text-on-surface-variant">
                            <span class="material-symbols-outlined text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    </main>
</template>