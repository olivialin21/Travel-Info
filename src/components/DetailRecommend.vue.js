import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { searchCategary } from "@/api";
import Card from "./Card.vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const props = defineProps({
    city: String,
    classes: Number,
});
const route = useRoute();
const category = computed(() => {
    const param = route.params.category;
    return Array.isArray(param) ? param[0] : param;
});
const navigationOptions = {
    enabled: true
};
const loading = ref(false);
const data = ref([]);
const swiperModules = [Navigation];
const slidesPerView = ref(4);
const spaceBetween = ref(20);
const swiperNavigationOffset = ref(70);
const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
        slidesPerView.value = 4;
        spaceBetween.value = 20;
        swiperNavigationOffset.value = 70;
    }
    else if (width >= 768) {
        slidesPerView.value = 3;
        spaceBetween.value = 10;
        swiperNavigationOffset.value = 70;
    }
    else {
        slidesPerView.value = 2;
        spaceBetween.value = 10;
        swiperNavigationOffset.value = 30;
    }
};
onMounted(() => {
    fetchResults();
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
});
const fetchResults = async () => {
    loading.value = true;
    try {
        let filterQuery = `$filter=PostalAddress/City eq '${props.city}' and ${category.value === "Restaurant" ? "Cuisine" : category.value}Classes/any(c: c eq ${props.classes})`;
        const response = await searchCategary(category.value, filterQuery, 12, 0);
        data.value = response.value;
    }
    catch (error) {
        console.error("搜尋發生錯誤", error);
    }
    finally {
        loading.value = false;
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['swiper', 'swiper-slide', 'sub_title',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("sub_title") },
    });
    const __VLS_0 = {}.Swiper;
    /** @type { [typeof __VLS_components.Swiper, typeof __VLS_components.Swiper, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ style: (({
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                '--swiper-navigation-sides-offset': __VLS_ctx.swiperNavigationOffset + 'px',
            })) },
        slidesPerView: ((__VLS_ctx.slidesPerView)),
        spaceBetween: ((__VLS_ctx.spaceBetween)),
        modules: ((__VLS_ctx.swiperModules)),
        navigation: __VLS_ctx.navigationOptions,
        ...{ class: ("mySwiper") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ style: (({
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                '--swiper-navigation-sides-offset': __VLS_ctx.swiperNavigationOffset + 'px',
            })) },
        slidesPerView: ((__VLS_ctx.slidesPerView)),
        spaceBetween: ((__VLS_ctx.spaceBetween)),
        modules: ((__VLS_ctx.swiperModules)),
        navigation: __VLS_ctx.navigationOptions,
        ...{ class: ("mySwiper") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.data))) {
        const __VLS_6 = {}.SwiperSlide;
        /** @type { [typeof __VLS_components.SwiperSlide, typeof __VLS_components.SwiperSlide, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            key: ((item[`${__VLS_ctx.category}ID`])),
        }));
        const __VLS_8 = __VLS_7({
            key: ((item[`${__VLS_ctx.category}ID`])),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        const __VLS_12 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            to: ((`/${__VLS_ctx.category}/details/${item[`${__VLS_ctx.category}ID`]}`)),
            ...{ class: ("block w-full") },
        }));
        const __VLS_14 = __VLS_13({
            to: ((`/${__VLS_ctx.category}/details/${item[`${__VLS_ctx.category}ID`]}`)),
            ...{ class: ("block w-full") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        // @ts-ignore
        /** @type { [typeof Card, ] } */ ;
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(Card, new Card({
            data: ((item)),
        }));
        const __VLS_19 = __VLS_18({
            data: ((item)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        __VLS_17.slots.default;
        var __VLS_17;
        __VLS_11.slots.default;
        var __VLS_11;
    }
    __VLS_5.slots.default;
    var __VLS_5;
    ['sub_title', 'mySwiper', 'block', 'w-full',];
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
            Swiper: Swiper,
            SwiperSlide: SwiperSlide,
            Card: Card,
            category: category,
            navigationOptions: navigationOptions,
            data: data,
            swiperModules: swiperModules,
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
            swiperNavigationOffset: swiperNavigationOffset,
        };
    },
    props: {
        city: String,
        classes: Number,
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        city: String,
        classes: Number,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
