<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['update:step', 'error']);

const isLoading = ref(false);
const phone = ref('');
const errorMessage = ref('');

const props = defineProps({
  phone: {
    type: Object,     // ref از والد
    required: true
  }
})

async function sendOtp() {
  if (!validatePhone()) return
  isLoading.value = true
  errorMessage.value = ''

  // Mock: فرض کنید API چک می‌کند کاربر وجود دارد یا نه
  const userExists = Math.random() > 0.5 // شبیه‌سازی (۵۰٪ شانس وجود کاربر)

  try {
    // Mock API
    console.log(`در حال ارسال OTP به ${props.phone.value}`)
    await new Promise(r => setTimeout(r, 1200)) // شبیه‌سازی تأخیر شبکه

    // موفقیت → رفتن به مرحله بعد
    emit('update:step', 2)
    // یا اگر از تابع setter استفاده کردی:
    // props.setStep(2)
  } catch (err) {
    errorMessage.value = 'خطا در ارسال کد تأیید'
    emit('error', errorMessage.value)
  } finally {
    isLoading.value = false
  }
}
function validatePhone() {
  if (!phone.value.match(/^09\d{9}$/)) {
    errorMessage.value = 'شماره موبایل نامعتبر'
    return false
  }
  return true
}
function startOtpTimer() {
  canResendOtp.value = false
  otpTimer.value = 60
  otpInterval = setInterval(() => {
    otpTimer.value--
    if (otpTimer.value <= 0) {
      stopOtpTimer()
      canResendOtp.value = true
    }
  }, 1000)
}
</script>
<template>
    <div key="phone" class="p-8 flex flex-col gap-6">
        <div class="text-center space-y-3">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">ورود یا ثبت نام</h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm">لطفا شماره موبایل خود را وارد کنید</p>
        </div>
        <div class="space-y-6">
            <label class="block space-y-2">
                <span class="text-sm font-bold text-gray-900 dark:text-gray-200">شماره موبایل</span>
                <div class="relative">
                    <input v-model="phone"
                        class="w-full h-[56px] bg-[#f8f8fb] dark:bg-[#111121] border border-[#d1d1d1] dark:border-[#3f3f5a] rounded-lg px-4 pl-12 text-left text-lg text-[#0e0e1b] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-display placeholder-right"
                        dir="ltr" placeholder="۰۹۱۲۳۴۵۶۷۸۹" type="tel" />
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                        <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm228.5-51.5Q520-183 520-200t-11.5-28.5Q497-240 480-240t-28.5 11.5Q440-217 440-200t11.5 28.5Q463-160 480-160t28.5-11.5Z"/></svg>
                    </div>
                </div>
            </label>
            <button @click="sendOtp" :disabled="isLoading || !phone"
                class="w-full h-[52px] bg-primary hover:bg-[#15159a] text-white text-base font-bold rounded-lg shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                <span v-if="!isLoading">ادامه</span>
                <span v-else>در حال ارسال...</span>
                <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
        </div>
        <div class="pt-2 text-center">
            <p class="text-[#505095] dark:text-gray-400 text-xs leading-6">
                ورود شما به معنای پذیرش 
                <a class="text-primary dark:text-blue-400 font-bold hover:underline" href="#">شرایط و قوانین</a> 
                دیدرس است
            </p>
        </div>
        <p class="text-red-600 text-sm text-center">{{ errorMessage }}</p>
    </div>
</template>