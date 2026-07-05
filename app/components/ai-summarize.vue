<template>
    <div class="mt-6 pt-6 border-t border-border-light bg-surface/50 rounded-xl p-5 border border-primary-container/10">
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
                <div
                    class="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                    <span class="material-symbols-outlined text-[18px]">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px"
                            viewBox="0 0 24 24" width="18px">
                            <g>
                                <rect fill="none" height="24" width="24" x="0"></rect>
                            </g>
                            <g>
                                <g>
                                    <polygon points="19,9 20.25,6.25 23,5 20.25,3.75 19,1 17.75,3.75 15,5 17.75,6.25">
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
            <div class="flex items-center gap-1 text-primary text-xs font-bold bg-primary/5 px-2 py-1 rounded">
                <span class="material-symbols-outlined text-[14px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px">
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                            <path
                                d="M444-288h72v-156h156v-72H516v-156h-72v156H288v72h156v156Zm36.28 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                        </svg>
                    </span>
                    فضای کاری عالی
                </span>
                <span
                    class="inline-flex items-center gap-1.5 bg-surface-container-lowest border border-border-light shadow-sm text-on-surface-variant text-sm px-3 py-1.5 rounded-full">
                    <span class="material-symbols-outlined fill-green-600 text-[18px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                            <path
                                d="M444-288h72v-156h156v-72H516v-156h-72v156H288v72h156v156Zm36.28 192Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                        </svg>
                    </span>
                    کیفیت بالای قهوه
                </span>
                <span
                    class="inline-flex items-center gap-1.5 bg-surface-container-lowest border border-border-light shadow-sm text-on-surface-variant text-sm px-3 py-1.5 rounded-full">
                    <span class="material-symbols-outlined fill-red-500 text-[18px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
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
</template>