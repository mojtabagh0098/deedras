<script setup>
// import map from '~/assets/img/map-city.png'
const emit = defineEmits(['update:step']);
async function submit() {
    emit('update:step', 3)
}
async function back() {
    emit('update:step', 1)
}
</script>
<template>
    <div
        class="bg-white dark:bg-background-dark/40 border border-gray-100 dark:border-white/5 rounded-xl overflow-hidden shadow-sm">
        <!-- Section: Map -->
        <div class="p-6">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-[#121117] dark:text-white text-lg font-bold leading-tight">انتخاب محل روی نقشه</h3>
                <span class="text-xs text-primary bg-primary/10 px-2 py-1 rounded">نشانگر را جابجا کنید</span>
            </div>
            <div
                class="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 group">
                <div class="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                    data-alt="Interactive map centered on Tehran city" data-location="Tehran, Iran"
                    style='background-image: url("./img/map-city.png");'>
                </div>
                <!-- UI Overlay on Map -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span class="material-symbols-outlined text-primary text-5xl drop-shadow-lg"
                        style="font-variation-settings: 'FILL' 1">location_on</span>
                </div>
                <div class="absolute bottom-4 right-4 flex flex-col gap-2">
                    <button
                        class="bg-white dark:bg-gray-800 p-2 rounded shadow-md text-gray-700 dark:text-white hover:bg-gray-50"><span
                            class="material-symbols-outlined">add</span></button>
                    <button
                        class="bg-white dark:bg-gray-800 p-2 rounded shadow-md text-gray-700 dark:text-white hover:bg-gray-50"><span
                            class="material-symbols-outlined">remove</span></button>
                </div>
            </div>
        </div>
        <hr class="border-gray-100 dark:border-white/5" />
        <!-- Section: Contact Details -->
        <div class="p-6">
            <h3 class="text-[#121117] dark:text-white text-lg font-bold leading-tight mb-6">جزئیات آدرس و تماس</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Address Field -->
                <div class="md:col-span-2 flex flex-col gap-2">
                    <label class="text-sm font-semibold text-[#121117] dark:text-gray-200">آدرس دقیق</label>
                    <div class="relative">
                        <span class="absolute right-3 top-3 material-symbols-outlined text-gray-400">map</span>
                        <textarea
                            class="w-full pr-10 rounded-lg border-gray-300 dark:border-white/10 dark:bg-background-dark dark:text-white focus:ring-primary focus:border-primary transition-all"
                            placeholder="خیابان، کوچه، پلاک و واحد..." rows="2"></textarea>
                    </div>
                </div>
                <!-- Phone Field -->
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-[#121117] dark:text-gray-200">شماره تماس</label>
                    <div class="relative">
                        <span
                            class="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">call</span>
                        <input
                            class="w-full pr-10 rounded-lg border-gray-300 dark:border-white/10 dark:bg-background-dark dark:text-white focus:ring-primary focus:border-primary transition-all text-left"
                            dir="ltr" placeholder="021-XXXXXXXX" type="tel" />
                    </div>
                </div>
                <!-- Website Field -->
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-[#121117] dark:text-gray-200">وبسایت (اختیاری)</label>
                    <div class="relative">
                        <span
                            class="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">language</span>
                        <input
                            class="w-full pr-10 rounded-lg border-gray-300 dark:border-white/10 dark:bg-background-dark dark:text-white focus:ring-primary focus:border-primary transition-all text-left font-display"
                            dir="ltr" placeholder="www.example.com" type="url" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Form Footer Actions -->
        <div class="bg-gray-50 dark:bg-white/5 px-6 py-4 flex items-center justify-between">
            <button
                @click="back()"
                class="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                <span class="material-symbols-outlined">chevron_right</span>
                قبلی
            </button>
            <button
                @click="submit()"
                class="flex items-center gap-2 px-8 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition-all shadow-md shadow-primary/20">
                بعدی
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
        </div>
    </div>
</template>