const props = defineProps();
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['btn', 'active',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ((['btn', { active: __VLS_ctx.active }])) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.text);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-[14px] md:w-[20px] h-[14px] md:h-[20px] flex justify-center items-center") },
    });
    if (__VLS_ctx.icon) {
        const __VLS_0 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            icon: ((__VLS_ctx.icon)),
            ...{ class: ("w-[12px] md:w-[18px] h-[12px] md:h-[18px]") },
        }));
        const __VLS_2 = __VLS_1({
            icon: ((__VLS_ctx.icon)),
            ...{ class: ("w-[12px] md:w-[18px] h-[12px] md:h-[18px]") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    ['active', 'btn', 'w-[14px]', 'md:w-[20px]', 'h-[14px]', 'md:h-[20px]', 'flex', 'justify-center', 'items-center', 'w-[12px]', 'md:w-[18px]', 'h-[12px]', 'md:h-[18px]',];
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
        return {};
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
