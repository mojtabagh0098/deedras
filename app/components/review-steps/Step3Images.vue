<template>
    <div class="p-6 flex flex-col gap-8" key="step3">
        <div class="flex flex-wrap justify-between gap-3 pt-6 pb-2">
            <div class="flex min-w-72 flex-col gap-2">
                <h1 class="text-[#0e111b] dark:text-white tracking-tight text-[28px] font-bold leading-tight">افزودن
                    تصاویر</h1>
                <p class="text-[#505d95] dark:text-gray-400 text-sm font-normal leading-normal">تصاویر تجربه خود را با
                    دیگران به اشتراک بگذارید تا بهتر تصمیم بگیرند.</p>
            </div>
        </div>
        <!-- Upload Area (Drag & Drop) -->
        <div class="flex flex-col">
            <div
                class="group flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#d1d5e6] dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-colors px-6 py-14 cursor-pointer relative">
                <input accept="image/png, image/jpeg"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" multiple="" type="file" />
                <div
                    class="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-[40px] fill-primary" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                        <path
                            d="M3 4V1h2v3h3v2H5v3H3V6H0V4zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2">
                        </path>
                    </svg>
                </div>
                <div class="flex max-w-[480px] flex-col items-center gap-2 pointer-events-none">
                    <p
                        class="text-[#0e111b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                        افزودن عکس
                    </p>
                    <p
                        class="text-[#505d95] dark:text-gray-400 text-sm font-normal leading-normal max-w-[480px] text-center">
                        برای بارگذاری کلیک کنید یا عکس‌ها را اینجا بکشید
                    </p>
                    <p class="text-xs text-gray-400 mt-1">فرمت‌های مجاز: JPG, PNG (حداکثر ۵ مگابایت)</p>
                </div>
                <button
                    class="pointer-events-none flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[#e8eaf3] dark:bg-gray-700 text-[#0e111b] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] group-hover:bg-primary group-hover:text-white transition-colors">
                    <span class="truncate">انتخاب فایل</span>
                </button>
            </div>
        </div>
        <!-- Preview Section -->
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <h3 class="text-[#0e111b] dark:text-white tracking-tight text-lg font-bold leading-tight">
                    پیش‌نمایش تصاویر</h3>
                <span class="text-xs text-primary font-medium cursor-pointer hover:underline">حذف همه</span>
            </div>
            <!-- Grid of uploaded images -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <!-- Image 1 -->
                <div
                    class="relative group rounded-lg overflow-hidden aspect-square border border-gray-200 dark:border-gray-700 shadow-sm">
                    <img alt="Uploaded cafe interior view"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        data-alt="Interior view of a modern cafe with wooden tables"
                        src="/img/biz/coffe-2.png" />
                    <div
                        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                            class="bg-white/20 hover:bg-red-500 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
                            <span class="material-symbols-outlined text-sm">delete</span>
                        </button>
                        <button
                            class="bg-white/20 hover:bg-primary text-white p-2 rounded-full backdrop-blur-sm transition-colors">
                            <span class="material-symbols-outlined text-sm">visibility</span>
                        </button>
                    </div>
                    <div
                        class="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-[10px]">check</span>
                        آپلود شد
                    </div>
                </div>
                <!-- Image 2 -->
                <div
                    class="relative group rounded-lg overflow-hidden aspect-square border border-gray-200 dark:border-gray-700 shadow-sm">
                    <img alt="Close up of coffee cup and pastry"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        data-alt="Close up shot of a latte and a croissant on a table"
                        src="/img/biz/coffe.png" />
                    <div
                        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                            class="bg-white/20 hover:bg-red-500 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
                            <span class="material-symbols-outlined text-sm">delete</span>
                        </button>
                        <button
                            class="bg-white/20 hover:bg-primary text-white p-2 rounded-full backdrop-blur-sm transition-colors">
                            <span class="material-symbols-outlined text-sm">visibility</span>
                        </button>
                    </div>
                    <div
                        class="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-[10px]">check</span>
                        آپلود شد
                    </div>
                </div>
                <!-- Image 3 (Loading State) -->
                <div
                    class="relative rounded-lg overflow-hidden aspect-square border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                    <div class="flex flex-col items-center gap-2">
                        <svg class="fill-primary animate-spin w-[16px]" focusable="false" aria-hidden="true"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z">
                            </path>
                        </svg>
                        <span class="text-xs text-gray-500">در حال آپلود...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>