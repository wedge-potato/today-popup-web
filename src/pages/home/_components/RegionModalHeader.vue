<template>
  <nav-bar-container>
    <img :src='close' alt='닫기' width='24px' height='24px' @click='onClickClose' />
    <h2 class='sub-1 ml-2'>지역 선택</h2>
    <button class='ml-auto flex items-center' @click="onClickReset">
      <img :src='reset' width='16px' height='16px' alt='초기화' />
      <span class='ml-0.5 cap-1'>초기화</span>
    </button>
  </nav-bar-container>
</template>
<script setup lang='ts'>
import { close, reset } from '../../../assets'
import NavBarContainer from '../../../components/nav/NavBarContainer.vue'

const emit = defineEmits(['close', 'reset'])

const onClickClose = () => {
  emit('close')
}

const onClickReset = () => {
  emit('reset')
}
</script>
