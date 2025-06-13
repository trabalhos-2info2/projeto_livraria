import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/equipe',
        name: 'Team',
        component: () => import('@/views/TeamView.vue'),
    },
    {
        path: '/livro/:id',
        name: 'Book',
        component: () => import('@/views/BookView.vue'),
        props: true,
    },
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
})

export default router