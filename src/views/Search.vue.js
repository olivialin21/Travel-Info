import SearchBanner from "@/components/SearchBanner.vue";
import SearchList from "@/components/SearchList.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("min-h-screen flex flex-col") },
    });
    // @ts-ignore
    /** @type { [typeof SearchBanner, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(SearchBanner, new SearchBanner({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof SearchList, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(SearchList, new SearchList({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    /** @type { [typeof Footer, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Footer, new Footer({
        ...{ class: ("mt-auto") },
    }));
    const __VLS_11 = __VLS_10({
        ...{ class: ("mt-auto") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    // @ts-ignore
    /** @type { [typeof BackToTop, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(BackToTop, new BackToTop({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ['min-h-screen', 'flex', 'flex-col', 'mt-auto',];
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
            SearchBanner: SearchBanner,
            SearchList: SearchList,
            Footer: Footer,
            BackToTop: BackToTop,
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
