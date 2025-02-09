import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const props = defineProps({ data: Object });
// 避免 data 為 null 時出錯
const images = computed(() => props.data?.Images ?? [{ URL: "/img_notFound.png" }]);
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
// 定義 Swiper 需要的模組
const swiperModules = [FreeMode, Navigation, Thumbs];
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['swiper-slide', 'mySwiper', 'swiper-slide', 'mySwiper',];
    // CSS variable injection 
    // CSS variable injection end 
    if (__VLS_ctx.data && __VLS_ctx.data.Images && __VLS_ctx.data.Images.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-[20px] lg:mr-[20px]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("hidden md:block") },
        });
        const __VLS_0 = {}.Swiper;
        /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.Swiper, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            ...{ style: (({
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                })) },
            spaceBetween: ((10)),
            navigation: (({ clickable: true })),
            thumbs: (({ swiper: __VLS_ctx.thumbsSwiper })),
            modules: ((__VLS_ctx.swiperModules)),
            ...{ class: ("mySwiper2") },
        }));
        const __VLS_2 = __VLS_1({
            ...{ style: (({
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                })) },
            spaceBetween: ((10)),
            navigation: (({ clickable: true })),
            thumbs: (({ swiper: __VLS_ctx.thumbsSwiper })),
            modules: ((__VLS_ctx.swiperModules)),
            ...{ class: ("mySwiper2") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        for (const [img] of __VLS_getVForSourceType((__VLS_ctx.data.Images))) {
            const __VLS_6 = {}.SwiperSlide;
            /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.SwiperSlide, ] } */ ;
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
                key: ((img.URL)),
            }));
            const __VLS_8 = __VLS_7({
                key: ((img.URL)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((img.URL)),
                alt: ((img.Description)),
            });
            __VLS_11.slots.default;
            var __VLS_11;
        }
        __VLS_5.slots.default;
        var __VLS_5;
        const __VLS_12 = {}.Swiper;
        /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.Swiper, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            ...{ 'onSwiper': {} },
            spaceBetween: ((10)),
            slidesPerView: ((3)),
            freeMode: ((true)),
            watchSlidesProgress: ((true)),
            modules: ((__VLS_ctx.swiperModules)),
            ...{ class: ("mySwiper") },
        }));
        const __VLS_14 = __VLS_13({
            ...{ 'onSwiper': {} },
            spaceBetween: ((10)),
            slidesPerView: ((3)),
            freeMode: ((true)),
            watchSlidesProgress: ((true)),
            modules: ((__VLS_ctx.swiperModules)),
            ...{ class: ("mySwiper") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        let __VLS_18;
        const __VLS_19 = {
            onSwiper: (__VLS_ctx.setThumbsSwiper)
        };
        let __VLS_15;
        let __VLS_16;
        for (const [img] of __VLS_getVForSourceType((__VLS_ctx.data.Images))) {
            const __VLS_20 = {}.SwiperSlide;
            /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.SwiperSlide, ] } */ ;
            // @ts-ignore
            const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
                key: ((img.URL)),
            }));
            const __VLS_22 = __VLS_21({
                key: ((img.URL)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
                src: ((img.URL)),
                alt: ((img.Description)),
            });
            __VLS_25.slots.default;
            var __VLS_25;
        }
        __VLS_17.slots.default;
        var __VLS_17;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("block md:hidden") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.data.Images[0].URL)),
            alt: ((__VLS_ctx.data.Images[0].Description)),
            ...{ class: ("object-cover object-center h-[239px] w-full") },
        });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("lg:mr-[20px]") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            ...{ class: ("hidden lg:block w-full object-cover object-center") },
            src: ("/img_notFound.png"),
            alt: ("notFound"),
        });
    }
    ['mb-[20px]', 'lg:mr-[20px]', 'hidden', 'md:block', 'mySwiper2', 'mySwiper', 'block', 'md:hidden', 'object-cover', 'object-center', 'h-[239px]', 'w-full', 'lg:mr-[20px]', 'hidden', 'lg:block', 'w-full', 'object-cover', 'object-center',];
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
            $props: __VLS_makeOptional(props),
            ...props,
            Swiper: Swiper,
            SwiperSlide: SwiperSlide,
            thumbsSwiper: thumbsSwiper,
            setThumbsSwiper: setThumbsSwiper,
            swiperModules: swiperModules,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
