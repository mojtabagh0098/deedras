<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: { type: Object, default: null },
  placeholder: { type: String, default: 'جستجو یا انتخاب مکان...' }
})

const emit = defineEmits(['update:modelValue', 'addNewPlace'])

const searchQuery = ref('')
const isOpen = ref(false)
const selectedLocation = ref(props.modelValue)
const componentRef = ref(null)

const recentLocations = ref([
  { id: 1, name: 'کافه ونوس', category: 'کافه و رستوران', address: 'تهران، خیابان ولیعصر', rating: 4.8 },
  { id: 2, name: 'بیمارستان میلاد', category: 'درمانگاه و بیمارستان', address: 'تهران، حکیمیه', rating: 4.2 },
  { id: 3, name: 'آرایشگاه لونا', category: 'زیبایی و سلامت', address: 'تهران، شهرک غرب', rating: 4.6 }
])

const suggestions = ref([])

watch(searchQuery, (newVal) => {
  if (newVal.length > 1) {
    suggestions.value = [
      { id: 101, name: 'کافه لمیز', category: 'کافه', address: 'تهران، ونک', rating: 4.5 },
      { id: 102, name: 'رستوران شاندیز', category: 'رستوران سنتی', address: 'تهران، تجریش', rating: 4.7 }
    ]
    isOpen.value = true
  } else {
    suggestions.value = []
  }
})

const selectLocation = (location) => {
  selectedLocation.value = location
  emit('update:modelValue', location)
  searchQuery.value = location.name
  isOpen.value = false // بسته شدن آنی دراپ داون
}

// بستن دراپ‌داون در صورت کلیک به خارج از کامپوننت
const handleClickOutside = (event) => {
  if (componentRef.value && !componentRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  if (selectedLocation.value) {
    searchQuery.value = selectedLocation.value.name
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="componentRef" class="relative w-full">
    <label class="block text-xs font-semibold text-slate-500 mb-1.5 mr-1">
      کجا بودی؟ <span class="text-rose-500">*</span>
    </label>

    <div 
      class="relative flex items-center border border-slate-200 rounded-xl px-3.5 py-3 bg-slate-50/50 focus-within:bg-white focus-within:border-blue-900 focus-within:ring-4 focus-within:ring-blue-950/5 transition-all duration-200"
    >
      <span class="text-slate-400 ml-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </span>
      
      <input
        v-model="searchQuery"
        @focus="isOpen = true"
        :placeholder="placeholder"
        class="flex-1 outline-none bg-transparent text-sm text-slate-800 placeholder:text-slate-400"
        type="text"
      />
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="absolute z-50 w-full mt-1.5 bg-white rounded-xl shadow-xl border border-slate-100 py-1 max-h-[260px] overflow-y-auto">
        <div v-if="searchQuery.length === 0">
          <div class="text-[11px] font-bold text-slate-400 my-2 px-4">مکان‌های اخیر شما</div>
          <div 
            v-for="loc in recentLocations" :key="loc.id" @click="selectLocation(loc)"
            class="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 cursor-pointer transition-colors"
          >
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold text-slate-700 truncate">{{ loc.name }}</div>
              <div class="text-xs text-slate-400 truncate">{{ loc.category }} • {{ loc.address }}</div>
            </div>
            <div class="text-amber-500 text-xs font-semibold">★ {{ loc.rating }}</div>
          </div>
        </div>

        <div v-else>
          <div v-for="loc in suggestions" :key="loc.id" @click="selectLocation(loc)"
            class="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 cursor-pointer transition-colors"
          >
            <div class="flex-1">
              <div class="text-sm font-semibold text-slate-700">{{ loc.name }}</div>
              <div class="text-xs text-slate-400">{{ loc.category }} • {{ loc.address }}</div>
            </div>
          </div>
        </div>

        <div class="border-t border-slate-100 mt-1 pt-1">
          <button @click="emit('addNewPlace')" class="w-full py-2.5 text-xs text-blue-900 hover:bg-slate-50 transition-colors font-semibold">
            + افزودن مکان جدید
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>