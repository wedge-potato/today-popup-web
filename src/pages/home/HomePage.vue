<template>
  <nav-bar show-logo show-setting />
  <div class='px-4'>
    <div class='flex justify-between my-3'>
      <region-button :count='0' @click='onClickRegion' />
      <button @click='changeSort'>{{ sortTextRef }}</button>
    </div>
    <popup-list :popup-list='data' @click='onClick' />
  </div>
  <region-modal v-if='isModalOpen' @close='onClose' />
</template>
<script setup lang='ts'>

import NavBar from '../../components/nav/NavBar.vue'
import { getPopupList } from '../../requests/getPopupList.ts'
import PopupList from '../../components/popup/PopupList.vue'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { RegionButton, RegionModal } from './_components'

const router = useRouter()

const data = getPopupList()

const isModalOpen = ref(false)
const sortRef = ref<'new' | 'end'>('new')
const sortTextRef = computed(() => sortRef.value === 'new' ? '최신 오픈순' : '종료 날짜순')

const onClickRegion = () => {
  isModalOpen.value = true
}

const changeSort = () => {
  sortRef.value = sortRef.value === 'new' ? 'end' : 'new'
}

const onClose = () => {
  isModalOpen.value = false
}

const onClick = (id: number) => {
  router.push(`/detail/${id}`)
}

</script>
