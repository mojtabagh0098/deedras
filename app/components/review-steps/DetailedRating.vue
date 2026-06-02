<script setup>
import { ref } from 'vue'

const criteria = ref([
  { key: 'quality', label: 'کیفیت خدمات / کالا', rating: 0, hoverRating: 0 },
  { key: 'behavior', label: 'برخورد پرسنل', rating: 0, hoverRating: 0 },
  { key: 'price', label: 'ارزش خرید نسبت به قیمت', rating: 0, hoverRating: 0 },
  { key: 'environment', label: 'محیط و فضاسازی', rating: 0, hoverRating: 0 }
])

const setRating = (index, value) => {
  criteria.value[index].rating = value
}
</script>

<template>
  <div class="bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
    <div v-for="(item, idx) in criteria" :key="item.key" class="flex items-center justify-between py-1">
      <span class="text-xs font-medium text-slate-600">{{ item.label }}</span>
      
      <div class="flex items-center gap-0.5 direction-ltr">
        <button 
          v-for="star in 5" :key="star" type="button"
          @click="setRating(idx, star)"
          @mouseenter="item.hoverRating = star"
          @mouseleave="item.hoverRating = 0"
          class="p-0.5 transition-transform active:scale-90"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-colors"
            :fill="(item.hoverRating || item.rating) >= star ? '#f59e0b' : 'none'"
            :stroke="(item.hoverRating || item.rating) >= star ? '#f59e0b' : '#cbd5e1'"
            viewBox="0 0 24 24" stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.252.587 1.813l-3.974 2.896a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.896a1 1 0 00-1.176 0l-3.976 2.896c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.104c-.773-.562-.373-1.813.587-1.813h4.906a1 1 0 00.95-.69l1.52-4.674z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>