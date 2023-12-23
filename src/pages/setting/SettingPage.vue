<template>
  <top-bar />
  <menu-item v-for='(menu, index) in menuList' v-bind:key='index' :name='menu.name' :route='menu.route'
             @click='onClick(menu.route)' />
</template>
<script setup lang='ts'>
import TopBar from '../../components/top-bar/TopBar.vue'
import MenuItem from './_components/MenuItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuList = [
  {
    name: '팝업스토어 제보하기',
    route: '/register',
  },
  {
    name: '문의하기',
    route: '/contact',
  },
]

const onClick = (route: string) => {
  router.push(route)
}

</script>
