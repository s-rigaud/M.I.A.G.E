import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Homepage.vue'
import About from '../components/About.vue'
import CocktailFilter from '../components/CocktailFilter.vue'
import CocktailDetail from '../components/CocktailDetail.vue'
import FavoriteCocktailList from '../components/FavoriteCocktailList.vue'

const routes = [
    {
        path: '/',
        name: 'home',
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
        name: 'Filter',
        component: CocktailFilter,
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