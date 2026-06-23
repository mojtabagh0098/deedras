<script setup>
const bottomSheet = ref(false);
const actionsBottomSheet = ref(false)
</script>
<template>
    <!-- Mobile App Bar (PWA Style) -->
    <nav class="fixed top-0 left-0 w-full z-50 transition-all bg-transparent bg-gradient-to-b from-black/50 to-transparent text-white">
        <div class="flex items-center justify-between px-4 h-14">
            <button class="p-2 rounded-full backdrop-blur-sm bg-black/20 flex items-center justify-center">
                <span class="material-symbols-outlined fill-white text-[24px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
                </span>
            </button>
            <div class="flex items-center gap-3">
                <button class="p-2 rounded-full backdrop-blur-sm bg-black/20  flex items-center justify-center">
                    <span class="material-symbols-outlined fill-white text-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                            <path
                                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                    </span>
                </button>
                <button class="p-2 rounded-full backdrop-blur-sm bg-black/20 flex items-center justify-center">
                    <span class="material-symbols-outlined fill-white text-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                            <path
                                d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </nav>
    <!-- Hero Section (Cover Image) -->
    <div class="relative w-full h-64 bg-slate-200">
        <img alt="Cover" class="w-full h-full object-cover" src="/img/biz/1.webp" />
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent h-full w-full">
        </div>
    </div>
    <!-- Main Content Area -->
    <main
        class="relative z-10 px-margin-mobile rounded-t-3xl -mt-8 pt-8 pb-6 bg-background bottom-sheet-radius flex flex-col gap-6 max-w-md mx-auto w-full shadow-[0_-8px_20px_rgba(0,0,0,0.1)]">
        <!-- Profile Header Info -->
        <div class="flex flex-col items-center relative">
            <!-- Avatar Overlapping -->
            <div
                class="absolute -top-20 right-0 left-0 mx-auto w-24 h-24 rounded-full border-4 border-background overflow-hidden shadow-sm bg-surface-container-lowest shrink-0 z-20">
                <img alt="Company Logo" class="w-full h-full object-cover" src="/img/biz/1.webp" />
            </div>
            <h1 class="text-2xl font-bold mt-3 text-on-background tracking-tight text-center">کافه رستوران بلک‌برن</h1>
            <p class="text-on-surface-variant text-sm mt-1 flex items-center justify-center gap-1.5">
                <span class="font-medium text-primary">رستوران و کافه</span>
                <span>•</span>
                <span class="flex items-center gap-0.5">
                    <span class="material-symbols-outlined text-[14px]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px">
                            <path
                                d="m347-72-75-124-141-32 13-144-96-108 96-108-13-144 141-32 75-124 133 57 133-57 75 124 141 32-13 144 96 108-96 108 13 144-141 32-75 124-133-57-133 57Zm29-91 104-44 104 44 58-97 110-25-10-111 74-84-74-84 10-111-110-25-58-97-104 44-104-44-58 97-110 24 10 112-74 84 75 84-11 112 110 25 58 96Zm104-317Zm-51 144 238-237-51-51-187 186-85-84-51 51 136 135Z" />
                        </svg>
                    </span>
                    نیاوران
                </span>
            </p>
            <!-- Stats row -->
            <div
                class="flex items-center justify-center gap-4 mt-3 w-full bg-surface-container-lowest/50 py-2 rounded-xl backdrop-blur-sm">
                <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined fill-star-rating icon-fill text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
                            viewBox="0 0 24 24" width="24px">
                            <g>
                                <g>
                                    <path d="M0,0h24v24H0V0z" fill="none" />
                                </g>
                            </g>
                            <g>
                                <path
                                    d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M9.58,10H5.12 c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81 c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6c0.79-0.57,0.39-1.81-0.58-1.81h-4.46l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0 L9.58,10z" />
                            </g>
                        </svg>
                    </span>
                    <span class="font-bold text-base text-on-background">۴.۸</span>
                    <span class="text-on-surface-variant text-xs">(۱۲۴)</span>
                </div>
                <div class="w-px h-4 bg-outline-variant"></div>
                <div class="flex items-center gap-1 text-on-surface-variant text-xs">
                    <span class="material-symbols-outlined text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                    </span>
                    <span class="font-medium">۸.۵k</span>
                </div>
                <div class="w-px h-4 bg-outline-variant"></div>
                <div class="flex items-center gap-1 text-primary text-xs font-semibold">
                    <span class="material-symbols-outlined text-sm fill-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                            <path
                                d="m429-438-60-59q-11-11-25-11t-25 11q-11 11-11 25.5t11 25.5l85 85q11 11 25 11t25-11l187-187q11-11 11-25.5T641-599q-11-11-25-11t-25 11L429-438ZM331-99l-59-97-110-25q-14-3-22-13.5t-6-24.5l10-113-75-84q-9-11-9-24t9-24l75-84-10-113q-2-14 6-24.5t22-13.5l110-25 59-97q7-11 19.5-15.5t25.5.5l104 45 104-45q13-5 25.5-.5T629-861l59 97 110 25q14 3 22 13.5t6 24.5l-10 113 75 84q9 11 9 24t-9 24l-75 84 10 113q2 14-6 24.5T798-221l-110 25-59 97q-7 11-19.5 15.5T584-84l-104-45-104 45q-13 5-25.5.5T331-99Zm45-64 104-44 104 44 58-97 110-25-10-111 74-84-74-84 10-111-110-25-58-97-104 44-104-44-58 97-110 24 10 112-74 84 75 84-11 112 110 25 58 96Zm104-317Z" />
                        </svg>
                    </span>
                    تایید شده
                </div>
            </div>
            <button
                class="mt-4 bg-primary hover:bg-blue-800 text-white w-full py-3 rounded-full font-label-md text-sm transition-all shadow-md flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-[18px] fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                        <path
                            d="M444-444H276q-15.3 0-25.65-10.29Q240-464.58 240-479.79t10.35-25.71Q260.7-516 276-516h168v-168q0-15.3 10.29-25.65Q464.58-720 479.79-720t25.71 10.35Q516-699.3 516-684v168h168q15.3 0 25.65 10.29Q720-495.42 720-480.21t-10.35 25.71Q699.3-444 684-444H516v168q0 15.3-10.29 25.65Q495.42-240 480.21-240t-25.71-10.35Q444-260.7 444-276v-168Z" />
                    </svg>
                </span> دنبال کردن
            </button>
        </div>
        <!-- Action Grid (Horizontal Scroll Pills) -->
        <div class="flex overflow-x-auto hide-scrollbar gap-3 pb-2 -mx-margin-mobile px-margin-mobile snap-x">
            <button
                class="snap-start flex-shrink-0 flex items-center gap-2 bg-surface-container-lowest border border-border-light text-on-background py-2 px-4 rounded-full shadow-sm">
                <span class="material-symbols-outlined fill-primary text-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                        <path
                            d="M408-480h120v41q0 11.67 11.5 15.83 11.5 4.17 19.68-4.01L623-491q11-10.64 11-24.82T623-541l-63.82-63.82Q551-613 539.5-608.83 528-604.67 528-593v41H371.76q-14.76 0-25.26 10.35Q336-531.3 336-516v96q0 15.3 10.29 25.65Q356.58-384 371.79-384t25.71-10.35Q408-404.7 408-420v-60Zm72 384q-13.64 0-26.82-5T429-117L117-429q-11-11-16-24.18T96-480q0-13.64 5-26.82T117-531l312-312q11-11 24.18-16t26.82-5q13.64 0 26.82 5T531-843l312 312q11 11 16 24.18t5 26.82q0 13.64-5 26.82T843-429L531-117q-11 11-24.18 16T480-96ZM324-324l156 156 312-312-312-312-312 312 156 156Zm156-156Z" />
                    </svg>
                </span>
                <span class="font-label-sm font-semibold text-xs">مسیریابی</span>
            </button>
            <button
                class="snap-start flex-shrink-0 flex items-center gap-2 bg-surface-container-lowest border border-border-light text-on-background py-2 px-4 rounded-full shadow-sm">
                <span class="material-symbols-outlined fill-primary text-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                        <path
                            d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" />
                    </svg>
                </span>
                <span class="font-label-sm font-semibold text-xs">تماس</span>
            </button>
            <button
                class="snap-start flex-shrink-0 flex items-center gap-2 bg-surface-container-lowest border border-border-light text-on-background py-2 px-4 rounded-full shadow-sm">
                <span class="material-symbols-outlined fill-primary text-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                        <path
                            d="M331-126q-70-30-122.5-82.5T126-331q-30-70-30-149.5t30-149q30-69.5 82.5-122T331-834q70-30 149.5-30t149 30q69.5 30 122 82.5t82.5 122q30 69.5 30 149T834-331q-30 70-82.5 122.5t-122 82.5q-69.5 30-149 30T331-126Zm149-45q17-17 34-63.5T540-336H420q9 55 26 101.5t34 63.5Zm-91-10q-14-30-24.5-69T347-336H204q29 57 77 97.5T389-181Zm182 0q60-17 108-57.5t77-97.5H613q-7 47-17.5 86T571-181ZM177-408h161q-2-19-2.5-37.5T335-482q0-18 .5-35.5T338-552H177q-5 19-7 36.5t-2 35.5q0 18 2 35.5t7 36.5Zm234 0h138q2-20 2.5-37.5t.5-34.5q0-17-.5-35t-2.5-37H411q-2 19-2.5 37t-.5 35q0 17 .5 35t2.5 37Zm211 0h161q5-19 7-36.5t2-35.5q0-18-2-36t-7-36H622q2 19 2.5 37.5t.5 36.5q0 18-.5 35.5T622-408Zm-9-216h143q-29-57-77-97.5T571-779q14 30 24.5 69t17.5 86Zm-193 0h120q-9-55-26-101.5T480-789q-17 17-34 63.5T420-624Zm-216 0h143q7-47 17.5-86t24.5-69q-60 17-108 57.5T204-624Z" />
                    </svg>
                </span>
                <span class="font-label-sm font-semibold text-xs">وب‌سایت</span>
            </button>
            <button
                class="snap-start flex-shrink-0 flex items-center gap-2 bg-surface-container-lowest border border-border-light text-on-background py-2 px-4 rounded-full shadow-sm">
                <span class="material-symbols-outlined fill-primary text-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                        <path
                            d="M256-288q49.42 0 96.21 11Q399-266 444-246v-454q-43-23-89.53-33.5-46.52-10.5-94.06-10.5-36.41 0-72.41 6t-68 21.98V-264q32-14 66.5-19t69.5-5Zm260 42q45-20 91.79-31 46.79-11 96.21-11 35 0 69.5 5t66.5 19v-452q-35-13-72.49-20.5Q730.02-744 692-744q-46 0-90 11.5T516-700v454Zm-59.5 89q-10.5-6-21.72-12-39.78-23-83.76-35-43.99-12-90.02-12-32 0-64.5 4T134-195q-31 14-58.5 3.5T48-229v-503q0-14 8-25.5T76-776q42-24 88.38-32 46.38-8 94.62-8 58 0 110.5 12T480-762q58-30 110.5-42T701-816q44.47 0 87.24 7.5Q831-801 870-783q17 8 30 20.5t13 30.5v503q0 24-23.5 35t-50.5 1q-35-13-71.5-18t-73.5-5q-44.66 0-87.33 11.5T526-169q-11 7-22 12.5t-24 5.5q-13 0-23.5-6ZM282-491Zm282-132q0-14 8.5-25t22.5-14q25-5 49.25-8 24.26-3 51.02-3 16.73 0 34.55 1.67 17.82 1.66 35.18 4.33 12 2 19.5 11.54T792-634q0 17-12 28t-29 8.71q-14-1.71-27.8-3.21t-28.05-1.5q-23.15 0-44.65 2.5t-43.38 8.37Q590-586 577-596t-13-27Zm2 235q0-14 8.5-25t22.5-14q25-5 49.25-8 24.26-3 51.02-3 16.73 0 34.55 1.67 17.82 1.66 35.18 4.33 12 2 19.5 11.54T794-399q0 17-12 28t-29 8.71q-14-1.71-27.8-3.21t-28.05-1.5q-23.15 0-44.65 2.5t-43.38 8.37Q592-351 579-361t-13-27Zm0-117q0-14 8.5-25t22.5-14q25-5 49.25-8 24.26-3 51.02-3 16.73 0 34.55 1.67 17.82 1.66 35.18 4.33 12 2 19.5 11.54T794-516q0 17-12 28t-29 8.71q-14-1.71-27.8-3.21t-28.05-1.5q-23.15 0-44.65 2.5t-43.38 8.37Q592-468 579-478t-13-27Z" />
                    </svg>
                </span>
                <span class="font-label-sm font-semibold text-xs">منو</span>
            </button>
        </div>
        <!-- Trust Index Card -->
        <div
            class="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex items-center justify-between border border-border-light/50">
            <div>
                <h3 class="font-bold text-sm text-on-background mb-1">شاخص اعتماد تعاملی</h3>
                <p class="text-[11px] text-on-surface-variant max-w-[180px] leading-snug">
                    این کسب و کار دارای سطح بالایی از تایید کاربران واقعی است.
                </p>
            </div>
            <div class="donut-chart shrink-0">
                <div class="relative z-10 flex flex-col items-center">
                    <span class="text-xl font-bold text-primary leading-none">۹۰٪</span>
                    <span class="text-[9px] font-bold text-success uppercase mt-0.5">عالی</span>
                </div>
            </div>
        </div>
        <!-- Location & Hours Stack -->
        <div
            class="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light/50 flex flex-col gap-4">
            <div class="w-full h-24 rounded-xl bg-surface-container overflow-hidden relative">
                <img alt="Map" class="w-full h-full object-cover opacity-60 grayscale mix-blend-multiply"
                    src="/img/map.png" />
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="material-symbols-outlined fill-primary text-2xl drop-shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                            <path
                                d="M480-191q119-107 179.5-197T720-549q0-105-68.5-174T480-792q-103 0-171.5 69T240-549q0 71 60.5 161T480-191Zm-24.5 67.5Q444-128 433-137q-40-35-86.5-82T260-320q-40-54-66-112.5T168-549q0-134 89-224.5T480-864q133 0 222.5 90.5T792-549q0 58-26.5 117t-66 113q-39.5 54-86 100.5T527-137q-11 9-22.5 13.5T480-119q-13 0-24.5-4.5ZM480-552Zm51 51q21-21 21-51t-21-51q-21-21-51-21t-51 21q-21 21-21 51t21 51q21 21 51 21t51-21Z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="flex items-start gap-2.5 text-on-surface-variant px-1">
                <span class="material-symbols-outlined text-[18px] fill-primary shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" />
                    </svg>
                </span>
                <span class="font-body-md text-xs leading-relaxed">تهران، نیاوران، خیابان باهنر، بعد از چهارراه
                    کامرانیه، پلاک ۱۲</span>
            </div>
            <hr class="border-border-light border-dashed" />
            <div class="flex justify-between items-center px-1">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px] fill-success">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                    </span>
                    <span class="text-success text-xs font-semibold">باز است</span>
                    <span class="text-outline text-[10px]">• تا ۲۳:۳۰</span>
                </div>
                <span class="material-symbols-outlined fill-on-surface-variant text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                    </svg>
                </span>
            </div>
        </div>
        <!-- AI Analysis Carousel -->
        <!-- Smart AI Summary (Premium Card) -->
        <div
            class="bg-[radial-gradient(circle_at_top_right,_#EEF2FF,_#FDF2F8)] rounded-2xl p-4 shadow-sm border border-primary/10 flex flex-col gap-4 relative overflow-hidden">
            <div class="relative z-10">
                <div class="flex items-center gap-2 mb-3">
                    <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                        <span class="material-symbols-outlined fill-white text-[18px]">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px"
                                viewBox="0 0 24 24" width="18px">
                                <g>
                                    <rect fill="none" height="24" width="24" x="0"></rect>
                                </g>
                                <g>
                                    <g>
                                        <polygon
                                            points="19,9 20.25,6.25 23,5 20.25,3.75 19,1 17.75,3.75 15,5 17.75,6.25">
                                        </polygon>
                                        <polygon
                                            points="19,15 17.75,17.75 15,19 17.75,20.25 19,23 20.25,20.25 23,19 20.25,17.75">
                                        </polygon>
                                        <path
                                            d="M11.5,9.5L9,4L6.5,9.5L1,12l5.5,2.5L9,20l2.5-5.5L17,12L11.5,9.5z M9.99,12.99L9,15.17l-0.99-2.18L5.83,12l2.18-0.99 L9,8.83l0.99,2.18L12.17,12L9.99,12.99z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div>
                        <h3 class="font-bold text-sm text-on-background flex items-center gap-1">خلاصه هوشمند دیدرس</h3>
                        <p class="text-[10px] text-on-surface-variant">تحلیل شده از ۱۲۴ تجربه کاربران</p>
                    </div>
                </div>
                <p
                    class="text-xs text-on-background leading-relaxed mb-4 bg-surface/50 p-3 rounded-xl backdrop-blur-sm border border-white/50">
                    بیشتر کاربران فضای دنج و مناسب برای کار با لپ‌تاپ را تحسین کرده‌اند. کیفیت قهوه‌ها و برخورد پرسنل
                    بسیار مثبت ارزیابی شده است، اما برخی به قیمت‌های نسبتاً بالا و شلوغی در عصرهای آخر هفته اشاره
                    کرده‌اند.
                </p>
                <div class="bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-white/50 shadow-sm">
                    <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between items-center text-[10px]">
                                <span class="font-bold text-on-background">فضای کار</span>
                                <span class="font-bold text-secondary">۸۵٪</span>
                            </div>
                            <div class="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                                <div class="bg-secondary h-1.5 rounded-full" style="width: 85%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between items-center text-[10px]">
                                <span class="font-bold text-on-background">کیفیت قهوه</span>
                                <span class="font-bold text-secondary">۷۸٪</span>
                            </div>
                            <div class="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                                <div class="bg-secondary h-1.5 rounded-full" style="width: 78%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between items-center text-[10px]">
                                <span class="font-bold text-on-background">برخورد پرسنل</span>
                                <span class="font-bold text-secondary">۶۵٪</span>
                            </div>
                            <div class="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                                <div class="bg-secondary h-1.5 rounded-full" style="width: 65%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex justify-between items-center text-[10px]">
                                <span class="font-bold text-on-background">ارزش قیمت</span>
                                <span class="font-bold text-error">۴۲٪</span>
                            </div>
                            <div class="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                                <div class="bg-error h-1.5 rounded-full" style="width: 42%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Performance Metrics (Compact 2x2) -->
        <div class="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light/50">
            <h3 class="font-bold text-sm text-on-background mb-3 flex items-center gap-1.5">
                <span class="material-symbols-outlined fill-secondary text-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px">
                        <path
                            d="M192-192v-96l72-72v168h-72Zm126 0v-222l66-66 6 6v282h-72Zm126 0v-228l72 72v156h-72Zm126 0v-186l72-72v258h-72Zm126 0v-312l72-72v384h-72ZM192-378v-102l192-192 144 144 240-240v102L528-426 384-570 192-378Z" />
                    </svg>
                </span>
                معیارهای عملکرد
            </h3>
            <div class="grid grid-cols-2 gap-2">
                <div class="bg-surface rounded-xl p-2 flex items-center gap-2">
                    <div
                        class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M864-96 720-240H360q-29.7 0-50.85-21.15Q288-282.3 288-312v-48h384q29.7 0 50.85-21.15Q744-402.3 744-432v-240h48q29.7 0 50.85 21.15Q864-629.7 864-600v504ZM168-462l42-42h390v-288H168v330ZM96-288v-504q0-29.7 21.15-50.85Q138.3-864 168-864h432q29.7 0 50.85 21.15Q672-821.7 672-792v288q0 29.7-21.15 50.85Q629.7-432 600-432H240L96-288Zm72-216v-288 288Z" />
                            </svg>
                        </span>
                    </div>
                    <div>
                        <div class="font-bold text-sm text-on-background">۹۵٪</div>
                        <div class="text-[9px] text-on-surface-variant font-medium">پاسخگویی</div>
                    </div>
                </div>
                <div class="bg-surface rounded-xl p-2 flex items-center gap-2">
                    <div
                        class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                                <path
                                    d="M480-144q-70 0-131.13-26.6-61.14-26.6-106.4-71.87-45.27-45.26-71.87-106.4Q144-410 144-480t26.6-131.13q26.6-61.14 71.87-106.4 45.26-45.27 106.4-71.87Q410-816 480-816q81 0 149.5 35T744-686v-130h72v240H576v-72h107q-35.91-44.8-88.45-70.4Q542-744 480-744q-109 0-186.5 77.5T216-480q0 109 77.5 186.5T480-216q109 0 186.5-77.5T744-480h72q0 140-98 238t-238 98Zm100-200L444-480v-192h72v162l115 115-51 51Z" />
                            </svg>
                        </span>
                    </div>
                    <div>
                        <div class="font-bold text-sm text-on-background">۲۴ ساعت</div>
                        <div class="text-[9px] text-on-surface-variant font-medium">زمان پاسخ</div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-border-light my-2" />
        <!-- Feed Header -->
        <h2 class="font-bold text-lg text-on-background px-1">تجربیات مشتریان</h2>
        <!-- Feed -->
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
    </main>
    <!-- Sticky Bottom CTA Bar -->
    <div
        class="fixed bottom-0 left-0 w-full bg-surface-container-lowest/95 backdrop-blur-md border-t border-border-light p-4 z-40 shadow-[0_-8px_16px_rgba(0,0,0,0.05)] pb-safe">
        <div class="max-w-[430px] mx-auto">
            <button @click="bottomSheet = true"
                class="w-full bg-primary hover:bg-primary-container text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2">
                <span>✍️</span> تجربه خود را ثبت کنید
            </button>
        </div>
    </div>
    <div class="bottom-sheet-overlay fixed inset-0 z-50 opacity-0 pointer-events-none transition-opacity duration-300">
    </div>
    <!-- Log Experience Bottom Sheet -->
    <div :class="{ 'open': bottomSheet }"
        class="bottom-sheet fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[90vh] pb-safe">
        <!-- Handle -->
        <div class="w-full flex justify-center pt-3 pb-2 shrink-0">
            <div class="w-12 h-1.5 bg-outline-variant/50 rounded-full"></div>
        </div>
        <!-- Header -->
        <div class="px-5 pb-3 border-b border-border-light flex items-center justify-between shrink-0">
            <h2 class="font-bold text-lg text-on-background">ثبت تجربه جدید</h2>
            <button @click="bottomSheet = false" class="p-1 rounded-full bg-surface-container fill-on-surface-variant">
                <span class="material-symbols-outlined text-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                        <path
                            d="M480-429 316-265q-11 11-25 10.5T266-266q-11-11-11-25.5t11-25.5l163-163-164-164q-11-11-10.5-25.5T266-695q11-11 25.5-11t25.5 11l163 164 164-164q11-11 25.5-11t25.5 11q11 11 11 25.5T695-644L531-480l164 164q11 11 11 25t-11 25q-11 11-25.5 11T644-266L480-429Z" />
                    </svg>
                </span>
            </button>
        </div>
        <!-- Scrollable Content -->
        <div class="overflow-y-auto px-5 py-4 flex flex-col gap-6 hide-scrollbar">
            <!-- Star Rating -->
            <div class="flex flex-col items-center gap-3">
                <p class="text-sm font-semibold text-on-background">امتیاز شما به کافه بلک‌برن</p>
                <div class="flex gap-2 text-outline-variant">

                    <span
                        class="material-symbols-outlined text-[40px] cursor-pointer hover:fill-star-rating hover:icon-fill transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                        </svg>
                    </span>

                    <span
                        class="material-symbols-outlined text-[40px] cursor-pointer hover:fill-star-rating hover:icon-fill transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                        </svg>
                    </span>

                    <span
                        class="material-symbols-outlined text-[40px] cursor-pointer hover:fill-star-rating hover:icon-fill transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                        </svg>
                    </span>

                    <span
                        class="material-symbols-outlined text-[40px] cursor-pointer hover:fill-star-rating hover:icon-fill transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                        </svg>
                    </span>

                    <span
                        class="material-symbols-outlined text-[40px] cursor-pointer hover:fill-star-rating hover:icon-fill transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                        </svg>
                    </span>
                </div>
            </div>
            <!-- Strengths/Weaknesses Selection -->
            <div class="flex flex-col gap-2">
                <p class="text-xs font-semibold text-on-surface-variant mb-1">ویژگی‌های برجسته (انتخاب کنید)</p>
                <div class="flex flex-wrap gap-2">
                    <button
                        class="px-3 py-1.5 rounded-full border border-border-light text-xs text-on-background bg-surface flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px] text-secondary fill-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
                            </svg>
                        </span> فضای کار
                    </button>
                    <button
                        class="px-3 py-1.5 rounded-full border border-primary bg-primary/5 text-primary text-xs font-medium flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px] fill-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" />
                            </svg>
                        </span> کیفیت قهوه
                    </button>
                    <button
                        class="px-3 py-1.5 rounded-full border border-border-light text-xs text-on-background bg-surface flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px] fill-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
                            </svg>
                        </span> برخورد پرسنل
                    </button>
                    <button
                        class="px-3 py-1.5 rounded-full border border-border-light text-xs text-on-background bg-surface flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px] fill-error">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
                            </svg>
                        </span> قیمت بالا
                    </button>
                    <button
                        class="px-3 py-1.5 rounded-full border border-border-light text-xs text-on-background bg-surface flex items-center gap-1">
                        <span class="material-symbols-outlined text-[14px] fill-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="14px">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
                            </svg>
                        </span> اینترنت پرسرعت
                    </button>
                </div>
            </div>
            <!-- Write Review -->
            <div class="flex flex-col gap-2">
                <textarea
                    class="w-full bg-surface-container-low border border-border-light rounded-xl p-3 text-sm text-on-background focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                    placeholder="تجربه خود را با جزئیات بنویسید... (حداقل ۵۰ کاراکتر)" rows="4"></textarea>
            </div>
            <!-- Media Upload -->
            <div class="flex gap-3">
                <button
                    class="flex-1 flex flex-col items-center justify-center gap-2 py-4 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                    <span class="material-symbols-outlined text-[28px] fill-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px">
                            <path
                                d="M432-433ZM120-144q-29 0-50.5-21.5T48-216v-432q0-29 21.5-50.5T120-720h120l72-96h288v72H348l-72 96H120v432h624v-384h72v384q0 29-21.15 50.5T744-144H120Zm624-528v-72h-72v-72h72v-72h72v72h72v72h-72v72h-72ZM432-264q72 0 120-49t48-119q0-69-48-118.5T432-600q-72 0-120 49.5t-48 119q0 69.5 48 118.5t120 49Zm0-72q-42 0-69-28.13T336-433q0-39.9 27-67.45Q390-528 432-528t69 27.55q27 27.55 27 67.45 0 40.74-27 68.87Q474-336 432-336Z" />
                        </svg>
                    </span>
                    <span class="text-xs font-medium">افزودن عکس</span>
                </button>
                <button
                    class="flex-1 flex flex-col items-center justify-center gap-2 py-4 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                    <span class="material-symbols-outlined text-[28px] fill-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px">
                            <path
                                d="M216-192q-29 0-50.5-21.5T144-264v-432q0-29.7 21.5-50.85Q187-768 216-768h432q29.7 0 50.85 21.15Q720-725.7 720-696v168l144-144v384L720-432v168q0 29-21.15 50.5T648-192H216Zm0-72h432v-432H216v432Zm0 0v-432 432Z" />
                        </svg>
                    </span>
                    <span class="text-xs font-medium">افزودن ویدیو</span>
                </button>
            </div>
        </div>
        <!-- Sticky Footer of Bottom Sheet -->
        <div class="p-4 border-t border-border-light bg-surface-container-lowest shrink-0">
            <button
                class="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-sm shadow-md disabled:opacity-50 disabled:bg-outline-variant">
                ثبت و انتشار تجربه
            </button>
        </div>
    </div>
    <!-- Log Experience Bottom Sheet -->
    <div :class="{ 'open': bottomSheet }"
        class="bottom-sheet fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[90vh] pb-safe">
        <!-- Handle -->
        <div class="w-full flex justify-center pt-3 pb-2 shrink-0">
            <div class="w-12 h-1.5 bg-outline-variant/50 rounded-full"></div>
        </div>
        <!-- Header -->
        <div class="px-5 pb-3 border-b border-border-light flex items-center justify-between shrink-0">
            <h2 class="font-bold text-lg text-on-background">ثبت تجربه جدید</h2>
            <button @click="bottomSheet = false" class="p-1 rounded-full bg-surface-container fill-on-surface-variant">
                <span class="material-symbols-outlined text-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                        <path
                            d="M480-429 316-265q-11 11-25 10.5T266-266q-11-11-11-25.5t11-25.5l163-163-164-164q-11-11-10.5-25.5T266-695q11-11 25.5-11t25.5 11l163 164 164-164q11-11 25.5-11t25.5 11q11 11 11 25.5T695-644L531-480l164 164q11 11 11 25t-11 25q-11 11-25.5 11T644-266L480-429Z" />
                    </svg>
                </span>
            </button>
        </div>
        <!-- Scrollable Content -->
        <div class="overflow-y-auto px-5 py-4 flex flex-col gap-6 hide-scrollbar">
            
        </div>
    </div>
</template>

<style>
/* For iOS safe area at bottom */
.pb-safe {
    padding-bottom: max(12px, env(safe-area-inset-bottom));
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.icon-fill {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Donut Chart CSS */
.donut-chart {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: conic-gradient(theme('colors.primary') 90%, theme('colors.surface-container') 0);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.donut-chart::before {
    content: "";
    position: absolute;
    width: 72px;
    height: 72px;
    background-color: theme('colors.surface-container-lowest');
    border-radius: 50%;
}

/* Sticky Action Bar Overlay */
.sticky-action-bar {
    position: sticky;
    top: 0;
    z-index: 60;
    background: theme('colors.surface-container-lowest');
    border-bottom: 1px solid theme('colors.border-light');
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
}

/* In a real app, JS would toggle a class like .is-scrolled to show this */
.app-container.scrolled .sticky-action-bar {
    transform: translateY(0);
}

/* Bottom Sheet Styles */
.bottom-sheet-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
}

.bottom-sheet {
    transform: translateY(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Example class to open bottom sheet */
.bottom-sheet.open {
    transform: translateY(0);
}

.bottom-sheet-overlay+.open {
    opacity: 1;
    pointer-events: auto;
}
</style>