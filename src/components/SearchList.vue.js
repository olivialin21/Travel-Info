import { onMounted, ref, computed, watch } from "vue";
import Card from "./Card.vue";
import { searchCategary } from "@/api";
import { useRoute, useRouter } from "vue-router"; // Vue Router
const route = useRoute(); // 當前 URL 資訊
const router = useRouter(); // 修改 URL
const category = computed(() => {
    const param = route.params.category;
    return Array.isArray(param) ? param[0] : param; // 確保是 string
});
const results = ref([]); // API 回傳的結果
const loading = ref(false);
const perPage = 16;
const currentPage = ref(1);
const selectedOrder = ref(""); // 排序條件
// 監聽 URL 變化並更新狀態
onMounted(() => {
    syncStateWithURL();
});
// **抓取資料**
const fetchResults = async () => {
    loading.value = true;
    try {
        const { city, keyword, order } = route.query;
        const orderQuery = Array.isArray(order) ? order[0] : order ?? "";
        let filters = [];
        if (city)
            filters.push(`PostalAddress/City eq '${city}'`);
        if (keyword)
            filters.push(`contains(${category.value}Name, '${keyword}')`);
        const filterQuery = filters.length
            ? `$filter=${filters.join(" and ")}`
            : "";
        const skip = (currentPage.value - 1) * perPage;
        const response = await searchCategary(category.value, filterQuery, perPage, skip, orderQuery);
        results.value = response.value;
    }
    catch (error) {
        console.error("搜尋發生錯誤", error);
    }
    finally {
        loading.value = false;
    }
};
// **同步 URL 到狀態**
const syncStateWithURL = () => {
    const queryParams = route.query;
    currentPage.value = Number(queryParams.page) || 1;
    const order = queryParams.order;
    selectedOrder.value = Array.isArray(order) ? order[0] : order ?? "";
    fetchResults();
};
watch(() => [category.value, route.query], // 監聽 category 和 query 變化
() => {
    syncStateWithURL();
}, { immediate: true });
// **更新排序並修改 URL**
const updateOrder = () => {
    router.push({
        path: `/${category.value}`,
        query: { ...route.query, order: selectedOrder.value, page: 1 },
    });
};
// **更新頁碼並修改 URL**
const updatePage = (page) => {
    router.push({
        path: `/${category.value}`,
        query: { ...route.query, page },
    });
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['sub_title',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("container pt-[24px] md:pt-[52px] pb-[20px] md:pb-[72px]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-[22px]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("sub_title") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-[14px]/[19px] text-gray") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        ...{ onChange: (__VLS_ctx.updateOrder) },
        ...{ class: ("select focus:outline-none") },
        value: ((__VLS_ctx.selectedOrder)),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: (""),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("Name-asc"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("Name-desc"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("UpdateTime-asc"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("UpdateTime-desc"),
    });
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-center items-center text-gray text-2xl min-h-40") },
        });
        const __VLS_0 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            icon: ("spinner"),
            spin: (true),
        }));
        const __VLS_2 = __VLS_1({
            icon: ("spinner"),
            spin: (true),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    else if (__VLS_ctx.results.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-[14px]/[19px] md:text-[16px]/[21px]") },
        });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4") },
        });
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.results))) {
            const __VLS_6 = {}.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
                key: ((item.AttractionID)),
                to: ((`/${__VLS_ctx.category}/details/${item[`${__VLS_ctx.category}ID`]}`)),
                ...{ class: ("block w-full") },
            }));
            const __VLS_8 = __VLS_7({
                key: ((item.AttractionID)),
                to: ((`/${__VLS_ctx.category}/details/${item[`${__VLS_ctx.category}ID`]}`)),
                ...{ class: ("block w-full") },
            }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            // @ts-ignore
            /** @type { [typeof Card, ] } */ ;
            // @ts-ignore
            const __VLS_12 = __VLS_asFunctionalComponent(Card, new Card({
                data: ((item)),
                horizontal: ((true)),
            }));
            const __VLS_13 = __VLS_12({
                data: ((item)),
                horizontal: ((true)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            __VLS_11.slots.default;
            var __VLS_11;
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mt-[31px] md:mt-[52px] flex justify-center gap-4") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(!((__VLS_ctx.loading))))
                        return;
                    if (!(!((__VLS_ctx.results.length === 0))))
                        return;
                    __VLS_ctx.updatePage(__VLS_ctx.currentPage - 1);
                } },
            ...{ class: ("btn min-h-0 w-[44px] h-[44px] text-gray bg-white hover:bg-red hover:text-white border-0 font-normal") },
            disabled: ((__VLS_ctx.currentPage === 1)),
        });
        const __VLS_17 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
            icon: ("angle-left"),
            ...{ class: ("w-[20px] h-[20px]") },
        }));
        const __VLS_19 = __VLS_18({
            icon: ("angle-left"),
            ...{ class: ("w-[20px] h-[20px]") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(!((__VLS_ctx.loading))))
                        return;
                    if (!(!((__VLS_ctx.results.length === 0))))
                        return;
                    __VLS_ctx.updatePage(__VLS_ctx.currentPage + 1);
                } },
            ...{ class: ("btn min-h-0 w-[44px] h-[44px] text-gray bg-white hover:bg-red hover:text-white border-0 font-normal") },
            disabled: ((__VLS_ctx.results.length < __VLS_ctx.perPage)),
        });
        const __VLS_23 = {}.FontAwesomeIcon;
        /** @type { [typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ] } */ ;
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
            icon: ("angle-right"),
            ...{ class: ("w-[20px] h-[20px]") },
        }));
        const __VLS_25 = __VLS_24({
            icon: ("angle-right"),
            ...{ class: ("w-[20px] h-[20px]") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    }
    ['container', 'pt-[24px]', 'md:pt-[52px]', 'pb-[20px]', 'md:pb-[72px]', 'flex', 'justify-between', 'items-center', 'mb-[22px]', 'sub_title', 'flex', 'items-center', 'gap-4', 'text-[14px]/[19px]', 'text-gray', 'select', 'focus:outline-none', 'flex', 'justify-center', 'items-center', 'text-gray', 'text-2xl', 'min-h-40', 'text-[14px]/[19px]', 'md:text-[16px]/[21px]', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-4', 'block', 'w-full', 'mt-[31px]', 'md:mt-[52px]', 'flex', 'justify-center', 'gap-4', 'btn', 'min-h-0', 'w-[44px]', 'h-[44px]', 'text-gray', 'bg-white', 'hover:bg-red', 'hover:text-white', 'border-0', 'font-normal', 'w-[20px]', 'h-[20px]', 'btn', 'min-h-0', 'w-[44px]', 'h-[44px]', 'text-gray', 'bg-white', 'hover:bg-red', 'hover:text-white', 'border-0', 'font-normal', 'w-[20px]', 'h-[20px]',];
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
            Card: Card,
            category: category,
            results: results,
            loading: loading,
            perPage: perPage,
            currentPage: currentPage,
            selectedOrder: selectedOrder,
            updateOrder: updateOrder,
            updatePage: updatePage,
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
