import { createRouter, createWebHashHistory } from 'vue-router';
import Search from '@/views/Search.vue';
import Detail from '@/views/Detail.vue';
const routes = [
    {
        path: "/:category?", // 可選的 category，預設導向 Attraction
        name: "Home",
        component: Search,
        beforeEnter: (to, from, next) => {
            if (!to.params.category) {
                next({ path: "/Attraction", replace: true });
            }
            else {
                next();
            }
        },
    },
    {
        path: "/:category/details/:id",
        name: "Detail",
        component: Detail,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
