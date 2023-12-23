import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import DetailPage from '../pages/detail/DetailPage.vue'
import SettingPage from '../pages/setting/SettingPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/detail/:id',
    component: DetailPage,
  },
  {
    path: '/setting',
    component: SettingPage,
  },
]

const router = createRouter({
  history: createWebHistory('/today-popup-web'),
  routes,
})

export default router
