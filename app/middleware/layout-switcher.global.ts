// middleware/layout-switcher.global.ts
export default defineNuxtRouteMiddleware((to) => {
  const { isMobile } = useDevice()
  
  // اگر صفحه خودش لایوت اختصاصی فیکس نکرده بود، بر اساس دستگاه لایوت را تغییر بده
  if (!to.meta.layout) {
    to.meta.layout = isMobile ? 'mobile' : 'default'
  }
})