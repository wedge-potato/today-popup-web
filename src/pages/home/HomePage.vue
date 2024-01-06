<template>
  <nav-bar show-logo show-setting />
  <div class='flex justify-between'>
    <span>지역</span>
    <button @click='changeSort'>{{ sortTextRef }}</button>
  </div>
  <popup-list :popup-list='data' @click='onClick' />
</template>
<script setup lang='ts'>

import NavBar from '../../components/nav/NavBar.vue'
import { getPopupList } from '../../requests/getPopupList.ts'
import PopupList from '../../components/popup/PopupList.vue'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const router = useRouter()

const data = getPopupList()

const sortRef = ref<'new' | 'end'>('new')
const sortTextRef = computed(() => sortRef.value === 'new' ? '최신 오픈순' : '종료 날짜순')

const changeSort = () => {
  sortRef.value = sortRef.value === 'new' ? 'end' : 'new'
}

const onClick = (id: number) => {
  router.push(`/detail/${id}`)
}

</script>
