<template>
    <main class="max-w-7xl mx-auto md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <nav class="col-span-1 lg:col-span-2 hidden md:flex flex-col h-screen sticky top-0 py-6 items-center border-l dark:border-outline-variant bg-surface-container-lowest dark:bg-surface-dim shadow-sm flex-shrink-0 z-40">
            
            <!-- Brand -->
            <RouterLink class="mb-stack-lg group flex flex-col items-center gap-2" to="/">
                <div class="flex items-center justify-center">
                    <span class="size-12 font-eng-headline text-eng-headline font-bold">
                        <img src="/img/logo.png" alt="Logo" />
                    </span>
                </div>
            </RouterLink>

            <!-- Nav Links -->
            <ul class="flex flex-col gap-4 w-full p-4">
                
                <!-- 1. اکتشاف -->
                <li>
                    <RouterLink
                        :class="[
                            'flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-200',
                            $route.path === '/' 
                                ? 'text-primary dark:text-primary-fixed-dim font-bold scale-95 bg-surface-container-low dark:bg-surface-container' 
                                : 'text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container'
                        ]"
                        to="/">
                        <span class="material-symbols-outlined" :class="{ 'fill-primary': $route.path === '/' }">
                            <svg v-if="$route.path === '/'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                        </span>
                        <span class="font-label-sm text-label-sm">خانه</span>
                    </RouterLink>
                </li>

                <!-- 2. نقشه -->
                <li>
                    <RouterLink 
                        :class="[
                            'flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-200',
                            $route.path === '/explore' 
                                ? 'text-primary dark:text-primary-fixed-dim font-bold scale-95 bg-surface-container-low dark:bg-surface-container' 
                                : 'text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container'
                        ]"
                        to="/explore">
                        <span class="material-symbols-outlined" :class="{ 'fill-primary': $route.path === '/explore' }">
                            <svg v-if="$route.path !== '/explore'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path d="m335-310 202-58q20-6 34.5-20.5T592-423l58-202q3-11-5.5-19.5T625-650l-202 58q-20 6-34.5 20.5T368-537l-58 202q-3 11 5.5 19.5T335-310Zm145-110q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
                            </svg>
                        </span>
                        <span class="font-label-sm text-label-sm">کاووش</span>
                    </RouterLink>
                </li>

                <!-- 3. اعلان ها -->
                <li>
                    <RouterLink 
                        :class="[
                            'flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-200',
                            $route.path === '/notifications' 
                                ? 'text-primary dark:text-primary-fixed-dim font-bold scale-95 bg-surface-container-low dark:bg-surface-container' 
                                : 'text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container'
                        ]"
                        to="/notifications">
                        <span class="material-symbols-outlined relative" :class="{ 'fill-primary': $route.path === '/notifications' }">
                            <svg v-if="$route.path !== '/notifications'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                            </svg>
                            <span class="absolute top-0 left-0 w-2 h-2 rounded-full bg-error"></span>
                        </span>
                        <span class="font-label-sm text-label-sm text-center">اعلان ها</span>
                    </RouterLink>
                </li>

                <!-- 4. ذخیره‌ها -->
                <li>
                    <RouterLink 
                        :class="[
                            'flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-200',
                            $route.path === '/saved' 
                                ? 'text-primary dark:text-primary-fixed-dim font-bold scale-95 bg-surface-container-low dark:bg-surface-container' 
                                : 'text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container'
                        ]"
                        to="/saved">
                        <span class="material-symbols-outlined" :class="{ 'fill-primary': $route.path === '/saved' }">
                            <svg v-if="$route.path !== '/saved'" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                            </svg>
                        </span>
                        <span class="font-label-sm text-label-sm">ذخیره‌ها</span>
                    </RouterLink>
                </li>
            </ul>

            <!-- CTA -->
            <div class="w-full px-4 mb-stack-lg">
                <button class="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-full hover:bg-primary-container transition-colors shadow-sm">
                    <span class="material-symbols-outlined text-[20px]">ثبت تجربه</span>
                </button>
            </div>

            <!-- Profile Mini -->
            <div class="mt-auto pt-6 border-t border-outline-variant">
                <div v-if="$route.path === '/settings'" class="sidebar-item mb-4">
                    <span class="material-symbols-outlined">settings</span>
                    <span class="hidden lg:block font-label-md">تنظیمات</span>
                </div>
                <div class="flex items-center gap-3 px-2">
                    <img alt="User Avatar" class="w-10 h-10 rounded-full object-cover border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSgE8_mzo02PRP5pM23r8dcCaPDGdAfq96i4_Wh1VW6tKH73mSrC9AotynH8j3VcPT7QCLi28KeLpuxdpiIONWPop7b3zzzAasiivsUwloXWke68qt9lcE_r8PfveGo1o1G1Ki7kwUMiq_8OXwaSrF1uknnDaEVNlHRD8qdn7oy7rmT_ot3UbUSmRrsPz05qLZq0PzjtZHzAM4CUKCG2x75XzENx9iZ9qVphdXXmDS_7OYaA9Cbhkq0gmHBXTKYGud0W598mX6flI">
                    <div class="hidden lg:block overflow-hidden">
                        <p class="text-xs font-bold truncate">سارا احمدی</p>
                        <p class="text-[10px] text-on-surface-variant">@sarah_arch</p>
                    </div>
                </div>
            </div>
        </nav>
        <NuxtPage />
    </main>
</template>