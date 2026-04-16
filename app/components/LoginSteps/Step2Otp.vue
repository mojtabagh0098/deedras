<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
const emit = defineEmits<{
  (e: 'update:step', step: number): void
  (e: 'verify-otp', code: string): void
  (e: 'resend-otp'): void
  (e: 'error', msg: string): void
}>()

// کد OTP به صورت آرایه ۴ تایی (reactive)
const otpDigits = ref<string[]>(['', '', '', ''])

// ref برای دسترسی به inputها (برای مدیریت فوکوس)
const inputRefs = ref<HTMLInputElement[]>([])

// کد کامل به صورت string
const otpCode = computed(() => otpDigits.value.join(''))

// وضعیت تایمر ارسال مجدد (ثانیه)
const resendTimer = ref(120)
const canResend = ref(false)
let timerInterval: number | null = null

// وقتی کامپوننت mount شد، تایمر شروع شود + فوکوس روی اولین input
onMounted(() => {
  startResendTimer()
  nextTick(() => {
    if (inputRefs.value[0]) inputRefs.value[0].focus()
  })
})

// شروع تایمر ارسال مجدد
function startResendTimer() {
  canResend.value = false
  resendTimer.value = 120

  timerInterval = setInterval(() => {
    resendTimer.value--
    if (resendTimer.value <= 0) {
      clearInterval(timerInterval!)
      canResend.value = true
    }
  }, 1000)
}

// پاک کردن تایمر هنگام unmount
onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})

// هندلر تغییر در هر input
function handleInput(index: number, event: Event) {
  const target = event.target as HTMLInputElement
  const value = target.value

  // فقط اعداد مجاز
  if (!/^\d$/.test(value) && value !== '') {
    target.value = ''
    return
  }

  otpDigits.value[index] = value

  // اگر مقدار وارد شد و فیلد بعدی وجود دارد → فوکوس بعدی
  if (value !== '' && index < 3) {
    nextTick(() => inputRefs.value[index + 1]?.focus())
  }

  // اگر کد کامل شد → می‌توانی اتوماتیک verify کنی یا منتظر دکمه بمانی
  // اگر می‌خواهی اتوماتیک باشد: if (otpCode.value.length === 4) verifyOtp()
}

// هندلر کلیدها (Backspace, ArrowLeft, ArrowRight)
function handleKeyDown(index: number, event: KeyboardEvent) {
  const target = event.target as HTMLInputElement

  if (event.key === 'Backspace') {
    if (target.value === '' && index > 0) {
      // اگر خالی بود → به قبلی برو و مقدار قبلی را پاک کن
      otpDigits.value[index - 1] = ''
      nextTick(() => inputRefs.value[index - 1]?.focus())
    }
  } else if (event.key === 'ArrowLeft' && index > 0) {
    nextTick(() => inputRefs.value[index - 1]?.focus())
  } else if (event.key === 'ArrowRight' && index < 3) {
    nextTick(() => inputRefs.value[index + 1]?.focus())
  } else if (event.key === 'Enter' && otpCode.value.length === 4) {
    // verifyOtp()
  }
}

// هندل Paste (اختیاری - اگر کاربر کد را paste کند)
function handlePaste(event: ClipboardEvent, index: number) {
  event.preventDefault()
  const pasteData = event.clipboardData?.getData('text') || ''
  const digits = pasteData.replace(/\D/g, '').slice(0, 4 - index)

  for (let i = 0; i < digits.length; i++) {
    if (index + i < 4) {
      otpDigits.value[index + i] = digits[i]
    }
  }

  // فوکوس روی آخرین فیلد پر شده یا آخرین فیلد
  const nextFocus = Math.min(index + digits.length, 3)
  nextTick(() => inputRefs.value[nextFocus]?.focus())
}

// تأیید کد (ارسال به والد)
function verifyOtp() {
  if (otpCode.value.length !== 4) {
    emit('error', 'کد باید ۴ رقمی باشد')
    return
  }

  emit('verify-otp', otpCode.value)
  // → اینجا دیگه emit update:step نکن
}

// بازگشت به مرحله قبل (تغییر شماره)
function changePhone() {
  emit('update:step', 1)
}

// ارسال مجدد کد
function resendCode() {
  if (!canResend.value) return

  emit('resend-otp')
  startResendTimer() // ریست تایمر
}

</script>
<template>
  <div key="otp">
    <div class="text-center space-y-3">
      <h2 class="text-[#121117] dark:text-white text-[28px] font-bold leading-tight tracking-tight">
        کد تایید را وارد کنید
      </h2>
      <div class="flex flex-col gap-1">
        <p class="text-[#6a6487] dark:text-gray-400 text-sm font-normal leading-relaxed">
          کد ۴ رقمی ارسال شده به شماره
          <span class="font-numbers font-bold text-[#121117] dark:text-gray-200 dir-ltr inline-block mx-1">0912 345
            6789</span>
          را وارد نمایید.
        </p>
      </div>
    </div>
    <div class="px-8 py-8 w-full">
      <div class="flex justify-center" dir="ltr">
        <fieldset class="relative flex gap-4">
          <!-- Inline JS preserved from component for functionality -->
          <input v-for="(digit, index) in otpDigits" :key="index" ref="inputRefs" v-model="otpDigits[index]"
            autocomplete="one-time-code"
            class="font-numbers flex h-16 w-14 text-center rounded-xl bg-background-light dark:bg-surface-dark border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-[#141121] focus:ring-4 focus:ring-primary/10 text-[#121117] dark:text-white text-2xl font-bold leading-normal outline-none transition-all duration-200 placeholder-gray-300 dark:placeholder-gray-600 caret-primary"
            maxlength="1" placeholder="-" type="tel" inputmode="numeric" pattern="[0-9]*"
            @input="handleInput(index, $event)" @keydown="handleKeyDown(index, $event)"
            @paste="handlePaste($event, index)" />
        </fieldset>
      </div>
      <!-- Error Message Placeholder (Hidden by default) -->
      <!-- <div class="mt-4 flex items-center justify-center gap-1.5 text-red-500 animate-pulse">
                <span class="material-symbols-outlined text-sm">error</span>
                <span class="text-xs font-medium">کد وارد شده اشتباه است</span>
            </div> -->
    </div>
    <div class="bg-white dark:bg-[#141121] px-8 pb-8 flex flex-col gap-6">
      <!-- Timer and Links Row -->
      <div class="flex items-center justify-between text-sm">
        <div class="flex items-center gap-2 bg-background-light dark:bg-surface-dark px-3 py-1.5 rounded-lg">
          <span class="material-symbols-outlined text-[#6a6487] dark:text-gray-400 text-lg">timer</span>
          <span class="font-numbers font-bold text-[#121117] dark:text-white pt-0.5">
            {{ Math.floor(resendTimer / 60) }}:{{ (resendTimer % 60).toString().padStart(2, '0') }}
          </span>
        </div>
        <div class="flex gap-4">
          <button @click="changePhone"
            class="text-[#6a6487] dark:text-gray-400 font-medium hover:text-primary dark:hover:text-primary transition-colors text-xs sm:text-sm">
            تغییر شماره
          </button>
          <div class="w-px h-4 bg-gray-200 dark:bg-gray-700 my-auto"></div>
          <button @click="resendCode" :disabled="!canResend" :class="{ 'opacity-50 cursor-not-allowed': !canResend }"
            class="text-primary font-bold hover:text-[#2f1699] transition-colors text-xs sm:text-sm">
            ارسال مجدد کد
          </button>
        </div>
      </div>
      <!-- Primary Button -->
      <button @click="verifyOtp" :disabled="otpCode.length !== 4"
        :class="{ 'opacity-60 cursor-not-allowed': otpCode.length !== 4 }"
        class="group flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-5 bg-primary hover:bg-[#2f1699] text-white transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98]">
        <span class="text-base font-bold leading-normal tracking-wide">تایید و ادامه</span>
        <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
          fill="#fff">
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </button>
    </div>
  </div>
</template>