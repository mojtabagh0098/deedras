<script setup>
const selectedLocation = ref({
    id: null,           // شناسه مکان (از دیتابیس)
    name: '',           // نام مکان (مثلاً "کافه ونوس")
    category: '',       // دسته‌بندی (کافه، رستوران، کلینیک و ...)
    address: '',        // آدرس کوتاه
    fullAddress: '',    // آدرس کامل (اختیاری)
    rating: null,       // امتیاز میانگین
    lat: null,          // عرض جغرافیایی
    lng: null,          // طول جغرافیایی
    placeType: 'business' // business | public_place | service
})
const isRecommended = ref(false)
const showImageUploader = ref(false)
const openAddNewPlaceModal = () => {
    // اینجا مودال افزودن مکان جدید را باز کن
    console.log('باز کردن مودال افزودن مکان جدید...')
    // مثلاً:
    // showNewPlaceModal.value = true
}
const showDetailedRating = ref(false)
watchEffect(() => {
    if (process.client) { document.body.style.overflow = '' }
})
const props = defineProps({
    modelValue: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue'])
const closeModal = () => { emit('update:modelValue', false) }
watch(() => props.modelValue, (val) => {
    if (process.client) { document.body.style.overflow = val ? 'hidden' : '' }
})
onUnmounted(() => {
    if (process.client) { document.body.style.overflow = '' }
})
</script>
<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="modelValue"
                class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                @click.self="closeModal">
                <div class="relative z-10 w-full max-w-2xl flex flex-col animate-in zoom-in-95 duration-300"
                    @click.stop>
                    <div
                        class="bg-white dark:bg-[#1e1e2d] rounded-xl px-[24px] py-[20px] shadow-lg border border-gray-100 dark:border-[#2d2d42] overflow-hidden">
                        <!-- Header -->
                        <header class="flex justify-between items-center p-gutter">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-12 h-12 rounded-full overflow-hidden border border-light bg-surface-container">
                                    <img alt="سارا محمدی" class="w-full h-full object-cover"
                                        data-alt="A close up portrait of a professional young woman with dark hair, smiling warmly in a bright, modern office setting with soft natural light and a clean white background."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaQntrHyZ50OVL_ZuSShXIYWpEngocvWnOeSTgARi8ZVsmI4zp9_uSjaPnj232QxpLofgtteCcSqEU26-ei9xqTwyeTw9yCU5y1Do--XHEzR6vcjDTL6-JyAp3Bgfl4sM47KHCgpEvNnMzYid10hUmFKkdwdTm_BPWII_pYwguEeNj6psBUR-Q6xB5B_e-WUx7fvvIIMlxowSUtHMgQGHunaO0kiOHW4NFUkUmim6i6DzZ0-ztgxT0ZT0RChwpofIjH-EQVBnyuBE">
                                </div>
                                <div>
                                    <h2 class="font-body-lg text-body-lg text-on-surface font-semibold">سارا محمدی</h2>
                                    <button
                                        class="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md mt-1 hover:bg-surface-container-low px-2 py-1 rounded-DEFAULT transition-colors">
                                        <span class="material-symbols-outlined text-[16px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                <path
                                                    d="M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM440-162v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
                                            </svg>
                                        </span>
                                        عمومی
                                        <span class="material-symbols-outlined text-[16px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <button aria-label="بستن" @click="closeModal"
                                class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant">
                                <span class="material-symbols-outlined">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                        width="24px" fill="#1f1f1f">
                                        <path
                                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                    </svg>
                                </span>
                            </button>
                        </header>
                        <!-- Main Content (Scrollable) -->
                        <main class="flex-1 overflow-y-auto p-gutter flex flex-col gap-4">
                            <div class="mt-2" id="location-container">
                                <!-- Initial State: Add Location Link -->
                                <ReviewStepsLocationSearch v-model="selectedLocation"
                                    @addNewPlace="openNewPlaceModal" />
                            </div>
                            <!-- Textarea -->
                            <textarea
                                class="w-full min-h-[150px] resize-none border-2 border-gray-200 rounded-lg outline-none focus:ring-0 font-body-lg text-body-lg text-on-surface placeholder:text-outline p-3 bg-transparent"
                                placeholder="تجربه واقعی‌ات رو با جزئیات بنویس. مثلاً چطور بود غذا، سرویس، قیمت، جو و ..."></textarea>
                            <!-- Dynamic Area Container -->
                            <!-- Emotional Rating Section -->
                            <div class="mt-6 flex flex-col gap-4">
                                <h3 class="font-headline-md text-headline-md font-bold text-on-surface text-center">
                                    حس کلی تجربه‌ات چطور بود؟
                                </h3>
                                <div class="flex justify-center gap-4 items-center">
                                    <div class="flex flex-col items-center group cursor-pointer">
                                        <div
                                            class="w-12 h-12 flex items-center justify-center text-3xl rounded-full hover:bg-surface-container-high transition-all transform hover:scale-110">
                                            😡
                                        </div>
                                        <span
                                            class="opacity-0 group-hover:opacity-100 transition-opacity font-label-md text-label-md text-on-surface-variant mt-1">خیلی
                                            بد</span>
                                    </div>
                                    <div class="flex flex-col items-center group cursor-pointer">
                                        <div
                                            class="w-12 h-12 flex items-center justify-center text-3xl rounded-full hover:bg-surface-container-high transition-all transform hover:scale-110">
                                            😕
                                        </div>
                                        <span
                                            class="opacity-0 group-hover:opacity-100 transition-opacity font-label-md text-label-md text-on-surface-variant mt-1">بد</span>
                                    </div>
                                    <div class="flex flex-col items-center group cursor-pointer">
                                        <div
                                            class="w-12 h-12 flex items-center justify-center text-3xl rounded-full hover:bg-surface-container-high transition-all transform hover:scale-110">
                                            😐
                                        </div>
                                        <span
                                            class="opacity-0 group-hover:opacity-100 transition-opacity font-label-md text-label-md text-on-surface-variant mt-1">معمولی</span>
                                    </div>
                                    <div class="flex flex-col items-center group cursor-pointer">
                                        <div
                                            class="w-12 h-12 flex items-center justify-center text-3xl rounded-full hover:bg-surface-container-high transition-all transform hover:scale-110">
                                            🙂
                                        </div>
                                        <span
                                            class="opacity-0 group-hover:opacity-100 transition-opacity font-label-md text-label-md text-on-surface-variant mt-1">خوب</span>
                                    </div>
                                    <div class="flex flex-col items-center group cursor-pointer">
                                        <div
                                            class="w-12 h-12 flex items-center justify-center text-3xl rounded-full hover:bg-surface-container-high transition-all transform hover:scale-110">
                                            😍
                                        </div>
                                        <span
                                            class="opacity-0 group-hover:opacity-100 transition-opacity font-label-md text-label-md text-on-surface-variant mt-1">عالی</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Advanced Ratings Section (Hidden by default) -->
                            <transition name="slide">
                                <div v-if="showDetailedRating"
                                    class="mt-6 bg-surface-container-low p-4 rounded-xl border border-light space-y-4"
                                    id="advanced-ratings-section">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div class="flex items-center justify-between">
                                            <span class="font-body-md text-body-md text-on-surface">کیفیت</span>
                                            <div class="flex gap-0.5 text-tertiary-fixed-dim">
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="font-body-md text-body-md text-on-surface">برخورد</span>
                                            <div class="flex gap-0.5 text-tertiary-fixed-dim">
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="font-body-md text-body-md text-on-surface">قیمت</span>
                                            <div class="flex gap-0.5 text-tertiary-fixed-dim">
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="font-body-md text-body-md text-on-surface">محیط</span>
                                            <div class="flex gap-0.5 text-tertiary-fixed-dim">
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                                <span class="material-symbols-outlined text-[18px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                                        <path
                                                            d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                            <!-- بخش پیشنهاد کردن -->
                            <ReviewStepsRecommendation recommendation="true"></ReviewStepsRecommendation>
                            <ReviewStepsImageUploader v-if="showImageUploader" />
                            <!-- <ImageUploader></ImageUploader> -->
                        </main>
                        <!-- Footer -->
                        <footer
                            class="p-gutter border-t border-light flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-faint pt-2 mt-2">
                            <!-- Quick Actions (Left in visual RTL) -->
                            <div
                                class="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
                                <button
                                    @click="showImageUploader = !showImageUploader"
                                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant group">
                                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                            width="24px" fill="#1f1f1f">
                                            <path
                                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
                                        </svg>
                                    </span>
                                    <span class="font-label-md text-label-md hidden md:inline">تصویر</span>
                                </button>
                                <button
                                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant group">
                                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                            width="24px" fill="#1f1f1f">
                                            <path
                                                d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z" />
                                        </svg>
                                    </span>
                                    <span class="font-label-md text-label-md hidden md:inline">نظرسنجی</span>
                                </button>
                                <button
                                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant group border border-dashed border-outline-variant"
                                    @click="showDetailedRating = !showDetailedRating">
                                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">
                                        <svg data-v-0899dcec="" xmlns="http://www.w3.org/2000/svg" height="24px"
                                            viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                                            <path data-v-0899dcec=""
                                                d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="font-label-md text-label-md hidden md:inline">امتیازدهی دقیق</span>
                                </button>
                            </div>
                            <!-- Primary Action (Right in visual RTL) -->
                            <button
                                class="w-full sm:w-auto bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-body-md text-body-md font-semibold hover:bg-primary transition-colors shadow-sm whitespace-nowrap">
                                انتشار تجربه
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: all .25s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(.96);
}
</style>