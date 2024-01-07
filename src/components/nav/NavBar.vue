<template>
  <nav-bar-container>
    <img v-if='showLogo' :src='logoWithText' alt='오늘의 팝업' height='24px' />
    <button v-else @click='onClickBack'>
      <img :src='back' alt='설정' width='24px' height='24px' />
    </button>
    <button v-if='showSetting' @click='onClickSetting'>
      <img :src='setting' alt='설정' width='24px' height='24px' />
    </button>
  </nav-bar-container>
</template>
<script setup lang='ts'>

import { useRouter } from 'vue-router'
import { setting, logoWithText, back } from '../../assets'
import NavBarContainer from './NavBarContainer.vue'

defineProps({
  showLogo: {
    type: Boolean,
    default: false,
  },
  showSetting: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()

const onClickBack = () => {
  router.back()
}

const onClickSetting = () => {
  router.push('/setting')
}
</script>
