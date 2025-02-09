import { ref, onMounted } from "vue";
// 用來控制按鈕是否顯示
const isVisible = ref(false);
// 監聽滾動事件，當頁面滾動到一定位置時顯示按鈕
const checkScrollPosition = () => {
    if (window.scrollY > 300) {
        isVisible.value = true;
    }
    else {
        isVisible.value = false;
    }
};
// 點擊按鈕時滾動回頁面最上方
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
onMounted(() => {
    window.addEventListener("scroll", checkScrollPosition);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.scrollToTop) },
        ...{ class: (([
                'fixed z-50 bottom-4 md:bottom-20 2xl:bottom-32 right-4 2xl:right-20 text-white bg-red w-[48px] h-[48px] rounded-full shadow-lg cursor-pointer transition-all',
                __VLS_ctx.isVisible ? 'opacity-100' : 'opacity-0',
            ])) },
    });
    const __VLS_0 = {}.FontAwesomeIcon;
    /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        icon: ("angle-up"),
        ...{ class: ("w-[24px] h-[24px] mt-1") },
    }));
    const __VLS_2 = __VLS_1({
        icon: ("angle-up"),
        ...{ class: ("w-[24px] h-[24px] mt-1") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ['fixed', 'z-50', 'bottom-4', 'md:bottom-20', '2xl:bottom-32', 'right-4', '2xl:right-20', 'text-white', 'bg-red', 'w-[48px]', 'h-[48px]', 'rounded-full', 'shadow-lg', 'cursor-pointer', 'transition-all', 'w-[24px]', 'h-[24px]', 'mt-1',];
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
            isVisible: isVisible,
            scrollToTop: scrollToTop,
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
