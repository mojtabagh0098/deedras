<template>
    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between"
        data-purpose="top-navbar">
        <div class="flex items-center gap-3">
            <button class="text-textMain p-1 rounded-full hover:bg-gray-100 transition-colors">
                <span class="material-icons-outlined">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </span>
            </button>
            <h1 class="text-lg font-bold text-textMain">پروفایل</h1>
        </div>
        <div class="flex items-center gap-2">
            <button class="text-textMain p-1 rounded-full hover:bg-gray-100 transition-colors">
                <span class="material-icons-outlined">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path
                            d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z" />
                    </svg>
                </span>
            </button>
            <button class="text-textMain p-1 rounded-full hover:bg-gray-100 transition-colors">
                <span class="material-icons-outlined">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path
                            d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                    </svg>
                </span>
            </button>
        </div>
    </nav>
    <header class="relative" data-purpose="profile-header">
        <!-- Cover Image -->
        <div class="h-[160px] w-full bg-gray-300 relative overflow-hidden">
            <img alt="Cover Photo" class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAummLalZBNrZsBW_JNMdX9w1qvMbhT9ShdZw1RRnl7KUtcnNXYdtI3f7-xce7JBbCqM_0HbQvWud5cQAKcHjHeshi74v8NbBCFQjk2Jh14EwR8eapOTNTgA_XaTELTKiTAqeRhoodbWQRUBjExtUCk61zSxmCxGEb2zjbXY1Vo7GV0JRaarrJbunekOwmfpNT0uRN6tF15UAEDZm226Iie23Fyf-LPqnsINzVNjBo43NIidKt4FqzS-zFw1FWfbNfR8rAOns_clbU">
        </div>
        <div class="px-5 pt-3 pb-6 relative bg-white">
            <!-- Avatar and Actions -->
            <div class="flex justify-between items-end -mt-[50px] mb-4">
                <!-- Avatar -->
                <div class="relative">
                    <div class="w-24 h-24 rounded-full border-1 border-white overflow-hidden bg-gray-200 shadow-md">
                        <img alt="Arash Rad Avatar" class="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7xFKxvqn2BcFtweoX3NhLCXXm21YF-GYs1ejBkZT6cTkkCOMLbf7-iHWoPo5VnlX1GT9VEj0slwWLxHnAMBXA6m6qHxXecN37KIu-25wVHCppycM_o76mNQLbmWJyAjYk8sJHpi3tjC_ClhxtZq8Jwl2xNUorXkcVBJrrqo9IplsQkZpbE7niTVO9du6zsQiPCbmvdUq3tXmN-R7DU8p5s7b1daY5K9x3zj9KQQFFe5Kb1m-Tjj4Rc-uEDZZ3tEcBJPQ-HbR4uD0">
                    </div>
                </div>
                <!-- Actions -->
                <div class="flex items-center gap-3 pb-2">
                    <button
                        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-textMain hover:bg-gray-50 transition-colors">
                        <span class="material-icons-outlined text-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-500Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm240-360v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q14 4 27.5 8.5T593-772q-15 14-27 30.5T545-706q-15-7-31.5-10.5T480-720q-66 0-113 47t-47 113v280h320v-112q18 11 38 18t42 11v83h80v80H160Z"/></svg>
                        </span>
                    </button>
                    <button
                        class="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium text-sm transition-colors shadow-sm">
                        دنبال کردن
                    </button>
                </div>
            </div>
            <!-- Name & Handle -->
            <div class="mb-3">
                <div class="flex items-center gap-1">
                    <h2 class="text-2xl font-bold text-textMain">آرش راد</h2>
                    <span class="material-icons fill-secondary text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z"/></g></svg>
                    </span>
                </div>
                <p class="text-textSub text-sm">@arash_rad</p>
            </div>
            <!-- Bio -->
            <p class="text-textMain text-sm leading-relaxed mb-4">
                علاقه‌مند به کشف فضاهای شهری و تجربه‌های جدید.<br>
                راهنمای محلی در حوزه کافه‌گردی و هنر مدرن. 📍 تهران
            </p>
            <!-- Meta Info (Join date & Link) -->
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-textSub mb-6 font-medium">
                <div class="flex items-center gap-1">
                    <span class="material-icons-outlined">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
                    </span>
                    <span>عضویت از فروردین ۱۴۰۱</span>
                </div>
                <a class="flex items-center gap-1 text-brand hover:underline" href="#">
                    <span class="material-icons-outlined text-[16px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
                    </span>
                    <span dir="ltr">deedras.ir/arash</span>
                </a>
            </div>
            <!-- Stats (Dividing lines style) -->
            <div class="px-4 mt-6 flex justify-around border-t border-border-outline/50 pt-4" data-purpose="user-stats">
                <div class="text-center flex-1">
                    <div class="text-lg font-bold">۴۲</div>
                    <div class="text-xs text-on-surface-variant mt-1">تجربه‌ها</div>
                </div>
                <div class="text-center flex-1 border-r border-l border-border-outline/50">
                    <div class="text-lg font-bold">۱.۲k</div>
                    <div class="text-xs text-on-surface-variant mt-1">دنبال‌کننده</div>
                </div>
                <div class="text-center flex-1">
                    <div class="text-lg font-bold">۸۵۰</div>
                    <div class="text-xs text-on-surface-variant mt-1">دنبال‌شونده</div>
                </div>
            </div>
        </div>
    </header>
    <div class="flex border-b border-border bg-white sticky top-[53px] z-40" data-purpose="profile-tabs">
        <button class="flex-1 py-3 text-sm font-bold text-primary border-b-2 border-primary text-center">
            تجربه‌ها
        </button>
        <button class="flex-1 py-3 text-sm font-medium text-textSub hover:text-textMain text-center transition-colors">
            ذخیره‌ها
        </button>
        <button class="flex-1 py-3 text-sm font-medium text-textSub hover:text-textMain text-center transition-colors">
            نظرات
        </button>
    </div>
    <main class="pb-24">
        <!-- Feed: Experience Cards -->
        <section class="space-y-px bg-outline-variant/10">
            <ReviewsReviewCardMobile :experience="{
                id: 'exp-123',
                user: {
                    name: 'سارا احمدی',
                    avatar: '/img/avatar/ionibowcher.png',
                    verified: true
                },
                rating: 4.5,
                timeAgo: '۲ ساعت پیش',
                text: 'امروز برای صبحانه رفتم کافه ونوس. فضای داخلی فوق‌العاده دنج بود و برخورد پرسنل هم خیلی محترمانه. پنکیک‌هاشون رو حتما پیشنهاد می‌کنم! 🥞☕️',
                image: '/img/biz/review-image.png',
                business: {
                    id: 'cafe-venus',
                    name: 'کافه رستوران ونوس',
                    logo: '/img/biz/4.webp',
                    rating: 4.8,
                    category: 'کافه و رستوران',
                    location: 'ولیعصر'
                },
                stats: {
                    useful: 243,
                    comments: 3,
                    reposts: 1
                }
            }" />
            <!-- Suggested Users (Edge-to-Edge) -->
            <section class="bg-surface-container-low py-8 overflow-hidden">
                <div class="px-margin-mobile flex items-center justify-between mb-4">
                    <h3 class="font-headline-md text-headline-md text-on-background">پیشنهاد برای شما</h3>
                    <button class="text-secondary font-label-md">مشاهده همه</button>
                </div>
                <div class="flex overflow-x-auto gap-4 px-margin-mobile hide-scrollbar">
                    <!-- User Card 1 -->
                    <div class="w-48 bg-background p-4 rounded-3xl flex flex-col items-center flex-shrink-0 shadow-sm">
                        <div class="w-20 h-20 rounded-full overflow-hidden mb-3">
                            <img class="w-full h-full object-cover"
                                data-alt="A portrait of a creative professional woman with glasses, smiling warmly. The photo has a soft-focus architectural background and a professional, light-filled aesthetic consistent with the Didras brand."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCISHgQDs3DCxLiBupHEIRmMywBVDZOethrp7r1bFLVcGRq_D-GuQsFZpUOFL1ks2xrNp6lvWMVFgtYh3pdBGX0jE3VNDadVlk1EP2N046H7FAs3afZrV6Wo5UI5y5WDJV274u2yT1vdlVV4WbLFomtKoh7795Y8X8S87YNQd7tLaGYYKtSbf2BjhzRMtn7Sv2zoeaf3dMwKvvUvBfsLzfOhQN0KxPHoIUTamQrgpwp2gzSZAmVEnsOLlvqwUXcyUnkJSATqmUX0zc">
                        </div>
                        <p class="font-label-md text-label-md text-on-background">سارا احمدی</p>
                        <p class="font-label-sm text-label-sm text-on-surface-variant mb-4">متخصص معماری</p>
                        <button
                            class="w-full py-2 bg-primary text-on-primary rounded-full font-label-md active:scale-95 transition-transform">دنبال
                            کردن</button>
                    </div>
                    <!-- User Card 2 -->
                    <div class="w-48 bg-background p-4 rounded-3xl flex flex-col items-center flex-shrink-0 shadow-sm">
                        <div class="w-20 h-20 rounded-full overflow-hidden mb-3">
                            <img class="w-full h-full object-cover"
                                data-alt="A portrait of a young man with a camera, a professional photographer lifestyle shot. Bright natural lighting, outdoors, premium social media style."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIWrjzjoOz8EI3vcnxeu4mI7G3KE3qBPZGSY4-4Im9IWHX48m60mGXSc6h-9P0-5Ud1DSVBo3k1JB8E4l4RD0x-xXM-IDzQlOKU60eCGylme8JluuS3GUegHURHtJLBDn1CUxNLRQEZIV5Svip08IUuvEx-rBSZzRfcIN2WnBZgldAGjVQ3Txfojcf-oHcHh_P_pCI7rIA5tN9nfVBE9ejpmrsfmv4KTieM53IG8ElwcFD7TGjt-WcRoNFbefkB4pWhgDmPhDQ0o0">
                        </div>
                        <p class="font-label-md text-label-md text-on-background">نیما راد</p>
                        <p class="font-label-sm text-label-sm text-on-surface-variant mb-4">عکاس شهر</p>
                        <button
                            class="w-full py-2 bg-primary text-on-primary rounded-full font-label-md active:scale-95 transition-transform">دنبال
                            کردن</button>
                    </div>
                </div>
            </section>
            
        </section>
    </main>
</template>