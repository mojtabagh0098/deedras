<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="modelValue" class="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4"
                dir="rtl">

                <!-- Backdrop -->
                <div class="absolute inset-0 bg-on-background/60 backdrop-blur-sm" @click="closeModal"></div>

                <!-- Modal Content -->
                <Transition name="slide-up">
                    <div v-if="modelValue"
                        class="relative w-full max-w-[560px] z-10 transition-all max-h-[90vh] overflow-y-auto hide-scrollbar">

                        <!-- Step 1 (Variant 1) -->
                        <div v-if="currentStep === 1"
                            class="bg-surface-container-lowest w-full rounded-t-3xl md:rounded-2xl shadow-xl flex flex-col overflow-hidden">
                            <header
                                class="flex justify-between items-center p-4 border-b border-surface-container-high bg-surface-container-lowest z-10 shrink-0">
                                <div class="flex items-center gap-3 w-1/3">
                                    <img alt="سارا محمدی"
                                        class="w-10 h-10 rounded-full object-cover border border-outline-variant/30"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsOrKYg_4ba5A2yjmO7IGRRIQSadvCY0UE31RGD3pKh82LEHzSKKfyLphxKBXaqQHJKrtVmspIZ_8Ed-FhLV5IJZupJDECg9ovfP1snomycUwgzrNTAGzLngDnBZ8YunCLc9ukhxLscJqXLUL91nfg0GA08kPXgz3LF-G9gSnlSQmdphHXw5ogl7SaZAnnyKV06tS4-hAH0Lq-z6MNFWfgEN3XYk3vCfEhUdQGTXfBbvGgVFes6gbQVp7kqwRWPfsFAMt0v0QxJO0">
                                    <div class="flex flex-col">
                                        <span class="text-label-md font-headline font-bold text-on-surface">سارا
                                            محمدی</span>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center gap-2 w-1/3">
                                    <div class="w-2 h-2 rounded-full bg-primary"></div>
                                    <div class="w-2 h-2 rounded-full bg-outline-variant"></div>
                                    <div class="w-2 h-2 rounded-full bg-outline-variant"></div>
                                </div>
                                <div class="flex justify-end w-1/3">
                                    <button @click="closeModal"
                                        class="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
                                        <span class="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </header>
                            <div class="p-6 space-y-6">
                                <h2 class="text-title-lg font-headline font-bold text-on-surface text-center">کافه
                                    بلک‌برن رو به دوستت توصیه می‌کنی؟</h2>
                                <div class="flex flex-col gap-3">
                                    <button @click="selectOption(1)"
                                        :class="selectedOption === 1 ? 'bg-primary-container text-white border-primary-container' : 'text-on-surface border-outline-variant hover:border-primary hover:bg-primary/5'"
                                        class="w-full p-4 rounded-xl border text-body-lg transition-all text-right flex items-center justify-between group">
                                        <span>حتماً — ارزش رفتن داره</span>
                                        <span class="material-symbols-outlined"
                                            :class="selectedOption === 1 ? 'text-white' : 'text-outline-variant group-hover:text-primary'">check_circle</span>
                                    </button>
                                    <button @click="selectOption(2)"
                                        :class="selectedOption === 2 ? 'bg-primary-container text-white border-primary-container' : 'text-on-surface border-outline-variant hover:border-primary hover:bg-primary/5'"
                                        class="w-full p-4 rounded-xl border text-body-lg transition-all text-right flex items-center justify-between group">
                                        <span>شاید — بستگی داره</span>
                                        <span class="material-symbols-outlined"
                                            :class="selectedOption === 2 ? 'text-white' : 'text-outline-variant group-hover:text-primary'">radio_button_unchecked</span>
                                    </button>
                                    <button @click="selectOption(3)"
                                        :class="selectedOption === 3 ? 'bg-primary-container text-white border-primary-container' : 'text-on-surface border-outline-variant hover:border-primary hover:bg-primary/5'"
                                        class="w-full p-4 rounded-xl border text-body-lg transition-all text-right flex items-center justify-between group">
                                        <span>نه — پیشنهاد نمی‌کنم</span>
                                        <span class="material-symbols-outlined"
                                            :class="selectedOption === 3 ? 'text-white' : 'text-outline-variant group-hover:text-primary'">radio_button_unchecked</span>
                                    </button>
                                </div>
                            </div>
                            <footer
                                class="p-4 border-t border-surface-container-high bg-surface-container-lowest z-10 shrink-0 flex justify-end">
                                <button @click="nextStep" :disabled="!selectedOption"
                                    class="bg-primary disabled:opacity-50 hover:bg-primary-container text-on-primary font-label font-bold text-label-md py-3 px-8 rounded-full shadow-sm transition-all duration-200">
                                    بعدی
                                </button>
                            </footer>
                        </div>

                        <!-- Step 2 (Variant 2) -->
                        <div v-if="currentStep === 2"
                            class="bg-surface-container-lowest w-full rounded-t-3xl md:rounded-2xl shadow-xl flex flex-col overflow-hidden">
                            <header
                                class="flex justify-between items-center p-4 border-b border-surface-container-high bg-surface-container-lowest z-10 shrink-0">
                                <div class="flex items-center gap-3 w-1/3">
                                    <img alt="سارا محمدی"
                                        class="w-10 h-10 rounded-full object-cover border border-outline-variant/30"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsOrKYg_4ba5A2yjmO7IGRRIQSadvCY0UE31RGD3pKh82LEHzSKKfyLphxKBXaqQHJKrtVmspIZ_8Ed-FhLV5IJZupJDECg9ovfP1snomycUwgzrNTAGzLngDnBZ8YunCLc9ukhxLscJqXLUL91nfg0GA08kPXgz3LF-G9gSnlSQmdphHXw5ogl7SaZAnnyKV06tS4-hAH0Lq-z6MNFWfgEN3XYk3vCfEhUdQGTXfBbvGgVFes6gbQVp7kqwRWPfsFAMt0v0QxJO0">
                                    <div class="flex flex-col">
                                        <span class="text-label-md font-headline font-bold text-on-surface">سارا
                                            محمدی</span>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center gap-2 w-1/3">
                                    <div class="w-2 h-2 rounded-full bg-outline-variant"></div>
                                    <div class="w-2 h-2 rounded-full bg-primary"></div>
                                    <div class="w-2 h-2 rounded-full bg-outline-variant"></div>
                                </div>
                                <div class="flex justify-end gap-2 w-1/3">
                                    <button @click="prevStep"
                                        class="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
                                        <span class="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                    <button @click="closeModal"
                                        class="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
                                        <span class="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </header>
                            <div class="p-6 space-y-6">
                                <div class="text-center space-y-1">
                                    <h2 class="text-title-lg font-headline font-bold text-on-surface">چی بود که این نظر
                                        رو داری؟</h2>
                                    <p class="text-body-sm text-on-surface-variant">یک یا چند مورد انتخاب کن</p>
                                </div>
                                <div class="grid grid-cols-2 gap-3">
                                    <button v-for="tag in tags" :key="tag.id" @click="toggleTag(tag.id)"
                                        :class="selectedTags.includes(tag.id) ? 'bg-primary-container text-white border-primary-container' : 'text-on-surface border-outline-variant hover:border-primary hover:bg-primary/5'"
                                        class="p-3 rounded-xl border text-label-md transition-all text-center">
                                        {{ tag.label }}
                                    </button>
                                </div>
                                <div class="space-y-1 relative">
                                    <textarea v-model="reviewText" maxlength="280"
                                        class="w-full min-h-[100px] bg-surface-container-low border border-transparent focus:border-primary/30 focus:bg-surface-container-lowest rounded-xl p-4 pb-8 text-body-md text-on-surface placeholder:text-outline outline-none transition-all duration-200 resize-y"
                                        placeholder="توضیح بیشتری داری بنویس... (اختیاری)"></textarea>
                                    <span class="absolute bottom-3 left-4 text-label-sm text-outline">{{
                                        reviewText.length }}/280</span>
                                </div>
                            </div>
                            <footer
                                class="p-4 border-t border-surface-container-high bg-surface-container-lowest z-10 shrink-0 flex justify-end">
                                <button @click="nextStep" :disabled="selectedTags.length === 0"
                                    class="bg-primary disabled:opacity-50 hover:bg-primary-container text-on-primary font-label font-bold text-label-md py-3 px-8 rounded-full shadow-sm transition-all duration-200">
                                    بعدی
                                </button>
                            </footer>
                        </div>

                        <!-- Step 3 (Variant 3) -->
                        <div v-if="currentStep === 3"
                            class="bg-surface-container-lowest w-full rounded-t-3xl md:rounded-2xl shadow-xl flex flex-col overflow-hidden">
                            <header
                                class="flex justify-between items-center p-4 border-b border-surface-container-high bg-surface-container-lowest z-10 shrink-0">
                                <div class="flex items-center gap-3 w-1/3">
                                    <img alt="سارا محمدی"
                                        class="w-10 h-10 rounded-full object-cover border border-outline-variant/30"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsOrKYg_4ba5A2yjmO7IGRRIQSadvCY0UE31RGD3pKh82LEHzSKKfyLphxKBXaqQHJKrtVmspIZ_8Ed-FhLV5IJZupJDECg9ovfP1snomycUwgzrNTAGzLngDnBZ8YunCLc9ukhxLscJqXLUL91nfg0GA08kPXgz3LF-G9gSnlSQmdphHXw5ogl7SaZAnnyKV06tS4-hAH0Lq-z6MNFWfgEN3XYk3vCfEhUdQGTXfBbvGgVFes6gbQVp7kqwRWPfsFAMt0v0QxJO0">
                                    <div class="flex flex-col">
                                        <span class="text-label-md font-headline font-bold text-on-surface">سارا
                                            محمدی</span>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center gap-2 w-1/3">
                                    <div class="w-2 h-2 rounded-full bg-outline-variant"></div>
                                    <div class="w-2 h-2 rounded-full bg-outline-variant"></div>
                                    <div class="w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                                <div class="flex justify-end gap-2 w-1/3">
                                    <button @click="prevStep"
                                        class="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
                                        <span class="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                    <button @click="closeModal"
                                        class="p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
                                        <span class="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </header>
                            <div class="p-6 space-y-6">
                                <h2 class="text-title-lg font-headline font-bold text-on-surface text-center">عکسی از
                                    این مکان داری؟</h2>
                                <div
                                    class="w-full border-2 border-dashed border-outline-variant rounded-2xl p-8 flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer bg-surface-container-lowest">
                                    <span class="material-symbols-outlined text-4xl text-outline">photo_camera</span>
                                    <p class="text-body-md text-on-surface-variant text-center">عکس اضافه کن یا از گالری
                                        انتخاب کن</p>
                                </div>
                                <div class="space-y-3">
                                    <label class="text-label-md font-bold text-on-surface block text-center">کی اینجا
                                        بودی؟</label>
                                    <div class="flex justify-center gap-2 flex-wrap">
                                        <button @click="timeframe = 'week'"
                                            :class="timeframe === 'week' ? 'bg-primary-container text-white border-primary-container' : 'text-on-surface border-outline-variant hover:border-primary hover:bg-primary/5'"
                                            class="px-4 py-2 rounded-full border text-label-sm transition-all">این
                                            هفته</button>
                                        <button @click="timeframe = 'month'"
                                            :class="timeframe === 'month' ? 'bg-primary-container text-white border-primary-container' : 'text-on-surface border-outline-variant hover:border-primary hover:bg-primary/5'"
                                            class="px-4 py-2 rounded-full border text-label-sm transition-all">این
                                            ماه</button>
                                        <button @click="timeframe = 'older'"
                                            :class="timeframe === 'older' ? 'bg-primary-container text-white border-primary-container' : 'text-on-surface border-outline-variant hover:border-primary hover:bg-primary/5'"
                                            class="px-4 py-2 rounded-full border text-label-sm transition-all">بیشتر از
                                            یک ماه پیش</button>
                                    </div>
                                </div>
                                <div class="flex items-start gap-2 bg-surface-container-low p-3 rounded-xl">
                                    <span
                                        class="material-symbols-outlined text-primary text-xl shrink-0">verified</span>
                                    <p class="text-label-sm text-on-surface-variant leading-relaxed">اگه انتخاب کنی،
                                        تجربه‌ات تیک «بازدید تأییدشده» می‌گیره</p>
                                </div>
                            </div>
                            <footer
                                class="p-4 border-t border-surface-container-high bg-surface-container-lowest z-10 shrink-0">
                                <button @click="submitExperience"
                                    class="w-full bg-primary hover:bg-primary-container text-on-primary font-label font-bold text-label-md py-3 px-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                                    انتشار تجربه
                                </button>
                            </footer>
                        </div>

                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['update:modelValue', 'submit'])

// State Management
const currentStep = ref(1)
const selectedOption = ref(null) // Step 1
const reviewText = ref('') // Step 2
const selectedTags = ref([]) // Step 2
const timeframe = ref(null) // Step 3

const tags = [
    { id: 1, label: 'کیفیت محصول' },
    { id: 2, label: 'برخورد پرسنل' },
    { id: 3, label: 'قیمت مناسب' },
    { id: 4, label: 'فضای کار با لپ‌تاپ' },
    { id: 5, label: 'سرعت سرویس‌دهی' },
    { id: 6, label: 'تنوع منو' },
]

// Methods
const selectOption = (id) => {
    selectedOption.value = id
}

const toggleTag = (id) => {
    const index = selectedTags.value.indexOf(id)
    if (index > -1) {
        selectedTags.value.splice(index, 1)
    } else {
        selectedTags.value.push(id)
    }
}

const nextStep = () => {
    if (currentStep.value < 3) currentStep.value++
}

const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--
}

const closeModal = () => {
    emit('update:modelValue', false)
    // Reset form after close animation
    setTimeout(() => {
        currentStep.value = 1
        selectedOption.value = null
        reviewText.value = ''
        selectedTags.value = []
        timeframe.value = null
    }, 300)
}

const submitExperience = () => {
    // Emit final payload to parent
    emit('submit', {
        recommendation: selectedOption.value,
        tags: selectedTags.value,
        review: reviewText.value,
        timeframe: timeframe.value
    })
    closeModal()
}
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Slide Up for Mobile Bottom Sheet effect */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
}

@media (min-width: 768px) {

    .slide-up-enter-from,
    .slide-up-leave-to {
        transform: scale(0.95);
        opacity: 0;
    }
}
</style>