<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
    modelValue: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])
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
const showPollBilder = ref(false)
const showDetailedRating = ref(false)

// ★★★ جدید: Logic امتیاز و چیپ‌ها ★★★
const selectedRating = ref(3) // مقدار پیش‌فرض

const positiveChips = [
    'کیفیت عالی', 'قیمت مناسب', 'محیط دلنشین',
    'برخورد عالی کارکنان', 'سرعت خدمات', 'تمیزی', 'دسترسی مناسب'
]

const negativeChips = [
    'قیمت بالا', 'کیفیت پایین', 'رفتار نامناسب',
    'شلوغی بیش از حد', 'نظافت ضعیف', 'تاخیر در خدمات', 'دسترسی ضعیف'
]

const mixedChips = [
    'کیفیت متوسط', 'قیمت نسبتاً بالا', 'محیط معمولی', 'نیاز به بهبود'
]

const chipsTitle = computed(() => {
    if (selectedRating.value >= 4) return 'چه چیزی را بیشتر دوست داشتید؟'
    if (selectedRating.value <= 2) return 'بزرگ‌ترین مشکل چه بود؟'
    return 'چه مواردی قابل توجه بود؟'
})

const currentChips = computed(() => {
    if (selectedRating.value >= 4) return positiveChips
    if (selectedRating.value <= 2) return negativeChips
    return mixedChips
})

// تابع انتخاب ستاره
const selectRating = (value) => {
    selectedRating.value = value
}

// اختیاری: اگر بخوای چیپ‌ها هم قابل انتخاب باشن
const selectedChips = ref([])

const toggleChip = (chip) => {
    if (selectedChips.value.includes(chip)) {
        selectedChips.value = selectedChips.value.filter(c => c !== chip)
    } else {
        selectedChips.value.push(chip)
    }
}

// بستن مودال
const closeModal = () => emit('update:modelValue', false)

watch(() => props.modelValue, (val) => {
    if (process.client) {
        document.body.style.overflow = val ? 'hidden' : ''
    }
    if (val) {
        // ریست کردن هنگام باز شدن مودال
        selectedRating.value = 3
        selectedChips.value = []
    }
})

onUnmounted(() => {
    if (process.client) document.body.style.overflow = ''
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
                        class="bg-white dark:bg-[#1e1e2d] rounded-xl px-[24px] py-[20px] shadow-lg border border-gray-100 dark:border-[#2d2d42] overflow-hidden flex flex-col max-h-[90vh]">
                        <!-- Header -->
                        <header class="flex justify-between items-center p-gutter shrink-0">
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
                            <div class="flex flex-col items-center">
                                <label class="text-title-sm font-bold text-on-surface mb-3">امتیاز شما</label>
                                <div class="flex gap-1 flex-row-reverse" id="star-rating">
                                    <button v-for="n in 5" :key="n" @click="selectRating(n)" class="p-1 transition-all hover:scale-110" :class="selectedRating >= n ? 'fill-primary-container' : 'text-outline-variant'">
                                        <span class="material-symbols-outlined text-5xl transition-all"
                                            :style="{ 'font-variation-settings': selectedRating >= n ? `'FILL' 1` : `'FILL' 0` }">
                                            <svg v-if="selectedRating >= n" xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="42px"><path xmlns="http://www.w3.org/2000/svg" d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"></path></svg>
                                            <svg v-if="selectedRating < n" xmlns="http://www.w3.org/2000/svg" height="42px"
                                                viewBox="0 -960 960 1080" width="42px">
                                                <path
                                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <!-- Dynamic Chips -->
                            <div class="space-y-3">
                                <label class="text-label-md font-bold text-on-surface block"
                                    :class="{ 'opacity-50': !selectedRating }">
                                    {{ chipsTitle }}
                                </label>
                                <div class="flex flex-wrap gap-2">
                                    <button v-for="chip in currentChips" :key="chip" @click="toggleChip(chip)"
                                        class="px-4 py-2.5 rounded-full text-sm transition-all border"
                                        :class="selectedChips.includes(chip)
                                            ? 'bg-primary text-white border-primary'
                                            : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-low hover:border-primary/30'">
                                        {{ chip }}
                                    </button>
                                </div>
                            </div>
                            <!-- Textarea -->
                            <textarea
                                class="w-full min-h-[150px] resize-none border-2 border-gray-200 rounded-lg outline-none focus:ring-0 font-body-lg text-body-lg text-on-surface placeholder:text-outline p-3 bg-transparent"
                                placeholder="تجربه واقعی‌ات رو با جزئیات بنویس. مثلاً چطور بود غذا، سرویس، قیمت، جو و ..."></textarea>
                            <!-- Dynamic Area Container -->
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
                        </main>
                        <!-- Footer -->
                        <footer class="p-gutter border-t border-light flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-faint pt-2 mt-2 shrink-0">
                            <!-- Quick Actions (Left in visual RTL) -->
                            <div
                                class="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 hide-scrollbar">
                                <button @click="showImageUploader = !showImageUploader"
                                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant group">
                                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                            width="24px" fill="#1f1f1f">
                                            <path
                                                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
                                        </svg>
                                    </span>
                                    <span class="font-label-md text-label-md hidden md:inline">افزودن تصویر</span>
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