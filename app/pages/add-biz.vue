<script setup>
import { ref } from "vue";
import Step1Details from '~/components/biz-steps/Step1Details.vue'
import Step2Location from '~/components/biz-steps/Step2Location.vue'
import Step3Contacts from '~/components/biz-steps/Step3Contacts.vue'

const step = ref(1);
const currentStepComponent = computed(() => {
  if (step.value === 1) return Step1Details
  if (step.value === 2) return Step2Location
  if (step.value === 3) return Step3Contacts
  return null // یا می‌تونی یه کامپوننت خطا بذاری
})
</script>
<template>
    <main class="flex-1 flex justify-center py-10 px-4 lg:px-0">
        <div class="w-full max-w-[720px] flex flex-col gap-8">
            <!-- ProgressBar -->
            <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <div class="flex flex-col gap-4">
                    <div class="flex justify-between items-center">
                        <p class="text-base font-bold text-primary">مرحله ۱: اطلاعات اولیه کسب و کار</p>
                        <p class="text-sm font-medium text-gray-500">۱ از ۳</p>
                    </div>
                    <div class="h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                        <div class="h-full rounded-full bg-primary" style="width: 33.33%;"></div>
                    </div>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">گام‌های بعدی: تعیین موقعیت مکانی و ثبت نهایی
                        جزئیات</p>
                </div>
            </div>
            <!-- Form Card -->
             <ClientOnly>
                <Transition name="step" mode="out-in" appear>
                    <component :is="currentStepComponent" :key="step" @update:step="step = $event" />
                </Transition>
             </ClientOnly>
            <!-- Footer Hint -->
            <div class="flex justify-center items-center gap-2 text-gray-400 text-sm">
                <span class="material-symbols-outlined text-base">verified_user</span>
                <span>تمامی اطلاعات شما نزد دیدرس محفوظ است.</span>
            </div>
        </div>
    </main>
</template>