import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Homepage.vue'
import About from '../components/About.vue'
import CocktailFilter from '../components/CocktailFilter.vue'
import FavoriteCocktailList from '../components/FavoriteCocktailList.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Homepage
    },
    {
        path: '/filter',
        name: 'Filter',
        component: CocktailFilter
    },
    {
        path: '/favorite',
        name: 'Favorite',
        component: FavoriteCocktailList
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