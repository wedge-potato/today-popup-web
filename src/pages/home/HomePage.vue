<template>
  <top-bar />
  <popup-list :popup-list='data' @click='onClick' />
</template>
<script setup lang='ts'>

import TopBar from '../../components/top-bar/TopBar.vue'
import { getPopupList } from '../../requests/getPopupList.ts'
import PopupList from '../../components/popup/PopupList.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const data = getPopupList()

const onClick = (id: number) => {
  router.push(`/detail/${id}`)
}

</script>
