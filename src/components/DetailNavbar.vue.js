import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const category = computed(() => {
    const param = route.params.category;
    return Array.isArray(param) ? param[0] : param; // 確保是 string
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("pt-[29px] md:pt-[23px] pb-[27px] placeholder:md:pb-[22px] fixed top-0 left-0 w-full bg-white shadow-md z-10") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ((`/${__VLS_ctx.category}`)),
        ...{ class: ("hidden md:block py-[3.5px] hover:opacity-70 transition-opacity") },
    }));
    const __VLS_2 = __VLS_1({
        to: ((`/${__VLS_ctx.category}`)),
        ...{ class: ("hidden md:block py-[3.5px] hover:opacity-70 transition-opacity") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ("/logo_blue.svg"),
        alt: ("logo"),
    });
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_6 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        to: ((`/${__VLS_ctx.category}`)),
        ...{ class: ("flex items-center gap-2 md:hidden hover:opacity-70 transition-opacity") },
    }));
    const __VLS_8 = __VLS_7({
        to: ((`/${__VLS_ctx.category}`)),
        ...{ class: ("flex items-center gap-2 md:hidden hover:opacity-70 transition-opacity") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-[24px] h-[24px] flex justify-center items-center") },
    });
    const __VLS_12 = {}.FontAwesomeIcon;
    /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        icon: ("chevron-left"),
        ...{ class: ("w-[20px] h-[20px]") },
    }));
    const __VLS_14 = __VLS_13({
        icon: ("chevron-left"),
        ...{ class: ("w-[20px] h-[20px]") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-[14px]/[19px]") },
    });
    __VLS_11.slots.default;
    var __VLS_11;
    ['pt-[29px]', 'md:pt-[23px]', 'pb-[27px]', 'placeholder:md:pb-[22px]', 'fixed', 'top-0', 'left-0', 'w-full', 'bg-white', 'shadow-md', 'z-10', 'container', 'flex', 'justify-between', 'items-center', 'hidden', 'md:block', 'py-[3.5px]', 'hover:opacity-70', 'transition-opacity', 'flex', 'items-center', 'gap-2', 'md:hidden', 'hover:opacity-70', 'transition-opacity', 'w-[24px]', 'h-[24px]', 'flex', 'justify-center', 'items-center', 'w-[20px]', 'h-[20px]', 'text-[14px]/[19px]',];
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
            category: category,
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
