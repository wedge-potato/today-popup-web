import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'
import DetailPage from '../pages/detail/DetailPage.vue'
import SettingPage from '../pages/setting/SettingPage.vue'
import ContactPage from '../pages/contact/ContactPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/detail/:id',
    component: DetailPage,
    props: true,
  },
  {
    path: '/settings',
    component: SettingPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  }
]

const router = createRouter({
  history: createWebHistory('/today-popup-web'),
  routes,
})

export default router
