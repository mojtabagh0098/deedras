<script setup>
import { ref } from "vue";
import Step1Rating from '~/components/review-steps/Step1Rating.vue'
import Step2ReviewText from '~/components/review-steps/Step2ReviewText.vue'
import Step3Images from '~/components/review-steps/Step3Images.vue'

const step = ref(1);
const currentStepComponent = computed(() => {
  if (step.value === 1) return Step1Rating
  if (step.value === 2) return Step2ReviewText
  if (step.value === 3) return Step3Images
  return null // یا می‌تونی یه کامپوننت خطا بذاری
})

// برای دکمه‌های بعدی/قبلی
function nextStep() {
  if (step.value < 3) step.value++
}

function prevStep() {
  if (step.value > 1) step.value--
}
</script>
<template>
    <main class="flex-grow flex items-center justify-center py-10 px-4">
        <div class="w-full max-w-2xl">
            <!-- Breadcrumbs / Back -->
            <div class="mb-6 flex items-center gap-2 text-sm text-text-sub">
                <a class="flex items-center hover:text-primary transition-colors" href="#">
                    <svg class="w-[18px] ml-1" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
                    </svg>

                    بازگشت به صفحه کسب‌وکار
                </a>
            </div>
            <!-- Card Container -->
            <div
                class="bg-white dark:bg-[#1e2330] rounded-2xl shadow-sm border border-[#e8eaf3] dark:border-white/5 overflow-hidden">
                <!-- Progress Header -->
                <div
                    class="border-b border-[#e8eaf3] dark:border-white/5 px-8 py-6 bg-[#fafafa]/50 dark:bg-white/[0.02]">
                    <div class="flex justify-between items-end mb-2">
                        <div>
                            <h1 class="text-2xl font-bold text-text-main dark:text-white">ثبت دیدگاه جدید</h1>
                            <p class="text-text-sub mt-1 text-sm">نظر شما به دیگران کمک می‌کند انتخاب بهتری داشته باشند.
                            </p>
                        </div>
                        <div class="text-right flex flex-col items-end">
                            <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded mb-1">گام
                                {{ step }} از
                                ۳</span>
                            <span class="text-sm font-medium text-text-main dark:text-white">امتیازدهی</span>
                        </div>
                    </div>
                    <!-- Progress Bar -->
                    <div class="h-1.5 w-full bg-gray-100 dark:bg-white/10 rounded-full mt-4 overflow-hidden">
                        <div class="h-full bg-primary rounded-full" :class="`w-${step}/3`"></div>
                    </div>
                </div>
                <Transition
                    name="step"
                    mode="out-in"
                    appear
                >
                    <!-- Step Content -->
                    <component :is="currentStepComponent" :key="step" />
                </Transition>
                <!-- Footer Actions -->
                <div
                    class="border-t border-[#e8eaf3] dark:border-white/5 p-6 bg-[#fafafa]/50 dark:bg-white/[0.02] flex items-center justify-between">
                    <button v-if="step == 1"
                        class="text-text-sub hover:text-text-main dark:text-gray-400 dark:hover:text-white font-medium text-sm px-4 py-2 transition-colors">
                        انصراف
                    </button>
                    <button v-if="step > 1" @click="step --" class="flex items-center gap-2 px-6 py-3 rounded-lg text-[#505d95] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium">
                        <svg class="w-[16px] fill-[#505d95]" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                        </svg>
                        قبلی
                    </button>
                    <button @click="step++"
                        class="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 transition-all transform active:scale-95">
                        <span>ادامه</span>
                        <svg class="w-[16px] fill-white" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>