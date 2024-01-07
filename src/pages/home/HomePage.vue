<template>
  <nav-bar show-logo show-setting />
  <div class='px-4'>
    <div class='flex justify-between my-3'>
      <region-button :count='filterCount' @click='onClickRegion' />
      <button @click='changeSort'>{{ sortTextRef }}</button>
    </div>
    <popup-list :popup-list='data' @click='onClick' class="pt-2" />
  </div>
  <region-modal
    v-if='isModalOpen'
    @close='onClose'
    @select="onSelect"
    @reset="onReset"
    :selected="selected"
  />
</template>
<script setup lang='ts'>

import NavBar from '../../components/nav/NavBar.vue'
import PopupList from '../../components/popup/PopupList.vue'
import RegionModal from './_components/RegionModal.vue'
import RegionButton from './_components/RegionButton.vue'
import { getPopupList } from '../../requests/getPopupList.ts'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const router = useRouter()

const data = getPopupList()

const isModalOpen = ref(false)
const selected = ref('')
const filterCount = computed(() => selected.value === '' ? 0 : 1)
const sortRef = ref<'new' | 'end'>('new')
const sortTextRef = computed(() => sortRef.value === 'new' ? '최신 오픈순' : '종료 날짜순')

const onClickRegion = () => {
  isModalOpen.value = true
}

const onSelect = (region:string) => {
  selected.value=region
}

const changeSort = () => {
  sortRef.value = sortRef.value === 'new' ? 'end' : 'new'
}

const onReset = () => {
  selected.value = ''
}

const onClose = () => {
  isModalOpen.value = false
}

const onClick = (id: number) => {
  router.push(`/detail/${id}`)
}

</script>
