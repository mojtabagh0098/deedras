<template>
    <div class="p-8" key="step1">
        <!-- Business Context Card -->
        <div
            class="flex items-center gap-4 p-4 mb-10 rounded-xl bg-[#f8f9fb] dark:bg-white/5 border border-transparent hover:border-primary/20 transition-all">
            <div class="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center shadow-sm"
                data-alt="تصویر لوگوی کافه با طرح مدرن قهوه" style="background-image: url('/img/unnamed.png');">
            </div>
            <div class="flex-1 min-w-0">
                <h3 class="text-lg font-bold text-text-main dark:text-white truncate">کافه لمیز</h3>
                <div class="flex items-center gap-1 text-sm text-text-sub mt-1">
                    <svg class="w-[16px] fill-truncate" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5">
                        </path>
                    </svg>
                    <span class="text-truncate font-medium">تهران، خیابان ولیعصر، بالاتر از پارک ساعی</span>
                </div>
            </div>
        </div>
        <!-- Rating Section -->
        <div class="flex flex-col items-center justify-center gap-6 py-4">
            <h2 class="text-xl font-bold text-text-main dark:text-white text-center">چقدر از تجربه خود راضی
                بودید؟</h2>
            <!-- Interactive Stars -->
            <!-- Note: Flex-row-reverse allows CSS sibling selector ~ to select "previous" stars visually -->
            <div class="star-rating group">
                <!-- Star 5 -->
                <button
                    class="star p-2 text-gray-300 dark:text-gray-600 transition-colors duration-150 focus:outline-none">
                    <svg class="w-[48px] fill-accent"
                        style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                </button>
                <!-- Star 4 -->
                <button
                    class="star p-2 text-gray-300 dark:text-gray-600 transition-colors duration-150 focus:outline-none">
                    <svg class="w-[48px] fill-accent"
                        style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                </button>
                <!-- Star 3 -->
                <button
                    class="star p-2 text-gray-300 dark:text-gray-600 transition-colors duration-150 focus:outline-none">
                    <svg class="w-[48px] fill-accent"
                        style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                </button>
                <!-- Star 2 -->
                <button
                    class="star p-2 text-gray-300 dark:text-gray-600 transition-colors duration-150 focus:outline-none">
                    <svg class="w-[48px] fill-accent"
                        style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                </button>
                <!-- Star 1 -->
                <button class="star p-2 text-accent transition-colors duration-150 focus:outline-none">
                    <svg class="w-[48px] fill-accent"
                        style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                </button>
            </div>
            <!-- Rating Label Feedback -->
            <div class="h-8 flex items-center justify-center">
                <span class="text-accent font-bold text-lg animate-pulse">خیلی بد</span>
            </div>
        </div>
        <!-- Criteria (Optional Detail) -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Sub-rating 1 -->
            <div
                class="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                <span class="text-sm font-medium text-text-main dark:text-white">کیفیت سرویس‌دهی</span>
                <div class="flex text-gray-300 dark:text-gray-600">
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                </div>
            </div>
            <!-- Sub-rating 2 -->
            <div
                class="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                <span class="text-sm font-medium text-text-main dark:text-white">برخورد پرسنل</span>
                <div class="flex text-gray-300 dark:text-gray-600">
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                    <svg class="w-[20px] cursor-pointer hover:fill-accent fill-gray-300" focusable="false"
                        aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>