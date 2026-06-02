<script setup>
import { ref } from 'vue'

const question = ref('')
const options = ref(['', ''])

const addOption = () => {
  if (options.value.length < 6) {
    options.value.push('')
  }
}

const removeOption = (index) => {
  if (options.value.length > 2) {
    options.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="border border-slate-200/80 rounded-xl p-4 bg-white shadow-sm space-y-3.5">
    <div>
      <label class="block text-[11px] font-bold text-slate-400 mb-1.5 mr-1">سوال نظرسنجی</label>
      <input 
        v-model="question" type="text" placeholder="مثلاً: شما کدوم شعبه رو ترجیح میدین؟"
        class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm bg-slate-50/50 focus:bg-white focus:border-blue-900 focus:ring-4 focus:ring-blue-950/5 outline-none transition-all"
      />
    </div>

    <div class="space-y-2">
      <label class="block text-[11px] font-bold text-slate-400 mr-1">گزینه‌ها</label>
      <div v-for="(option, index) in options" :key="index" class="flex items-center gap-2">
        <input 
          v-model="options[index]" type="text" :placeholder="`گزینه ${index + 1}`"
          class="flex-1 border border-slate-200 rounded-xl px-3.5 py-2 text-xs bg-slate-50/50 focus:bg-white focus:border-blue-900 outline-none transition-all"
        />
        <button 
          v-if="options.length > 2" @click="removeOption(index)" type="button"
          class="p-2 text-slate-400 hover:text-rose-500 text-sm transition-colors"
        >
          ✕
        </button>
      </div>
    </div>

    <button 
      v-if="options.length < 6" @click="addOption" type="button"
      class="text-[11px] text-blue-900 font-bold hover:underline pt-1 flex items-center gap-1"
    >
      + افزودن گزینه جدید
    </button>
  </div>
</template>