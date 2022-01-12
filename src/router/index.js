import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Homepage.vue'
import About from '../components/About.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Homepage
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router