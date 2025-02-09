import DetailNavbar from "@/components/DetailNavbar.vue";
import DetailBanner from "@/components/DetailBanner.vue";
import DetailCarousel from "@/components/DetailCarousel.vue";
import DetailInfo from "@/components/DetailInfo.vue";
import DetailRecommend from "@/components/DetailRecommend.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { searchCategaryDetail } from "@/api";
const route = useRoute();
const data = ref(null); // 預設 null，避免 undefined 問題
const category = computed(() => {
    const param = route.params.category;
    return Array.isArray(param) ? param[0] : param; // 確保是 string
});
const id = computed(() => {
    const param = route.params.id;
    return Array.isArray(param) ? param[0] : param; // 確保是 string
});
watch([() => route.params.category, () => route.params.id], () => {
    fetchInfo();
});
onMounted(() => {
    fetchInfo();
});
const fetchInfo = async () => {
    try {
        data.value = await searchCategaryDetail(category.value, id.value);
    }
    catch (error) {
        console.error("獲取詳細資料失敗", error);
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("min-h-screen flex flex-col") },
    });
    // @ts-ignore
    /** @type { [typeof DetailNavbar, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(DetailNavbar, new DetailNavbar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof DetailBanner, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(DetailBanner, new DetailBanner({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    if (__VLS_ctx.data) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
            ...{ class: ("pt-[80px] md:pt-[40px] pb-[32px] md:pb-[60px]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("container md_no_padding grid grid-cols-1 lg:grid-cols-2 mb-[40px]") },
        });
        // @ts-ignore
        /** @type { [typeof DetailCarousel, ] } */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(DetailCarousel, new DetailCarousel({
            data: ((__VLS_ctx.data)),
        }));
        const __VLS_11 = __VLS_10({
            data: ((__VLS_ctx.data)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        // @ts-ignore
        /** @type { [typeof DetailInfo, ] } */ ;
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(DetailInfo, new DetailInfo({
            data: ((__VLS_ctx.data)),
        }));
        const __VLS_16 = __VLS_15({
            data: ((__VLS_ctx.data)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        if (__VLS_ctx.data) {
            // @ts-ignore
            /** @type { [typeof DetailRecommend, ] } */ ;
            // @ts-ignore
            const __VLS_20 = __VLS_asFunctionalComponent(DetailRecommend, new DetailRecommend({
                classes: ((__VLS_ctx.data[`${__VLS_ctx.category === 'Restaurant' ? 'Cuisine' : __VLS_ctx.category}Classes`][0])),
                city: ((__VLS_ctx.data.PostalAddress?.City)),
                ...{ class: ("container mt-8 md:mt-10") },
            }));
            const __VLS_21 = __VLS_20({
                classes: ((__VLS_ctx.data[`${__VLS_ctx.category === 'Restaurant' ? 'Cuisine' : __VLS_ctx.category}Classes`][0])),
                city: ((__VLS_ctx.data.PostalAddress?.City)),
                ...{ class: ("container mt-8 md:mt-10") },
            }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
            ...{ class: ("flex justify-center items-center text-gray text-2xl min-h-40") },
        });
        const __VLS_25 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
            icon: ("spinner"),
            spin: (true),
        }));
        const __VLS_27 = __VLS_26({
            icon: ("spinner"),
            spin: (true),
        }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    }
    // @ts-ignore
    /** @type { [typeof Footer, ] } */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(Footer, new Footer({
        ...{ class: ("mt-auto") },
    }));
    const __VLS_32 = __VLS_31({
        ...{ class: ("mt-auto") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    // @ts-ignore
    /** @type { [typeof BackToTop, ] } */ ;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(BackToTop, new BackToTop({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    ['min-h-screen', 'flex', 'flex-col', 'pt-[80px]', 'md:pt-[40px]', 'pb-[32px]', 'md:pb-[60px]', 'container', 'md_no_padding', 'grid', 'grid-cols-1', 'lg:grid-cols-2', 'mb-[40px]', 'container', 'mt-8', 'md:mt-10', 'flex', 'justify-center', 'items-center', 'text-gray', 'text-2xl', 'min-h-40', 'mt-auto',];
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
            DetailNavbar: DetailNavbar,
            DetailBanner: DetailBanner,
            DetailCarousel: DetailCarousel,
            DetailInfo: DetailInfo,
            DetailRecommend: DetailRecommend,
            Footer: Footer,
            BackToTop: BackToTop,
            data: data,
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
