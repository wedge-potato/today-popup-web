import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "../pages/home/HomePage.vue";
import DetailPage from "../pages/detail/DetailPage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/detail:id',
        component: DetailPage
    },
]

const router = createRouter({
    history: createWebHistory('/today-popup-web'),
    routes
})

export default router;
