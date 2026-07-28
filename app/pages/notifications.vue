<template>
    <div class="col-span-6 flex flex-col py-6 bg-white">
        <div class="flex items-center justify-between pb-4 border-b border-surface-variant">
            <div class="px-4">
                <h2 class="text-2xl font-bold text-display-sm text-on-surface">اعلان‌ها</h2>
                <p class="font-body-md text-body-md text-on-surface-variant">
                    24 تجربه ذخیره شده · آخرین ذخیره: ۲ روز پیش
                </p>
            </div>
        </div>
        <div class="flex border-b border-border-light dark:border-border-dark sticky top-0 z-10 bg-white">
            <button
                class="flex-1 text-center py-4 font-bold text-text-main-light dark:text-text-main-dark border-b-4 border-primary transition-colors relative">
                همه
            </button>
            <button
                class="flex-1 text-center py-4 font-medium text-text-muted-light dark:text-text-muted-dark hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b-4 border-transparent">
                خوانده نشده
            </button>
        </div>
        <div class="divide-y divide-border-light dark:divide-border-dark">
            <div
                class="px-4 py-2 bg-background-light dark:bg-background-dark/50 text-xs font-bold text-text-muted-light dark:text-text-muted-dark sticky top-[62px] z-10">
                امروز</div>
            <article
                class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer flex gap-4 bg-blue-50/50 dark:bg-blue-900/10 relative">
                <div class="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                <div class="w-10 flex-shrink-0 flex justify-end">
                    <span class="flex items-center justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                            fill="#1f1f1f">
                            <path
                                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                        </svg> </span>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1 mb-2">
                        <img alt="کاربر"
                            class="w-8 h-8 rounded-full border-2 border-surface-light dark:border-surface-dark"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4mbkBikx_I1WqnDwivC5ldr-A9Wp_kwsIg1vrV635zUaFqsQEQmuilITyj_z4cb6xysCgBAyNU495J1OgZBaXOMV2lSq3R94R73FeMPdGQdXzumYycWwIe8IGkCwNPC6Zh5_crszoP27UBE3-pxhR_zaNgeIow3PV4_OzupRIUkPLduEffpuagkcrDS3zFiN11KnXkmsDgBr_yZW1ZQphfxveRpn6zjm6Ixorr_CjOeeL7KJAq0eKNvwU9NI7_OyfOdjUqnvHSOM">
                        <img alt="کاربر"
                            class="w-8 h-8 rounded-full border-2 border-surface-light dark:border-surface-dark -mr-3"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXL47phmAJERdqLRGjIEMJefLJj58OIBjwLuNdsuunO1XHuEAZIxpQ1-_s56ussbWHLVIVU7IE8wwzpnnqZ_SRfswhvs9Ni1ofA6pr1gvWKlGXp6NpoUWq4uZ5AJSrUb7FhO4Nf4e1WeZRA7H5YboHBQtgyjpA4_0cz3sG0i6QUxna6QQiNw6cDnPzIdn-PooydLbIVy-hLoiCdMl6h3cXBVoy1quZK9QR-BeO9vHohg09Hg8idLO_prljIJ8OZb_LnWZiy4eF4G8">
                        <img alt="کاربر"
                            class="w-8 h-8 rounded-full border-2 border-surface-light dark:border-surface-dark -mr-3"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8cRYJIOfl8pUaUhPbesqHgMuultsEI2PbiW3yTt00GNg9t9S_Vk7SrFwvl5-uRLgrheXQDTpM-NWzHXrUU1RZtm-ulty6sGCrKxUk0Xe3tvGttbJKELG-LOGbQEj20Ag8-j326uIS_K9dyMHw5uXCTNprYlsvfJ2JiO925q2KKqi-8Bm4tVlZbIL2RxxMMNQRW6hUgl8FwUvWoOstkWyxyYJYC-aSDfkkDYADk6w_ZEIpx_mHIxf6aZaKN5KG1GRmqBAuBhczlzo">
                    </div>
                    <p class="text-sm">
                        <span class="font-bold">۱۲ نفر</span> تجربه شما را درباره <span
                            class="font-medium text-primary">رستوران شاندیز</span> پسندیدند.
                    </p>
                </div>
            </article>
            <article
                class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer flex gap-4 bg-blue-50/50 dark:bg-blue-900/10 relative">
                <div class="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                <div class="w-10 flex-shrink-0">
                    <img alt="مریم" class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm-caaxjOzmTWFBpi94y-gKLVE2mDlnl9FlY_NG8PLLAWgXkDv5st6-MbWwcAFk85ZolgS9kI0GCMZH1rSR5_4Y4OmvbfecZFzfDN8SM3QAxwV5BK7VRLNhvlrqjz_61iFNsDAbj1JAxjkqHSG6piZrG0EazWL__nBWbRdzU2ZlFBytrFZ63BzbedbAQKxxrK7MGcFear1QZwXszBrSAuy5FNtj5crfccJTQlwaI3kq3cN5Dl5YSlpx6PhEnLatfIc_je7EuJMs_s">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm">
                        <span class="font-bold">مریم سلطانی</span> برای تجربه شما نظر ثبت کرد.
                    </p>
                    <p class="text-sm text-text-muted-light dark:text-text-muted-dark mt-1 line-clamp-2">"واقعا فضای
                        خوبی داشت، ممنون بابت پیشنهاد عالی!"</p>
                    <button
                        class="mt-2 text-xs font-medium text-primary border border-border-light dark:border-border-dark px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                        پاسخ
                    </button>
                </div>
            </article>
            <div
                class="px-4 py-2 bg-background-light dark:bg-background-dark/50 text-xs font-bold text-text-muted-light dark:text-text-muted-dark sticky top-[62px] z-10 border-t border-border-light dark:border-border-dark">
                دیروز</div>
            <article
                class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer flex gap-4 pl-8">
                <div class="w-10 flex-shrink-0">
                    <img alt="علی" class="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiSy-LhzDXBHtQmUsp_p_UcXk3oLC3tY5joXH_r9ufqgbdMSL38g6LbWbBDCvpbKrsIxkLUUviEGsHu2wVudo8mmIsgbamARAG9ym1RA3JdvHP9TWQxGnJixRj-UD7D3uc4fEgOkFlcPvobuaxRCyCKgr2e1mK3hv3sZBEf2FmMYeTUiMUpu_q3-jqgRkNwz4BlQyK1UdLHjbmLBC1LjOaLE1862Btf9urdTAozEZNJGgprbLyu9NJOmrX7NbGxK1tLhpTLlX-KMk">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm">
                        <span class="font-bold">علی رضایی</span> تجربه جدیدی درباره <span class="font-medium">کافه
                            ویونا</span> ثبت کرد.
                    </p>
                </div>
            </article>
            <article
                class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer flex gap-4 pl-8">
                <div class="w-10 flex-shrink-0 flex justify-end">
                    <span class="material-icons-round text-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="30px"
                            viewBox="0 0 24 24" width="30px" fill="#1f1f1f">
                            <rect fill="none" height="24" width="24" />
                            <path
                                d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z" />
                        </svg>
                    </span>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium">
                        تبریک! تجربه شما وارد تجربه‌های محبوب هفته شد.
                    </p>
                </div>
            </article>
            <article
                class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer flex gap-4 pl-8">
                <div class="w-10 flex-shrink-0 flex justify-end text-emerald-600 dark:text-emerald-400">
                    <span class="material-icons-round text-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#1f1f1f">
                            <path
                                d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                        </svg>
                    </span>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm">
                        تجربه شما توسط <span class="font-bold">۱۸ نفر</span> ذخیره شد.
                    </p>
                </div>
            </article>
            <div
                class="px-4 py-2 bg-background-light dark:bg-background-dark/50 text-xs font-bold text-text-muted-light dark:text-text-muted-dark sticky top-[62px] z-10 border-t border-border-light dark:border-border-dark">
                این هفته</div>
            <article
                class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer flex gap-4 pl-8">
                <div class="w-10 flex-shrink-0 flex justify-end">
                    <span class="material-icons-round text-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                            fill="#1f1f1f">
                            <path
                                d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z" />
                        </svg>
                    </span>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm">
                        تجربه شما <span class="font-bold">۳۵۰ بار</span> دیده شد.
                    </p>
                </div>
            </article>
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
                    placeholder="جستجو اعلان ها..." type="text">
            </div>
        </div>
        <div class="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 flex flex-col gap-4">
            <h2 class="text-label-md text-lg font-label-md text-text-primary flex items-center gap-2">
                پیشنهادی برای شما
            </h2>
            <ul class="space-y-3">
                <li class="flex items-start gap-3">
                    <div class="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <p class="text-sm hover:text-primary transition-colors cursor-pointer">کافه ویونا تجربه جدید دارد
                    </p>
                </li>
                <li class="flex items-start gap-3">
                    <div class="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <p class="text-sm hover:text-primary transition-colors cursor-pointer">لیست برترین کافه‌های انقلاب
                        بروز شد</p>
                </li>
            </ul>
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
                    <img alt="Cafe Venus" class="w-16 h-16 rounded-2xl object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDINV2zuvBEp6YFGZXCv4bfJvJbEZ4SJxn5saOAhWKdHJ8qIVJrJsUGGCyVJzU8W5z7zybzb-YL_0pAYsKLja_QV9uDEm4bFZxAJzekWYAn6WlEIsx_bE6xjPqc7Uwa3FPd9uViDgrTHWgULe20WgYV3gx7JqG8d8yGMFDlzKhhj6etmDf36nC382OvNdlB-fxZkQg5ZjS2HtVptfmoLnz9qbww5V-qQmO9d4zThcJQeVrcXeQi315wzrmh8ZBAQyN0My9bJXXqU60">
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
                    <img alt="Museum" class="w-16 h-16 rounded-2xl object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzKIdEGfJJ7bqjdQC5FJmv9ToVMbhfquH-rYYCLSVx0kXXOnTdeHob5kkwADHyVckso7gpv3gs3YWlmlFzPmFDEV2XvBP6znk211TDR07q4mVAK4M0VDXdcIGAt_mb4jtxBbTNn85M0jTYm7gO1h6XZL1J3Dus4gBM2FkyYaVKSIP2zm5qUw2MOy1pZCzfVQZPZLIHmTnK_W27hEc8wX6ZswRM7fwDWqQFRKvTWphH1tQv_TIksL3Vwg0hqpas2Uwnvj-ksjVGuBE">
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
                    <img alt="Sports Complex" class="w-16 h-16 rounded-2xl object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJtkuBBQhuNmwjD8YQ3q1wcjrt_kTfrhpnJB8vnOFrMU3oyzFcn_vCN29TYrHmpsQ8T0IkNlv8GKRY5JHN6YQQuzOOe50nUWzrydZXJzgIszH5JafvkI4qgRSaCEd9rh9y_jC-nCTACy5jAoC2AAb5f5ykshRTvzkpBNI46IikTBcX5wL10lyiU9I0EzPK6ZHDMr1lEwZIE5z4ooNBwbgsmyZa7SO0oSp9LL8aUwyghpwgL3Y08hNd1cwSOCUnM2bBTn5g5mF8QG8">
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
            <button
                class="w-full mt-2 text-primary font-label-sm text-label-sm font-bold py-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant">
                مشاهده بیشتر
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