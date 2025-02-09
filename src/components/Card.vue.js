import classEnum from "@/jsons/classEnum.json";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute(); // 當前 URL 資訊
const category = computed(() => {
    const param = route.params.category;
    return Array.isArray(param) ? param[0] : param; // 確保是 string
});
const props = defineProps({
    data: Object,
    horizontal: {
        type: Boolean,
        default: false,
    },
});
const isSpecialCategory = (classNum) => {
    return ((classNum >= 6 && classNum <= 95) ||
        (classNum >= 117 && classNum <= 199) ||
        (classNum >= 205 && classNum <= 253));
};
const handleImgError = (event) => {
    const target = event.target;
    target.src = "/img_notFound.png";
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (([
                'group card bg-base-100 shadow-xl h-full overflow-hidden rounded md:rounded-xl transition-all outline outline-2 outline-transparent hover:outline-red',
                { 'grid grid-cols-12 md:block ': __VLS_ctx.horizontal },
            ])) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({
        ...{ class: ((['rounded-none', { 'col-span-5': __VLS_ctx.horizontal }])) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ onError: (__VLS_ctx.handleImgError) },
        ...{ class: ("w-full object-cover object-center group-hover:scale-110 transition-all duration-300 h-[128px] md:h-[190px]") },
        src: ((props.data.Images[0]?.URL || '/img_notFound.png')),
        alt: ((props.data[`${__VLS_ctx.category}Name`])),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (([
                'card-body gap-0 md:p-[16px] md:pt-[12px]',
                __VLS_ctx.horizontal ? 'py-[12px] px-[8px]' : 'p-[8px] pt-[7px]',
                { 'col-span-7': __VLS_ctx.horizontal },
            ])) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("text-[14px]/[19px] md:text-[16px]/[21px] mb-1 md:mb-2") },
    });
    (props.data[`${__VLS_ctx.category}Name`]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-1 text-blue mb-2 md:mb-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-[16px] md:w-[20px] h-[16px] md:h-[20px] flex justify-center items-center") },
    });
    const __VLS_0 = {}.FontAwesomeIcon;
    /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        icon: ("location-dot"),
        ...{ class: ("w-[14px] md:w-[16px] h-[14px] md:h-[16px]") },
    }));
    const __VLS_2 = __VLS_1({
        icon: ("location-dot"),
        ...{ class: ("w-[14px] md:w-[16px] h-[14px] md:h-[16px]") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-[12px]/[16px] md:text-[14px]/[19px]") },
    });
    (props.data.PostalAddress.City);
    if (__VLS_ctx.category &&
        props.data[`${__VLS_ctx.category === 'Restaurant' ? 'Cuisine' : __VLS_ctx.category}Classes`]) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: ("flex flex-wrap gap-2") },
        });
        for (const [classNum, index] of __VLS_getVForSourceType((props.data[`${__VLS_ctx.category === 'Restaurant' ? 'Cuisine' : __VLS_ctx.category}Classes`]))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: ((index)),
                ...{ class: ("text-dark_gray bg-medium_gray rounded text-[12px]/[16px] md:text-[14px]/[19px] py-[2px] md:py-[4px] px-[4px] md:px-[8px]") },
            });
            (__VLS_ctx.category === "Restaurant" && __VLS_ctx.isSpecialCategory(classNum)
                ? "特殊分類"
                : __VLS_ctx.classEnum[__VLS_ctx.category]?.[classNum] ?? "未知分類");
        }
    }
    ['group', 'card', 'bg-base-100', 'shadow-xl', 'h-full', 'overflow-hidden', 'rounded', 'md:rounded-xl', 'transition-all', 'outline', 'outline-2', 'outline-transparent', 'hover:outline-red', 'grid', 'grid-cols-12', 'md:block', 'rounded-none', 'col-span-5', 'w-full', 'object-cover', 'object-center', 'group-hover:scale-110', 'transition-all', 'duration-300', 'h-[128px]', 'md:h-[190px]', 'card-body', 'gap-0', 'md:p-[16px]', 'md:pt-[12px]', 'col-span-7', 'text-[14px]/[19px]', 'md:text-[16px]/[21px]', 'mb-1', 'md:mb-2', 'flex', 'items-center', 'gap-1', 'text-blue', 'mb-2', 'md:mb-3', 'w-[16px]', 'md:w-[20px]', 'h-[16px]', 'md:h-[20px]', 'flex', 'justify-center', 'items-center', 'w-[14px]', 'md:w-[16px]', 'h-[14px]', 'md:h-[16px]', 'text-[12px]/[16px]', 'md:text-[14px]/[19px]', 'flex', 'flex-wrap', 'gap-2', 'text-dark_gray', 'bg-medium_gray', 'rounded', 'text-[12px]/[16px]', 'md:text-[14px]/[19px]', 'py-[2px]', 'md:py-[4px]', 'px-[4px]', 'md:px-[8px]',];
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
            handleImgError: handleImgError,
        };
    },
    props: {
        data: Object,
        horizontal: {
            type: Boolean,
            default: false,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        data: Object,
        horizontal: {
            type: Boolean,
            default: false,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
