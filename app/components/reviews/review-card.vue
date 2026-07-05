<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** اطلاعات کامل تجربه */
  experience: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

// Computed values برای راحتی و خوانایی
const user = computed(() => props.experience.user || {})
const business = computed(() => props.experience.business || {})
const stats = computed(() => props.experience.stats || {})

const hasVerified = computed(() => user.value.verified !== false)
</script>

<template>
  <article
    class="w-54 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
    data-purpose="business-card">
    <!-- Header: User Info -->
    <div class="py-3 px-4 flex justify-between items-start">
      <div class="flex items-center gap-2">
        <img :src="user.avatar || '/img/avatar/default.png'" :alt="user.name"
          class="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-card-dark shadow-md ring-2 ring-primary/10 dark:ring-primary/30"
          width="14" height="14" />
        <div>
          <h3 class="font-bold text-base text-on-background">
            {{ user.name }}
          </h3>
          <p class="font-label-sm text-xs text-on-surface-variant mt-0.5">طراح محصول | راهنمای محلی سطح ۵</p>
          <p class="text-[11px] text-outline mt-1">
            {{ props.experience.timeAgo || '۲ ساعت پیش' }}
          </p>
        </div>
      </div>

      <button class="fill-slate-400 hover:fill-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
          <path
            d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
        </svg>
      </button>
    </div>
    <div class="flex items-center gap-3 px-4">
      <div class="flex gap-0.5">
        <span class="material-symbols-outlined fill-star-rating icon-fill text-[18px]">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px"><g><rect fill="none" height="24" width="24"/><path d="M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z"/></g></svg>
        </span>
        <span class="material-symbols-outlined fill-star-rating icon-fill text-[18px]">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px"><g><rect fill="none" height="24" width="24"/><path d="M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z"/></g></svg>
        </span>
        <span class="material-symbols-outlined fill-star-rating icon-fill text-[18px]">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px"><g><rect fill="none" height="24" width="24"/><path d="M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z"/></g></svg>
        </span>
        <span class="material-symbols-outlined fill-star-rating icon-fill text-[18px]">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px"><g><rect fill="none" height="24" width="24"/><path d="M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z"/></g></svg>
        </span>
        <span class="material-symbols-outlined fill-star-rating text-[18px]">
           <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px"><g><g><path d="M0,0h24v24H0V0z" fill="none"/></g></g><g><path d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M9.58,10H5.12 c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81 c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6c0.79-0.57,0.39-1.81-0.58-1.81h-4.46l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0 L9.58,10z"/></g></svg>
        </span>
      </div>
      <div class="flex gap-2">
        <span class="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded font-medium">فضای کار</span>
        <span class="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded font-medium">کیفیت
          قهوه</span>
      </div>
    </div>
    <!-- Experience Text -->
    <div class="px-4">
      <p class="text-slate-700 text-md font-medium leading-7 mb-4">
        {{ props.experience.text }}
      </p>
    </div>

    <!-- Main Image -->
    <!-- Post Images -->
    <div v-if="props.experience.image" class="grid grid-cols-2 gap-2 mb-4 p-4 overflow-hidden">
      <img alt="Cafe Interior"
        class="w-full h-[240px] rounded-xl object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
        :src="props.experience.image" :alt="props.experience.title || 'تجربه'" />
    </div>
    <!-- Business Info -->
    <div class="px-4 pb-2">
      <NuxtLink :to="`/p/${business.id || '#'}`"
        class="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors group">
        <img :src="business.logo || '/img/biz/default.png'" :alt="business.name"
          class="w-12 h-12 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-sm text-slate-800 truncate">{{ business.name }}</h4>
          <div class="flex items-center gap-2 text-xs text-slate-500 mt-1">
            <span class="flex items-center fill-yellow-500 font-bold">
              ★ {{ business.rating?.toFixed(1) || '4.8' }}
            </span>
            <span>•</span>
            <span class="truncate">{{ business.category }}</span>
            <span>•</span>
            <span class="truncate">{{ business.location }}</span>
          </div>
        </div>
        <span class="fill-slate-400 group-hover:fill-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </span>
      </NuxtLink>
    </div>

    <!-- Stats -->
    <div
      class="px-4 py-2 flex items-center justify-between text-xs text-text-sub-light border-b border-divider-light mt-2">
      <div class="flex items-center gap-1">
        <span class="flex items-center bg-blue-100 p-0.5 rounded-full">
          <span class="text-[10px] fill-primary">
            <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px">
              <path
                d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
            </svg>
          </span>
        </span>
        <span>{{ stats.useful ?? 243 }} نفر این تجربه را مفید دانستند</span>
      </div>

      <div class="flex items-center gap-1">
        <span>{{ stats.comments ?? 3 }} کامنت</span>
        <span>•</span>
        <span>{{ stats.reposts ?? 1 }} بازنشر</span>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="px-2 py-1 flex items-center justify-between text-sm">
      <button
        class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-gray-100 transition-colors group/item">
        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
            <path
              d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
          </svg>
        </span>
        <span class="hidden sm:inline font-medium group-hover/item:text-primary">مفید</span>
      </button>

      <button
        class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-gray-100 transition-colors group/item">
        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
            <path
              d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
          </svg>
        </span>
        <span class="hidden sm:inline font-medium group-hover/item:text-primary">نظر</span>
      </button>

      <button
        class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-gray-100 transition-colors group/item">
        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors -scale-x-100">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
            <path
              d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z" />
          </svg>
        </span>
        <span class="hidden sm:inline font-medium group-hover/item:text-primary">ارسال</span>
      </button>

      <button
        class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-gray-100 transition-colors group/item">
        <span class="text-xl fill-current group-hover/item:fill-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
            <path
              d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
          </svg>
        </span>
        <span class="hidden sm:inline font-medium group-hover/item:text-primary">ذخیره</span>
      </button>
    </div>
    <div class="mt-3 ml-4 mb-4 bg-surface-container-low rounded-xl p-4 mr-8 border-r-[3px] border-primary">
      <div class="flex items-center gap-3 mb-2"><img alt="Company Logo"
          class="w-8 h-8 rounded-full shadow-sm border border-border-light" src="/img/biz/coffe.webp">
        <div>
          <div class="font-bold text-xs flex items-center gap-1">کافه رستوران بلک‌برن <span
              class="bg-primary text-white text-[9px] px-1.5 rounded-sm">مالک</span></div>
          <div class="text-[10px] text-on-surface-variant mt-0.5">۱ ساعت پیش</div>
        </div>
      </div>
      <p class="text-sm text-on-surface-variant leading-relaxed"> سارا عزیز، ممنون از بازخورد ارزشمند شما. خوشحالیم که
        از فضای کار و کیفیت قهوه‌ها رضایت داشتید. نظرتان در مورد قیمت‌ها را با تیم مدیریت در میان خواهیم گذاشت. به امید
        دیدار مجدد شما! </p>
    </div>
  </article>
</template>