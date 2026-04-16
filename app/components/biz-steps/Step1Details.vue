<script setup>
const emit = defineEmits(['update:step', 'error']);
async function submit() {
    emit('update:step', 2)
}
</script>
<template>
    <div
        class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <!-- HeadlineText -->
        <div class="pt-8 pb-4 border-b border-gray-50 dark:border-gray-800">
            <h2 class="text-2xl font-bold text-center">افزودن کسب و کار جدید</h2>
            <p class="text-center text-gray-500 dark:text-gray-400 mt-2">لطفاً اطلاعات پایه کسب و کار خود را وارد کنید
            </p>
        </div>
        <div class="p-8 flex flex-col gap-8">
            <!-- TextField: Business Name -->
            <div class="flex flex-col gap-2">
                <label class="text-[#111217] dark:text-gray-200 text-base font-semibold">نام کسب و کار</label>
                <input
                    class="form-input w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111217] dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 px-4 text-base transition-all placeholder:text-gray-400"
                    placeholder="مثلاً: رستوران دیدرس" type="text" />
            </div>
            <!-- TextField/Select: Category -->
            <div class="flex flex-col gap-2">
                <label class="text-[#111217] dark:text-gray-200 text-base font-semibold">دسته‌بندی</label>
                <div class="relative">
                    <select
                        class="form-select w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#111217] dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 px-4 text-base appearance-none transition-all">
                        <option disabled="" selected="" value="">انتخاب دسته‌بندی...</option>
                        <option value="restaurant">رستوران و کافه</option>
                        <option value="shopping">خرید و فروشگاه</option>
                        <option value="medical">پزشکی و سلامت</option>
                        <option value="service">خدمات عمومی</option>
                        <option value="education">آموزش</option>
                    </select>
                    <span
                        class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                </div>
            </div>
            <!-- Custom Image Upload Component -->
            <div class="flex flex-col gap-2">
                <label class="text-[#111217] dark:text-gray-200 text-base font-semibold">تصویر اصلی کسب و کار</label>
                <div
                    class="group relative flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-10 hover:border-primary dark:hover:border-primary bg-gray-50 dark:bg-gray-800/50 transition-colors cursor-pointer">
                    <input class="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                    <div class="bg-primary/10 text-primary rounded-full p-4 mb-4">
                        <span class="material-symbols-outlined text-4xl">add_a_photo</span>
                    </div>
                    <p class="text-base font-bold text-gray-700 dark:text-gray-200">برای بارگذاری تصویر کلیک کنید</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">فرمت‌های JPG یا PNG (حداکثر ۵ مگابایت)</p>
                </div>
            </div>
            <!-- Action Buttons -->
            <div class="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                <button
                    class="text-gray-500 dark:text-gray-400 font-bold hover:text-gray-700 dark:hover:text-gray-200 px-6 h-14 transition-colors">
                    انصراف
                </button>
                <button
                    @click="submit()"
                    class="bg-primary text-white px-10 h-14 rounded-lg font-bold text-lg hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                    مرحله بعدی
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>
            </div>
        </div>
    </div>
</template>