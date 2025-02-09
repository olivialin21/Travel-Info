import { computed } from "vue";
import { useRoute } from "vue-router";
import classEnum from "@/jsons/classEnum.json";
const props = defineProps({
    data: Object,
});
const route = useRoute();
const category = computed(() => {
    const param = route.params.category;
    return Array.isArray(param) ? param[0] : param; // 確保是 string
});
const isSpecialCategory = (classNum) => {
    return ((classNum >= 6 && classNum <= 95) ||
        (classNum >= 117 && classNum <= 199) ||
        (classNum >= 205 && classNum <= 253));
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("md:rounded-lg bg-white pt-[14px] md:pt-[17px] px-[20px] pb-[48px] md:pb-[24px]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("text-[20px]/[26px] md:text-[24px]/[32px] font-bold mb-[12px] md:mb-[15px]") },
    });
    (__VLS_ctx.data[`${__VLS_ctx.category}Name`]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("flex flex-col gap-5 md:gap-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("flex items-center gap-2") },
    });
    const __VLS_0 = {}.FontAwesomeIcon;
    /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        icon: ("location-dot"),
        ...{ class: ("w-[20px] h-[20px] text-red") },
    }));
    const __VLS_2 = __VLS_1({
        icon: ("location-dot"),
        ...{ class: ("w-[20px] h-[20px] text-red") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ class: ("text-[16px]/[21px] text-blue underline hover:text-red") },
        href: ((`https://www.google.com/maps?q=${__VLS_ctx.data.PositionLat},${__VLS_ctx.data.PositionLon}`)),
        target: ("_blank"),
    });
    (__VLS_ctx.data.PostalAddress?.City);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("flex items-start gap-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-[20px] h-[20px] flex justify-center items-center") },
    });
    const __VLS_6 = {}.FontAwesomeIcon;
    /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        icon: ("tag"),
        ...{ class: ("w-[18px] h-[18px] text-red") },
    }));
    const __VLS_8 = __VLS_7({
        icon: ("tag"),
        ...{ class: ("w-[18px] h-[18px] text-red") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("text-[16px]/[21px] font-bold mb-1 md:mb-2") },
    });
    if (__VLS_ctx.category &&
        __VLS_ctx.data[`${__VLS_ctx.category === 'Restaurant' ? 'Cuisine' : __VLS_ctx.category}Classes`]) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: ("flex flex-wrap gap-2") },
        });
        for (const [classNum, index] of __VLS_getVForSourceType((__VLS_ctx.data[`${__VLS_ctx.category === 'Restaurant' ? 'Cuisine' : __VLS_ctx.category}Classes`]))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: ((index)),
                ...{ class: ("text-dark_gray bg-medium_gray rounded text-[14px]/[19px] py-[2px] md:py-[4px] px-[4px] md:px-[8px]") },
            });
            (__VLS_ctx.category === "Restaurant" && __VLS_ctx.isSpecialCategory(classNum)
                ? "特殊分類"
                : __VLS_ctx.classEnum[__VLS_ctx.category]?.[classNum] ?? "未知分類");
        }
    }
    if (__VLS_ctx.data.ServiceTimeInfo) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ class: ("flex items-start gap-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-[20px] h-[20px] flex justify-center items-center") },
        });
        const __VLS_12 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            icon: ("clock"),
            ...{ class: ("w-[18px] h-[18px] text-red") },
        }));
        const __VLS_14 = __VLS_13({
            icon: ("clock"),
            ...{ class: ("w-[18px] h-[18px] text-red") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
            ...{ class: ("text-[16px]/[21px] font-bold mb-1 md:mb-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-[14px]/[19px]") },
        });
        (__VLS_ctx.data.ServiceTimeInfo);
    }
    if (__VLS_ctx.data.Description) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ class: ("flex items-start gap-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-[20px] h-[20px] flex justify-center items-center") },
        });
        const __VLS_18 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
            icon: ("file-lines"),
            ...{ class: ("w-[18px] h-[18px] text-red") },
        }));
        const __VLS_20 = __VLS_19({
            icon: ("file-lines"),
            ...{ class: ("w-[18px] h-[18px] text-red") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
            ...{ class: ("text-[16px]/[21px] font-bold mb-1 md:mb-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-[14px]/[19px]") },
        });
        (__VLS_ctx.data.Description);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("grid grid-cols-12 md:flex gap-[10px] md:gap-5") },
    });
    if (__VLS_ctx.data.Telephones) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((`tel:${__VLS_ctx.data.Telephones[0]?.Tel}`)),
            ...{ class: (([
                    'btn font-normal flex gap-1 items-center text-[14px]/[19px] md:text-[16px]/[21px] min-h-0 h-auto bg-white text-red border border-red hover:text-white hover:bg-red hover:border-red py-[15px] md:py-[20px] px-[18px] md:px-[26px]',
                    __VLS_ctx.data.WebsiteUrl ? 'col-span-6' : 'col-span-12',
                ])) },
        });
        const __VLS_24 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
            icon: ("phone"),
            ...{ class: ("w-[18px] h-[18px]") },
        }));
        const __VLS_26 = __VLS_25({
            icon: ("phone"),
            ...{ class: ("w-[18px] h-[18px]") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.data.Telephones[0]?.Tel);
    }
    if (__VLS_ctx.data.WebsiteUrl) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ((__VLS_ctx.data.WebsiteUrl)),
            target: ("_blank"),
            ...{ class: (([
                    'btn font-normal text-[14px]/[19px] md:text-[16px]/[21px] min-h-0 h-auto bg-red text-white border border-red hover:opacity-70 hover:text-white hover:bg-red hover:border-red py-[15px] md:py-[20px] px-[18px] md:px-[26px]',
                    __VLS_ctx.data.Telephones ? 'col-span-6' : 'col-span-12',
                ])) },
        });
    }
    ['md:rounded-lg', 'bg-white', 'pt-[14px]', 'md:pt-[17px]', 'px-[20px]', 'pb-[48px]', 'md:pb-[24px]', 'text-[20px]/[26px]', 'md:text-[24px]/[32px]', 'font-bold', 'mb-[12px]', 'md:mb-[15px]', 'flex', 'flex-col', 'gap-5', 'md:gap-6', 'flex', 'items-center', 'gap-2', 'w-[20px]', 'h-[20px]', 'text-red', 'text-[16px]/[21px]', 'text-blue', 'underline', 'hover:text-red', 'flex', 'items-start', 'gap-2', 'w-[20px]', 'h-[20px]', 'flex', 'justify-center', 'items-center', 'w-[18px]', 'h-[18px]', 'text-red', 'text-[16px]/[21px]', 'font-bold', 'mb-1', 'md:mb-2', 'flex', 'flex-wrap', 'gap-2', 'text-dark_gray', 'bg-medium_gray', 'rounded', 'text-[14px]/[19px]', 'py-[2px]', 'md:py-[4px]', 'px-[4px]', 'md:px-[8px]', 'flex', 'items-start', 'gap-2', 'w-[20px]', 'h-[20px]', 'flex', 'justify-center', 'items-center', 'w-[18px]', 'h-[18px]', 'text-red', 'text-[16px]/[21px]', 'font-bold', 'mb-1', 'md:mb-2', 'text-[14px]/[19px]', 'flex', 'items-start', 'gap-2', 'w-[20px]', 'h-[20px]', 'flex', 'justify-center', 'items-center', 'w-[18px]', 'h-[18px]', 'text-red', 'text-[16px]/[21px]', 'font-bold', 'mb-1', 'md:mb-2', 'text-[14px]/[19px]', 'grid', 'grid-cols-12', 'md:flex', 'gap-[10px]', 'md:gap-5', 'btn', 'font-normal', 'flex', 'gap-1', 'items-center', 'text-[14px]/[19px]', 'md:text-[16px]/[21px]', 'min-h-0', 'h-auto', 'bg-white', 'text-red', 'border', 'border-red', 'hover:text-white', 'hover:bg-red', 'hover:border-red', 'py-[15px]', 'md:py-[20px]', 'px-[18px]', 'md:px-[26px]', 'w-[18px]', 'h-[18px]', 'btn', 'font-normal', 'text-[14px]/[19px]', 'md:text-[16px]/[21px]', 'min-h-0', 'h-auto', 'bg-red', 'text-white', 'border', 'border-red', 'hover:opacity-70', 'hover:text-white', 'hover:bg-red', 'hover:border-red', 'py-[15px]', 'md:py-[20px]', 'px-[18px]', 'md:px-[26px]',];
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
            classEnum: classEnum,
            category: category,
            isSpecialCategory: isSpecialCategory,
        };
    },
    props: {
        data: Object,
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        data: Object,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
