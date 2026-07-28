<template>
    <header
        class="sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant px-margin-mobile h-16 flex items-center justify-between">
        <div class="text-headline-md font-bold text-primary flex items-center gap-1">
            <RouterLink class="mb-stack-lg group flex flex-col items-center gap-2" to="/">
                <div class="flex items-center justify-center text-[17px] text-black ">
                    <span class="size-10 font-eng-headline text-eng-headline font-bold flex">
                        <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                    </span>
                    ذخیره‌ها
                </div>
            </RouterLink>
        </div>
    </header>
    <div class="flex flex-col px-4 py-2 gap-4">
        <div class="relative w-full shadow-sm rounded-full bg-surface-container-lowest border border-outline-variant focus-within:border-secondary transition-colors">
            <input class="w-full pl-12 pr-4 py-3 rounded-full bg-transparent border-none focus:ring-0 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant" placeholder="جستجو در ذخیره‌ها..." type="text">
            <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 fill-on-surface-variant">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </span>
        </div>
        <div class="w-full md:px-0 mb-6 flex gap-2 overflow-x-auto pb-2">
            <button class="flex items-center gap-2 px-4 py-1.5 bg-surface-container-lowest border border-border-light rounded-full text-on-surface font-label-md text-xs font-[600] hover:bg-surface-container-low transition-colors whitespace-nowrap shadow-sm">
                <span class="material-symbols-outlined text-[18px] fill-on-surface" data-icon="sort">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </span>
                جدیدترین
            </button>
            <button class="flex items-center gap-2 px-4 py-1.5 bg-chip-blue-bg bg-primary-container text-white rounded-full font-label-md text-xs font-[600] transition-colors whitespace-nowrap">
                همه
            </button>
            <button class="flex items-center gap-2 px-4 py-1.5 bg-surface-container-lowest border border-border-light rounded-full text-on-surface font-label-md text-xs font-[600] hover:bg-surface-container-low transition-colors whitespace-nowrap shadow-sm">
                کافه‌ها
            </button>
            <button class="flex items-center gap-2 px-4 py-1.5 bg-surface-container-lowest border border-border-light rounded-full text-on-surface font-label-md text-xs font-[600] hover:bg-surface-container-low transition-colors whitespace-nowrap shadow-sm">
                موزه‌ها
            </button>
        </div>
    </div>
    <div class="flex-1 bg-surface flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
        <!-- Graphic element -->
        <div class="relative w-32 h-32 mb-8 flex items-center justify-center">
            <div class="absolute inset-0 bg-primary-fixed rounded-full opacity-20 animate-pulse"></div>
            <div class="absolute w-24 h-24 bg-surface rounded-full shadow-lg flex items-center justify-center z-10">
                <span class="material-symbols-outlined fill-primary text-5xl" data-icon="bookmark_add">
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px"><rect fill="none" height="24" width="24"/><path d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z"/></svg>
                </span>
            </div>
            <!-- Decorative floating orbs -->
            <div class="absolute top-0 right-0 w-6 h-6 bg-tertiary-fixed-dim rounded-full opacity-50 blur-[2px]"></div>
            <div class="absolute bottom-4 left-0 w-8 h-8 bg-outline-variant rounded-full opacity-30 blur-[1px]"></div>
        </div>
        <h3 class="font-headline-lg-mobile text-headline-md-mobile text-on-surface font-bold mb-4">هنوز تجربه‌ای ذخیره
            نکرده‌اید.</h3>
        <p class="font-body-lg text-body-sm text-secondary max-w-md mx-auto mb-8 leading-relaxed">
            مکان‌ها و تجربه‌های جذابی که دوست دارید بعدا دوباره ببینید یا به آن‌ها سر بزنید را اینجا ذخیره کنید.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
                class="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary/90 transition-colors">
                <span class="material-symbols-outlined flex gap-2 fill-on-primary" data-icon="explore">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>
                    کاووش
                </span>
            </button>
            <button
                class="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-surface-container-highest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-variant transition-colors border border-outline-variant/30">
                <span class="material-symbols-outlined flex gap-2 fill-on-surface" data-icon="home" style="font-size: 20px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                </span>
                خانه
            </button>
        </div>
    </div>
</template>