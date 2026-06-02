<script setup>
import { ref } from 'vue'

const images = ref([])

const onFileChange = (e) => {
  const files = e.target.files
  if (!files) return
  
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = (event) => {
      images.value.push(event.target.result)
    }
    reader.readAsDataURL(files[i])
  }
}

const removeImage = (index) => {
  images.value.splice(index, 1)
}
</script>

<template>
  <div class="border border-dashed border-slate-200 rounded-xl p-4 bg-slate-50/50">
    <div class="flex flex-col items-center justify-center text-center cursor-pointer relative py-4">
      <input 
        type="file" multiple accept="image/*" @change="onFileChange"
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      <div class="p-3 bg-white rounded-full shadow-sm text-slate-400 mb-2 border border-slate-100">
        📸
      </div>
      <p class="text-xs font-semibold text-slate-600">تصاویر خود را آپلود کنید</p>
      <p class="text-[10px] text-slate-400 mt-0.5">حداکثر ۵ تصویر (JPEG, PNG)</p>
    </div>

    <div v-if="images.length > 0" class="grid grid-cols-4 gap-2 mt-4">
      <div v-for="(img, index) in images" :key="index" class="relative aspect-square rounded-lg overflow-hidden border border-slate-100 group">
        <img :src="img" class="w-full h-full object-cover" />
        <button 
          @click="removeImage(index)" type="button"
          class="absolute top-1 right-1 w-5 h-5 bg-black/60 hover:bg-rose-600 rounded-full flex items-center justify-center text-white text-[10px] transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>