import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/views/Homepage.vue'
import About from '@/views/About.vue'
import CocktailFilter from '@/views/CocktailFilter.vue'
import CocktailDetail from '@/views/CocktailDetail.vue'
import FavoriteCocktailList from '@/views/FavoriteCocktailList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage,
    },
    {
        path: '/cocktail/:cocktailId',
        name: 'CocktailDetail',
        component: CocktailDetail,
        props: true,
    },
    {
        path: '/filter',
        name: 'Filter Default',
        component: CocktailFilter,
    },
    {
        path: '/filter/:letter',
        name: 'Filter By Letter',
        component: CocktailFilter,
        props: true,
    },
    {
        path: '/favorite',
        name: 'Favorite',
        component: FavoriteCocktailList,
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