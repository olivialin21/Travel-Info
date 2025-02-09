import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const category = computed(() => {
    const param = route.params.category;
    return Array.isArray(param) ? param[0] : param; // 確保是 string
});
const categories = {
    Attraction: "景點",
    Restaurant: "餐飲",
    Hotel: "旅宿",
    Event: "活動",
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
        ...{ class: ("h-[300px] bg-cover bg-center banner pb-[30px] hidden md:block") },
        'data-category': ((__VLS_ctx.category)),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container flex flex-col h-full justify-end") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-[80px]/[106px] font-bold text-white drop-shadow-lg") },
    });
    (__VLS_ctx.categories[__VLS_ctx.category]);
    ['h-[300px]', 'bg-cover', 'bg-center', 'banner', 'pb-[30px]', 'hidden', 'md:block', 'container', 'flex', 'flex-col', 'h-full', 'justify-end', 'text-[80px]/[106px]', 'font-bold', 'text-white', 'drop-shadow-lg',];
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
            categories: categories,
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
