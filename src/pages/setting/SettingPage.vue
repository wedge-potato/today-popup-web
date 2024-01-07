<template>
  <nav-bar text="설정" />
  <div class="pt-3">
    <menu-item v-for='(menu, index) in menuList' v-bind:key='index' :name='menu.name'
               @click='onClick(menu.id)' />
  </div>
</template>
<script setup lang='ts'>
import NavBar from '../../components/nav/NavBar.vue'
import MenuItem from './_components/MenuItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuList = [
  {
    name: '팝업스토어 제보하기',
    id: 'register',
  },
  {
    name: '문의하기',
    id: 'contact',
  },
]

const onClick = (id: string) => {
  if(id==='contact'){
    router.push('/contact')
  }
  else if(id==='register'){
    window.location.href = 'https://forms.gle/EFDmBz4mgHTS9YSH9'
  }
}

</script>
