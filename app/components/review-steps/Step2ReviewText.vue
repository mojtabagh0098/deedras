<template>
    <div class="" key="step2">
        <div class="bg-white dark:bg-[#1a1d2d] p-6 sm:p-8 flex flex-col gap-8">
            <!-- Heading -->
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl sm:text-3xl font-bold text-[#0e111b] dark:text-white leading-tight">
                    تجربه خود را بنویسید</h1>
                <p class="text-[#505d95] dark:text-gray-400 text-base font-normal">لطفا تجربه خود را با
                    جزئیات شرح دهید. نظرات دقیق به دیگران کمک بیشتری می‌کند.</p>
            </div>
            <!-- Review Text Area -->
            <div class="flex flex-col gap-3">
                <label class="text-[#0e111b] dark:text-gray-200 text-base font-medium flex items-center gap-2"
                    for="review-text">
                    <svg class="w-[20px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z">
                        </path>
                    </svg>
                    متن نظر
                </label>
                <div class="relative group">
                    <textarea
                        class="w-full min-h-[200px] resize-y rounded-lg border border-[#d1d5e6] dark:border-gray-600 bg-background-light dark:bg-[#111421] text-[#0e111b] dark:text-white p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-[#505d95] dark:placeholder:text-gray-500"
                        id="review-text"
                        placeholder="نظر خود را بنویسید... نکات مثبت و منفی، کیفیت سرویس و رفتار پرسنل را شرح دهید."></textarea>
                    <div
                        class="absolute bottom-3 left-3 text-xs text-[#505d95] dark:text-gray-500 bg-background-light dark:bg-[#111421] px-2 rounded">
                        حداقل ۲۰ کاراکتر
                    </div>
                </div>
            </div>
            <!-- Tag Selection -->
            <div class="flex flex-col gap-4">
                <div class="flex items-center justify-between">
                    <h3 class="text-lg font-bold text-[#0e111b] dark:text-white flex items-center gap-2">
                        <svg class="w-[20px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8">
                            </path>
                        </svg>
                        انتخاب برچسب‌ها
                    </h3>
                    <span
                        class="text-xs text-[#505d95] dark:text-gray-400 bg-[#f0f2f5] dark:bg-gray-800 px-2 py-1 rounded">اختیاری</span>
                </div>
                <p class="text-sm text-[#505d95] dark:text-gray-400">نقاط قوت و ضعف این کسب و کار را انتخاب
                    کنید:</p>
                <div class="flex flex-wrap gap-3">
                    <!-- Selected Tag Example -->
                    <button
                        class="group flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
                        <svg class="w-[18px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M1 21h4V9H1zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73z">
                            </path>
                        </svg>
                        <span class="text-sm font-medium">برخورد خوب</span>
                    </button>
                    <!-- Unselected Tags -->
                    <button
                        class="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#252836] border border-[#d1d5e6] dark:border-gray-600 text-[#505d95] dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-200">
                        <svg class="w-[18px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z">
                            </path>
                        </svg>
                        <span class="text-sm font-medium">کیفیت بالا</span>
                    </button>
                    <button
                        class="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#252836] border border-[#d1d5e6] dark:border-gray-600 text-[#505d95] dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-200">
                        <svg class="w-[18px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4">
                            </path>
                        </svg>
                        <span class="text-sm font-medium">قیمت مناسب</span>
                    </button>
                    <button
                        class="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#252836] border border-[#d1d5e6] dark:border-gray-600 text-[#505d95] dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-200">
                        <svg class="w-[18px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5m3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z">
                            </path>
                        </svg>
                        <span class="text-sm font-medium">تمیزی محیط</span>
                    </button>
                    <button
                        class="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#252836] border border-[#d1d5e6] dark:border-gray-600 text-[#505d95] dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-200">
                        <svg class="w-[18px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8">
                            </path>
                        </svg>
                        <span class="text-sm font-medium">سرویس دهی سریع</span>
                    </button>
                    <button
                        class="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#252836] border border-[#d1d5e6] dark:border-gray-600 text-[#505d95] dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-200">
                        <svg class="w-[18px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6m.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2">
                            </path>
                        </svg>
                        <span class="text-sm font-medium">جای پارک</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>