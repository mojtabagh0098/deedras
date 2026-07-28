<template>
    <div class="col-span-6 flex flex-col gap-6 py-6">
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-surface-variant">
            <div>
                <h2 class="text-2xl font-bold text-display-sm text-on-surface">ذخیره‌های من</h2>
                <p class="font-body-md text-body-md text-on-surface-variant">
                    24 تجربه ذخیره شده · آخرین ذخیره: ۲ روز پیش
                </p>
            </div>
            <div
                class="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md bg-white px-3 py-1.5 rounded-full border border-outline-variant/30 cursor-pointer hover:bg-surface-container-high transition-colors">
                <span class="material-symbols-outlined">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
                    </svg>
                </span>
                <span>جدیدترین</span>
            </div>
        </div>
        <div class="flex-grow flex flex-col items-center justify-center bg-surface-container-lowest rounded-3xl border border-outline-variant/20 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] min-h-[400px]">
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                            fill="#1f1f1f">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z">
                            </path>
                        </svg>
                    </span>
                    خانه
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="col-span-4 flex flex-col gap-6 py-6 sticky top-[-444px]">
        <div class="relative group">
            <div
                class="bg-surface-container-lowest border border-outline-variant rounded-full h-14 flex items-center shadow-sm relative focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
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
            </div>
        </div>
        <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 flex flex-col gap-4">
            <h2 class="text-label-md text-lg font-label-md text-text-primary flex items-center gap-2">
                پرجستجوترین‌ها
            </h2>
            <div class="flex flex-col gap-3">
                <div
                    class="flex items-center justify-between group cursor-pointer p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <div
                        class="flex flex-col gap-2 text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                        <span class="font-body-sm text-body-sm font-bold">
                            پاتوق‌های دانشجویی
                        </span>
                        <span class="text-xs text-[#53646f] font-medium ">
                            ترند در تهران · 2.3 هزار جستجو
                        </span>
                    </div>
                    <span class="material-symbols-outlined text-sm fill-on-surface-variant">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </svg>
                    </span>
                </div>
                <div
                    class="flex items-center justify-between group cursor-pointer p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <div
                        class="flex flex-col gap-2 text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">
                        <span class="font-body-sm text-body-sm font-bold">
                            صبحانه‌های تهران
                        </span>
                        <span class="text-xs text-[#53646f] font-medium ">
                            ترند در تهران · 2.3 هزار جستجو
                        </span>
                    </div>
                    <span class="material-symbols-outlined text-sm fill-on-surface-variant">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 flex flex-col">
            <h2 class="text-label-md text-lg font-label-md text-text-primary flex items-center gap-2">
                پیشنهاد برای شما
            </h2>
            <span class="text-xs text-on-surface-variant">بر اساس علاقه‌مندی‌ها و ذخیره‌های شما</span>
            <div class="space-y-5 mt-5">
                <!-- Item 1 -->
                <div class="flex items-center gap-4">
                    <img alt="Cafe Venus" class="w-16 h-16 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDINV2zuvBEp6YFGZXCv4bfJvJbEZ4SJxn5saOAhWKdHJ8qIVJrJsUGGCyVJzU8W5z7zybzb-YL_0pAYsKLja_QV9uDEm4bFZxAJzekWYAn6WlEIsx_bE6xjPqc7Uwa3FPd9uViDgrTHWgULe20WgYV3gx7JqG8d8yGMFDlzKhhj6etmDf36nC382OvNdlB-fxZkQg5ZjS2HtVptfmoLnz9qbww5V-qQmO9d4zThcJQeVrcXeQi315wzrmh8ZBAQyN0My9bJXXqU60">
                    <div class="flex-1 min-w-0">
                        <h4 class="text-label-md text-on-surface truncate">کافه رستوران ونوس</h4>
                        <p class="text-body-sm text-outline truncate">ولنجک، تهران</p>
                        <div class="flex items-center gap-1.5 mt-1 text-label-sm">
                            <i class="fa-solid fa-star text-rating-star"></i>
                            <span class="text-on-surface">۴.۸</span>
                            <span class="text-outline">(۲۴۲ نظر)</span>
                        </div>
                    </div>
                </div>
                <!-- Item 2 -->
                <div class="flex items-center gap-4">
                    <img alt="Museum" class="w-16 h-16 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzKIdEGfJJ7bqjdQC5FJmv9ToVMbhfquH-rYYCLSVx0kXXOnTdeHob5kkwADHyVckso7gpv3gs3YWlmlFzPmFDEV2XvBP6znk211TDR07q4mVAK4M0VDXdcIGAt_mb4jtxBbTNn85M0jTYm7gO1h6XZL1J3Dus4gBM2FkyYaVKSIP2zm5qUw2MOy1pZCzfVQZPZLIHmTnK_W27hEc8wX6ZswRM7fwDWqQFRKvTWphH1tQv_TIksL3Vwg0hqpas2Uwnvj-ksjVGuBE">
                    <div class="flex-1 min-w-0">
                        <h4 class="text-label-md text-on-surface truncate">موزه هنرهای معاصر</h4>
                        <p class="text-body-sm text-outline truncate">تجریش، تهران</p>
                        <div class="flex items-center gap-1.5 mt-1 text-label-sm">
                            <i class="fa-solid fa-star text-rating-star"></i>
                            <span class="text-on-surface">۴.۷</span>
                            <span class="text-outline">(۱۸۶ نظر)</span>
                        </div>
                    </div>
                </div>
                <!-- Item 3 -->
                <div class="flex items-center gap-4">
                    <img alt="Sports Complex" class="w-16 h-16 rounded-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJtkuBBQhuNmwjD8YQ3q1wcjrt_kTfrhpnJB8vnOFrMU3oyzFcn_vCN29TYrHmpsQ8T0IkNlv8GKRY5JHN6YQQuzOOe50nUWzrydZXJzgIszH5JafvkI4qgRSaCEd9rh9y_jC-nCTACy5jAoC2AAb5f5ykshRTvzkpBNI46IikTBcX5wL10lyiU9I0EzPK6ZHDMr1lEwZIE5z4ooNBwbgsmyZa7SO0oSp9LL8aUwyghpwgL3Y08hNd1cwSOCUnM2bBTn5g5mF8QG8">
                    <div class="flex-1 min-w-0">
                        <h4 class="text-label-md text-on-surface truncate">مجموعه ورزشی انقلاب</h4>
                        <p class="text-body-sm text-outline truncate">جاده تندرستی، تهران</p>
                        <div class="flex items-center gap-1.5 mt-1 text-label-sm">
                            <i class="fa-solid fa-star text-rating-star"></i>
                            <span class="text-on-surface">۴.۶</span>
                            <span class="text-outline">(۱۲۳ نظر)</span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="w-full mt-2 text-primary font-label-sm text-label-sm font-bold py-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant">
                مشاهده بیشتر
            </button>
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