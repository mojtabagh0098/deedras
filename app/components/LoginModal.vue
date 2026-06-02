<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Step1Phone from '~/components/LoginSteps/Step1Phone.vue';
import Step2Otp from '~/components/LoginSteps/Step2Otp.vue';
import Step3Register from '~/components/LoginSteps/Step3Register.vue';
import Step4Forgot from '~/components/LoginSteps/Step4Forgot.vue';
import Close from '~/assets/svg/close.svg';


defineProps({ modelValue: Boolean })
const emit = defineEmits(['update:modelValue', 'authSuccess']);

function close() {
  emit('update:modelValue', false)
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) close()
}

const step = ref(1)
const phone = ref('')
const otp = ref('')
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const otpTimer = ref(60)
const canResendOtp = ref(false)
let otpInterval = null




const currentStepComponent = computed(() => {
  switch (step.value) {
    case 1: return Step1Phone
    case 2: return Step2Otp
    case 3: return Step3Register
    case 4: return Step4Forgot
    default: return null
  }
})

// برای دکمه‌های بعدی/قبلی
function nextStep() {
  if (step.value < 4) step.value++
}

function prevStep() {
  if (step.value > 1) step.value--
}

// توابع close, resetForm, startOtpTimer, stopOtpTimer, sendOtp, verifyOtp, register, forgotPassword, validatePhone, validateRegister, handleEsc
// همان کدهای قبلی را اینجا کپی کنید (برای کوتاه شدن حذف شده‌اند)

async function verifyOtp() {
  if (!otp.value || otp.value.length !== 6) {
    errorMessage.value = 'کد نامعتبر'
    return
  }
  isLoading.value = true

  // Mock: چک OTP (در عمل: await api.post('/verify-otp', { phone: phone.value, otp: otp.value }))
  const isValid = otp.value === '123456' // Mock OTP

  if (isValid) {
    // چک عضویت (Mock)
    const userExists = Math.random() > 0.5
    if (userExists) {
      emit('authSuccess', { phone: phone.value }) // موفقیت ورود
      close()
    } else {
      step.value = 3 // ثبت‌نام
    }
  } else {
    errorMessage.value = 'کد اشتباه است'
  }
  isLoading.value = false
}

function handleVerifyOtp(code: string) {
  console.log('Verifying OTP:', code)
  // emit('update:step', 3)
  // اینجا می‌تونی درخواست واقعی به سرور بفرستی
  // فرض موفقیت (در عمل شرط بگذار)
  const isValid = true // یا await api.verifyOtp(phone.value, code)

  if (isValid) {
    // چک کن کاربر ثبت‌نام شده یا نه
    const userExists = Math.random() > 0.4 // mock
    console.log(userExists);

    if (userExists) {
      // emit('update:step', 3)
      close()
    } else {
      step.value = 3 // برو به ثبت‌نام
    }
  } else {
    // اگر ناموفق بود، می‌تونی خطا نشون بدی یا step رو نگه داری
    console.log('OTP نامعتبر')
  }
}

// computed برای انتخاب کامپوننت مرحله (اختیاری - می‌توانید مستقیم v-if هم استفاده کنید)
const currentStep = computed(() => step.value)
watch(step, () => {
  console.log('Step changed to:', step.value)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" @click.self="close">
        <div class="relative z-10 w-full max-w-[440px] flex flex-col animate-in zoom-in-95 duration-300" @click.stop>
          <div class="bg-white dark:bg-[#1e1e2d] rounded-xl shadow-lg border border-gray-100 dark:border-[#2d2d42] overflow-hidden">
            <!-- هدر ثابت -->
            <div class="flex items-center justify-between px-6 py-5 border-b border-gray-50 dark:border-white/5">
              <button @click="close"
                class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full p-1 -mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  fill="#1f1f1f">
                  <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div class="flex items-center gap-2 mx-auto">
                <svg class="fill-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                  width="24px">
                  <path xmlns="http://www.w3.org/2000/svg"
                    d="M235.48-395.48h138.39l184.74-184.74q10.69-10.69 15.76-23.89 5.06-13.19 5.06-26.74 0-13.54-5.56-26.3-5.57-12.76-15.26-23.46l-36.57-37.43q-10.69-10.7-23.77-16.05-13.07-5.34-27.33-5.34-13.07 0-26.27 5.34-13.19 5.35-23.89 15.48l-185.3 184.74v138.39Zm272.65-235.65-37-37 37 37ZM306.78-466.78v-38l80.65-80.09 19.44 18 18 19.44-80.09 80.65h-38Zm100.09-100.09 18 19.44-37.44-37.44 19.44 18Zm52 171.39h265.65v-80H538.87l-80 80ZM60.78-60.78v-732.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h626.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v466.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H220.78l-160 160Zm126-266h606.44v-466.44H166.78v486l20-19.56Zm-20 0v-466.44 466.44Z" />
                </svg>
                <span class="text-primary font-bold text-xl tracking-tight">دیدرس</span>
              </div>
              <div class="w-8"></div>
            </div>

            <!-- محتوای مراحل - فقط یک <template> داریم -->
            <Transition name="step" mode="out-in">
              <component :is="currentStepComponent" :key="step" :phone="phone" @verify-otp="handleVerifyOtp"
                @resend-otp="handleResendOtp" @error="handleError" @update:step="step = $event" />
            </Transition>

            <!-- نوار پیشرفت -->
            <div class="h-1.5 bg-gray-200 dark:bg-gray-800">
              <div class="h-full bg-primary transition-all duration-500" :style="{ width: `${(step / 4) * 100}%` }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.step-enter-active,
.step-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-enter-from,
.step-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>