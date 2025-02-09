import { ref, computed } from "vue";
// import CollectBtnWide from "@/components/CollectBtnWide.vue";
import CategoryBtn from "@/components/CategoryBtn.vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const category = computed(() => {
    const param = route.params.category;
    return Array.isArray(param) ? param[0] : param; // 確保是 string
});
const keyword = ref(""); // 關鍵字
const selectedCity = ref("選擇想去的地區"); // 縣市選擇
const categories = {
    Attraction: "景點",
    Restaurant: "餐飲",
    Hotel: "旅宿",
    Event: "活動",
};
const cities = [
    "臺北市",
    "高雄市",
    "新北市",
    "臺中市",
    "臺南市",
    "桃園市",
    "宜蘭縣",
    "新竹縣",
    "苗栗縣",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "屏東縣",
    "臺東縣",
    "花蓮縣",
    "澎湖縣",
    "基隆市",
    "新竹市",
    "嘉義市",
    "連江縣",
    "金門縣",
];
const isOpen = ref(false); // 控制 dropdown 的開關狀態
// 切換 dropdown 顯示狀態
const toggleDropdown = (event) => {
    const target = event.target;
    isOpen.value = !isOpen.value;
};
// 選擇城市並關閉 dropdown
const selectCity = (city) => {
    selectedCity.value = city;
    isOpen.value = false;
};
const handleSetCategory = (newCategory) => {
    router.push({
        path: `/${newCategory}`,
        query: { ...route.query, page: 1 },
    });
};
const handleSearch = () => {
    if (selectedCity.value.trim() === "" && keyword.value.trim() === "")
        return;
    const city = selectedCity.value === "選擇想去的地區" ? "" : selectedCity.value;
    router.push({
        path: `/${category.value}`,
        query: Object.fromEntries(Object.entries({
            ...route.query, // 保留原有參數
            page: 1, // 重設頁碼
            city: city,
            keyword: keyword.value,
        }).filter(([_, value]) => value)),
    });
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['banner', 'banner', 'banner',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("h-auto md:h-[400px] bg-cover bg-center banner") },
        'data-category': ((__VLS_ctx.category)),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container min-h-[260px] h-full pt-[23px] pb-[12px] md:pb-[28px] flex flex-col justify-between items-start") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ("/Attraction"),
        ...{ class: ("inline-block hover:opacity-70 transition-opacity py-[3.5px] mb-2") },
    }));
    const __VLS_2 = __VLS_1({
        to: ("/Attraction"),
        ...{ class: ("inline-block hover:opacity-70 transition-opacity py-[3.5px] mb-2") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ class: ("h-[21px] md:h-[28px]") },
        src: ("/logo_white.svg"),
        alt: ("logo"),
    });
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("lg:px-[106px] w-full") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("hidden md:block text-[80px]/[106px] font-bold text-white drop-shadow-lg mb-3.5") },
    });
    (__VLS_ctx.categories[__VLS_ctx.category]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-wrap gap-3 mb-3 md:mb-4") },
    });
    // @ts-ignore
    /** @type { [typeof CategoryBtn, ] } */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(CategoryBtn, new CategoryBtn({
        ...{ 'onClick': {} },
        text: ("景點"),
        icon: ("camera"),
        active: ((__VLS_ctx.category === 'Attraction')),
    }));
    const __VLS_7 = __VLS_6({
        ...{ 'onClick': {} },
        text: ("景點"),
        icon: ("camera"),
        active: ((__VLS_ctx.category === 'Attraction')),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    let __VLS_11;
    const __VLS_12 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleSetCategory('Attraction');
        }
    };
    let __VLS_8;
    let __VLS_9;
    var __VLS_10;
    // @ts-ignore
    /** @type { [typeof CategoryBtn, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(CategoryBtn, new CategoryBtn({
        ...{ 'onClick': {} },
        text: ("餐飲"),
        icon: ("utensils"),
        active: ((__VLS_ctx.category === 'Restaurant')),
    }));
    const __VLS_14 = __VLS_13({
        ...{ 'onClick': {} },
        text: ("餐飲"),
        icon: ("utensils"),
        active: ((__VLS_ctx.category === 'Restaurant')),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleSetCategory('Restaurant');
        }
    };
    let __VLS_15;
    let __VLS_16;
    var __VLS_17;
    // @ts-ignore
    /** @type { [typeof CategoryBtn, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(CategoryBtn, new CategoryBtn({
        ...{ 'onClick': {} },
        text: ("旅宿"),
        icon: ("house-chimney-window"),
        active: ((__VLS_ctx.category === 'Hotel')),
    }));
    const __VLS_21 = __VLS_20({
        ...{ 'onClick': {} },
        text: ("旅宿"),
        icon: ("house-chimney-window"),
        active: ((__VLS_ctx.category === 'Hotel')),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    let __VLS_25;
    const __VLS_26 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleSetCategory('Hotel');
        }
    };
    let __VLS_22;
    let __VLS_23;
    var __VLS_24;
    // @ts-ignore
    /** @type { [typeof CategoryBtn, ] } */ ;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(CategoryBtn, new CategoryBtn({
        ...{ 'onClick': {} },
        text: ("活動"),
        icon: ("palette"),
        active: ((__VLS_ctx.category === 'Event')),
    }));
    const __VLS_28 = __VLS_27({
        ...{ 'onClick': {} },
        text: ("活動"),
        icon: ("palette"),
        active: ((__VLS_ctx.category === 'Event')),
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    let __VLS_32;
    const __VLS_33 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleSetCategory('Event');
        }
    };
    let __VLS_29;
    let __VLS_30;
    var __VLS_31;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-12 gap-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("dropdown border-0 col-span-12 md:col-span-5") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (__VLS_ctx.toggleDropdown) },
        role: ("button"),
        ...{ class: (([
                'btn hover:bg-white hover:border-blue h-auto flex gap-2 justify-start items-center bg-white text-gray font-normal py-[12px] md:py-[17px] px-[12px] w-full',
                { 'border-blue': __VLS_ctx.isOpen },
            ])) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-[24px] h-[24px] flex justify-center items-center") },
    });
    const __VLS_34 = {}.FontAwesomeIcon;
    /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({
        icon: ("location-dot"),
        ...{ class: (([
                'w-[20px] h-[20px]',
                { 'text-blue': __VLS_ctx.selectedCity !== '選擇想去的地區' },
            ])) },
    }));
    const __VLS_36 = __VLS_35({
        icon: ("location-dot"),
        ...{ class: (([
                'w-[20px] h-[20px]',
                { 'text-blue': __VLS_ctx.selectedCity !== '選擇想去的地區' },
            ])) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: (([
                'text-[14px]/[19px]',
                { 'text-black': __VLS_ctx.selectedCity !== '選擇想去的地區' },
            ])) },
    });
    (__VLS_ctx.selectedCity);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("absolute mt-3 py-2 px-0 w-full md:w-[200px] h-[256px] overflow-y-scroll bottom-100 left-0 bg-base-100 rounded-lg z-[1] shadow-md") },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isOpen) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectCity('選擇想去的地區');
            } },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("flex items-center gap-2 w-full rounded-none p-3 hover:bg-light_blue text-gray") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-[24px] h-[24px] flex justify-center items-center") },
    });
    const __VLS_40 = {}.FontAwesomeIcon;
    /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
        icon: ("location-dot"),
        ...{ class: ("w-[20px] h-[20px]") },
    }));
    const __VLS_42 = __VLS_41({
        icon: ("location-dot"),
        ...{ class: ("w-[20px] h-[20px]") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-[14px]/[19px]") },
    });
    for (const [city] of __VLS_getVForSourceType((__VLS_ctx.cities))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.selectCity(city);
                } },
            key: ((city)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ class: ("flex items-center gap-2 w-full rounded-none p-3 hover:bg-light_blue") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-[24px] h-[24px] flex justify-center items-center") },
        });
        const __VLS_46 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
            icon: ("location-dot"),
            ...{ class: ("w-[20px] h-[20px] text-blue") },
        }));
        const __VLS_48 = __VLS_47({
            icon: ("location-dot"),
            ...{ class: ("w-[20px] h-[20px] text-blue") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_47));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-[14px]/[19px]") },
        });
        (city);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.keyword)),
        type: ("text"),
        placeholder: ("輸入景點名稱"),
        ...{ class: ("btn col-span-8 md:col-span-5 focus:outline-none focus:border-blue hover:bg-white hover:border-blue h-auto bg-white placeholder:text-gray font-normal pt-[15px] md:pt-[20px] pb-[14px] md:pb-[19px] px-[20px] w-full text-left text-[14px]/[19px] text-black") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.handleSearch) },
        ...{ class: ("btn flex items-center h-full col-span-4 md:col-span-2 gap-2 font-normal px-[12px] py-[8px] bg-gray text-white border-0 hover:bg-red rounded-lg duration-300") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-[20px] md:w-[24px] h-[20px] md:h-[24px] flex justify-center items-center") },
    });
    const __VLS_52 = {}.FontAwesomeIcon;
    /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
        icon: ("magnifying-glass"),
        ...{ class: ("w-[16px] md:w-[20px] h-[16px] md:h-[20px]") },
    }));
    const __VLS_54 = __VLS_53({
        icon: ("magnifying-glass"),
        ...{ class: ("w-[16px] md:w-[20px] h-[16px] md:h-[20px]") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("mr-2 text-[16px]/[21px] md:text-[18px]/[24px]") },
    });
    ['h-auto', 'md:h-[400px]', 'bg-cover', 'bg-center', 'banner', 'container', 'min-h-[260px]', 'h-full', 'pt-[23px]', 'pb-[12px]', 'md:pb-[28px]', 'flex', 'flex-col', 'justify-between', 'items-start', 'inline-block', 'hover:opacity-70', 'transition-opacity', 'py-[3.5px]', 'mb-2', 'h-[21px]', 'md:h-[28px]', 'lg:px-[106px]', 'w-full', 'hidden', 'md:block', 'text-[80px]/[106px]', 'font-bold', 'text-white', 'drop-shadow-lg', 'mb-3.5', 'flex', 'flex-wrap', 'gap-3', 'mb-3', 'md:mb-4', 'grid', 'grid-cols-12', 'gap-3', 'dropdown', 'border-0', 'col-span-12', 'md:col-span-5', 'btn', 'hover:bg-white', 'hover:border-blue', 'h-auto', 'flex', 'gap-2', 'justify-start', 'items-center', 'bg-white', 'text-gray', 'font-normal', 'py-[12px]', 'md:py-[17px]', 'px-[12px]', 'w-full', 'border-blue', 'w-[24px]', 'h-[24px]', 'flex', 'justify-center', 'items-center', 'w-[20px]', 'h-[20px]', 'text-blue', 'text-[14px]/[19px]', 'text-black', 'absolute', 'mt-3', 'py-2', 'px-0', 'w-full', 'md:w-[200px]', 'h-[256px]', 'overflow-y-scroll', 'bottom-100', 'left-0', 'bg-base-100', 'rounded-lg', 'z-[1]', 'shadow-md', 'flex', 'items-center', 'gap-2', 'w-full', 'rounded-none', 'p-3', 'hover:bg-light_blue', 'text-gray', 'w-[24px]', 'h-[24px]', 'flex', 'justify-center', 'items-center', 'w-[20px]', 'h-[20px]', 'text-[14px]/[19px]', 'flex', 'items-center', 'gap-2', 'w-full', 'rounded-none', 'p-3', 'hover:bg-light_blue', 'w-[24px]', 'h-[24px]', 'flex', 'justify-center', 'items-center', 'w-[20px]', 'h-[20px]', 'text-blue', 'text-[14px]/[19px]', 'btn', 'col-span-8', 'md:col-span-5', 'focus:outline-none', 'focus:border-blue', 'hover:bg-white', 'hover:border-blue', 'h-auto', 'bg-white', 'placeholder:text-gray', 'font-normal', 'pt-[15px]', 'md:pt-[20px]', 'pb-[14px]', 'md:pb-[19px]', 'px-[20px]', 'w-full', 'text-left', 'text-[14px]/[19px]', 'text-black', 'btn', 'flex', 'items-center', 'h-full', 'col-span-4', 'md:col-span-2', 'gap-2', 'font-normal', 'px-[12px]', 'py-[8px]', 'bg-gray', 'text-white', 'border-0', 'hover:bg-red', 'rounded-lg', 'duration-300', 'w-[20px]', 'md:w-[24px]', 'h-[20px]', 'md:h-[24px]', 'flex', 'justify-center', 'items-center', 'w-[16px]', 'md:w-[20px]', 'h-[16px]', 'md:h-[20px]', 'mr-2', 'text-[16px]/[21px]', 'md:text-[18px]/[24px]',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CategoryBtn: CategoryBtn,
            category: category,
            keyword: keyword,
            selectedCity: selectedCity,
            categories: categories,
            cities: cities,
            isOpen: isOpen,
            toggleDropdown: toggleDropdown,
            selectCity: selectCity,
            handleSetCategory: handleSetCategory,
            handleSearch: handleSearch,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
