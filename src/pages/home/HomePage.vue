<template>
  <nav-bar show-logo show-setting />
  <div class='px-4'>
    <div class='flex justify-between my-3'>
      <region-button :count='filterCount' @click='onClickRegion' />
      <button @click='changeSort' class="flex items-center gap-1">
        <img :src="sort" alt="정렬" width="24px" height="24px" />
        <span class="cap-1">{{ sortOpitons[sortRef]?.text }}</span>
      </button>
    </div>
    <popup-list :popup-list='popupList' @click='onClick' class="pt-2" />
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
import RegionModal from './_components/RegionModal.vue'
import RegionButton from './_components/RegionButton.vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PopupList from '../../components/popup/PopupList.vue'
import { useRouter } from 'vue-router'
import {computed, reactive, ref} from 'vue'
import {sort} from '../../assets'
import {useGetPopupList} from '../../requests/use'
import {OrderOption} from './types.ts'

const router = useRouter()

const popupList = computed(()=> getPopupList?.data?.value?.data)

const isModalOpen = ref(false)
const selected = ref('')
const filterCount = computed(() => selected.value === '' ? 0 : 1)
const sortRef = ref<keyof typeof sortOpitons>('new')
const orderByRef = computed(() => sortOpitons[sortRef.value].orderBy)
const orderRef = computed(() => sortOpitons[sortRef.value].order)

const sortOpitons: Record<string, OrderOption> = {
  end: {
    text: '종료 날짜순',
    orderBy: 'endDate',
    order: 'asc'
  },
  new: {
    text: '최신 오픈순',
    orderBy:'startDate',
    order: 'desc'
  }
}

const payload = reactive({
  orderBy: orderByRef,
  order: orderRef,
})

const getPopupList = useGetPopupList(payload)

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
