<template>
  <div class='flex flex-col bg-grey-5 w-full h-[100vh] absolute top-0'>
    <region-modal-header @close='onClose' />
    <div class='flex flex-grow'>
      <div class='bg-grey-10 w-[125px]'>
        <div class='flex justify-center items-center sub-2 h-14 w-full bg-grey-5'>
          서울
        </div>
      </div>
      <div class='bg-grey-5'>
        <div v-for='region in regions' :key='region' @click='onClickItem'
             class='h-14 flex justify-center items-center px-6 body-1'>
          {{ region }}
        </div>
      </div>
    </div>
    <o-button class='mx-4 my-3 w-[calc(100%-32px)]'>
      적용
    </o-button>
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import OButton from '../../../components/button/OButton.vue'
import RegionModalHeader from './RegionModalHeader.vue'

const regions = ['강남구', '서초구', '성동구', '광진구', '마포구', '송파구', '용산구', '종로구']

const emit = defineEmits(['close'])

const onClickItem = (id: number) => {
  emit('select', id)
}

const onClose = () => {
  emit('close')
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>
