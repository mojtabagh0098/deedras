<script setup lang="ts">
import { ref } from 'vue'

// مقدار پیش‌فرض null است (بدون نظر / خنثی)
const recommendation = ref<boolean | null>(null)

// تابع هوشمند برای تغییر وضعیت (Toggle)
const handleSelect = (value: boolean) => {
  if (recommendation.value === value) {
    // اگر دوباره روی گزینه فعال کلیک شد، حالت خنثی (null) شود
    recommendation.value = null
  } else {
    // در غیر این صورت مقدار جدید ست شود
    recommendation.value = value
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2.5 my-5 select-none">
    <div class="flex items-center gap-2">
      <span class="text-xs font-medium text-slate-500">این مکان رو به دیگران پیشنهاد می‌کنی؟</span>
      
      <button 
        v-if="recommendation !== null"
        @click="recommendation = null"
        type="button"
        class="text-[10px] text-slate-400 hover:text-rose-500 transition-colors duration-150 underline decoration-dotted underline-offset-4"
        title="حذف انتخاب"
      >
        حذف انتخاب
      </button>
    </div>
    
    <div class="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200/60">
      <button 
        @click="handleSelect(true)"
        type="button"
        :class="[
          'flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-lg',
          recommendation === true 
            ? 'bg-emerald-600 text-white shadow-sm scale-[1.02]' 
            : 'text-slate-600 hover:bg-slate-200/60 active:scale-95'
        ]"
      >
        <span class="transition-transform duration-200" :class="{ 'scale-110': recommendation === true }">👍</span>
        <span>پیشنهاد می‌کنم</span>
      </button>

      <button 
        @click="handleSelect(false)"
        type="button"
        :class="[
          'flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-lg',
          recommendation === false 
            ? 'bg-rose-600 text-white shadow-sm scale-[1.02]' 
            : 'text-slate-600 hover:bg-slate-200/60 active:scale-95'
        ]"
      >
        <span class="transition-transform duration-200" :class="{ 'scale-110': recommendation === false }">👎</span>
        <span>پیشنهاد نمی‌کنم</span>
      </button>
    </div>
  </div>
</template>