import { createRouter, createWebHashHistory } from 'vue-router'
import Search from '@/views/Search.vue'
import Detail from '@/views/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Search
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
