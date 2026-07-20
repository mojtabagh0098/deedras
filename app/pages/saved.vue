<template>
    <div class="col-span-6 flex flex-col gap-6 py-6">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-surface-variant">
            <div>
                <h2 class="text-2xl font-bold text-display-sm text-on-surface">ذخیره‌های من</h2>
                <p class="font-body-md text-body-md text-on-surface-variant">تمام تجربه‌هایی که برای بعداً ذخیره کرده‌اید.
                </p>
            </div>
            <div
                class="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/30 cursor-pointer hover:bg-surface-container-high transition-colors">
                <span class="material-symbols-outlined">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
                    </svg>
                </span>
                <span>جدیدترین</span>
            </div>
        </div>
        <div
            class="flex-grow flex flex-col items-center justify-center bg-surface-container-lowest rounded-3xl border border-outline-variant/20 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] min-h-[400px]">
            <!-- Illustration Placeholder (Glassmorphism circle) -->
            <div class="relative w-48 h-48 mb-8 flex items-center justify-center">
                <div class="absolute inset-0 bg-primary-fixed/40 rounded-full blur-2xl"></div>
                <div
                    class="relative w-32 h-32 bg-white/60 backdrop-blur-md rounded-full border border-white/50 shadow-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-[64px] fill-primary/80">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="64px"
                            viewBox="0 0 24 24" width="64px">
                            <rect fill="none" height="24" width="24" />
                            <path
                                d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z" />
                        </svg>
                    </span>
                </div>
                <!-- Small floating elements -->
                <div
                    class="absolute top-4 right-4 w-6 h-6 bg-tertiary-fixed rounded-full shadow-sm flex items-center justify-center blur-[1px]">
                </div>
                <div
                    class="absolute bottom-8 left-0 w-8 h-8 bg-surface-variant rounded-xl shadow-sm rotate-12 blur-[1px]">
                </div>
            </div>
            <h3 class="font-headline-md text-headline-md text-on-background mb-3 text-center font-medium">هنوز تجربه‌ای
                ذخیره
                نکرده‌اید.</h3>
            <p class="font-body-md text-body-md text-secondary text-center max-w-sm mb-8 leading-relaxed">
                مکان‌ها و تجربه‌های جذابی که دوست دارید بعدا دوباره ببینید یا به آن‌ها سر بزنید را اینجا ذخیره کنید.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <!-- Primary Action -->
                <RouterLink to="/explore"
                    class="bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 rounded-xl font-title-lg text-title-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined fill-on-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                        </svg>
                    </span>
                       کاووش
                </RouterLink>
                <!-- Secondary Action -->
                <RouterLink to="/"
                    class="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-8 py-3.5 rounded-xl font-title-lg text-title-lg transition-colors flex items-center justify-center gap-2 border border-outline-variant/30">
                    <span class="material-symbols-outlined fill-on-surface">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path></svg>
                    </span>
                    خانه
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="col-span-4 flex flex-col py-6 sticky top-[-444px]">
        <div class="flex items-center justify-between mb-6">
            <h2 class="font-[600] text-[18px] text-on-surface flex items-center gap-2">
                <span class="material-symbols-outlined fill-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                    </svg>
                </span>
                ۲۴ تجربه
            </h2>
        </div>
        <div class="relative mb-6">
            <span
                class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            </span>
            <input
                class="w-full bg-surface-container-low border border-variant/30 rounded-lg py-2 pr-10 pl-4 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/60 focus:border focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="جستجو در ذخیره‌ها..." type="text">
        </div>
        <div class="mb-8">
            <span class="flex fill-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/></svg>
                <h3 class="font-[600] text-[18px] text-on-surface-variant mb-3 px-2">دسته‌بندی‌ها</h3></span>
            <div class="flex flex-col gap-1">
                <button
                    class="flex items-center justify-between px-3 py-2 rounded-lg bg-secondary-container/50 text-on-secondary-container hover:bg-secondary-container transition-colors group">
                    <div class="flex items-center gap-2 font-body-sm text-body-sm">
                        <span class="material-symbols-outlined text-[18px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"/></svg>
                        </span>
                        کافه و رستوران
                    </div>
                    <span
                        class="font-label-md text-label-md bg-surface-container-lowest px-2 py-0.5 rounded-full group-hover:bg-surface-variant transition-colors">۱۲</span>
                </button>
                <button
                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-secondary hover:text-on-surface transition-colors group">
                    <div class="flex items-center gap-2 font-body-sm text-body-sm">
                        <span class="material-symbols-outlined text-[18px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 5v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10m4-2H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-2 5V5h2v3h-2zm2 11H2v2h18v-2z"/></svg>
                        </span>
                         کافی شاپ
                    </div>
                    <span
                        class="font-label-md text-label-md bg-surface-container-low px-2 py-0.5 rounded-full group-hover:bg-surface-variant transition-colors">۷</span>
                </button>
                <button
                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-secondary hover:text-on-surface transition-colors group">
                    <div class="flex items-center gap-2 font-body-sm text-body-sm">
                        <span class="material-symbols-outlined text-[18px]">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M17,12h2L12,2L5.05,12H7l-3.9,6h6.92v4h3.95v-4H21L17,12z M6.79,16l3.9-6H8.88l3.13-4.5l3.15,4.5h-1.9l4,6H6.79z"/></g></g></g></svg>
                        </span>
                        طبیعت
                    </div>
                    <span
                        class="font-label-md text-label-md bg-surface-container-low px-2 py-0.5 rounded-full group-hover:bg-surface-variant transition-colors">۳</span>
                </button>
                <button
                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-surface-container-high text-secondary hover:text-on-surface transition-colors group">
                    <div class="flex items-center gap-2 font-body-sm text-body-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/></g></svg>
                        خرید
                    </div>
                    <span
                        class="font-label-md text-label-md bg-surface-container-low px-2 py-0.5 rounded-full group-hover:bg-surface-variant transition-colors">۲</span>
                </button>
            </div>
        </div>
        <div class="flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-on-surface-variant mt-4 px-2 border-t py-2 border-surface-container-low">
            <a class="hover:text-primary transition-colors" href="#">درباره دیدرس</a>
            <a class="hover:text-primary transition-colors" href="#">قوانین و مقررات</a>
            <a class="hover:text-primary transition-colors" href="#">حریم خصوصی</a>
            <a class="hover:text-primary transition-colors" href="#">کسب‌وکارها</a>
            <span class="w-full mt-2 text-outline">© ۱۴۰۵ پلتفرم دیدرس</span>
        </div>
    </div>
</template>