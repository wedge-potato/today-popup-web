<template>
  <div class='flex flex-col bg-grey-5 w-full h-[100vh] absolute top-0'>
    <region-modal-header @close='onClose' @reset="onReset" />
    <div class='flex flex-grow'>
      <div class='bg-grey-10 w-[125px]'>
        <div class='flex justify-center items-center sub-2 h-14 w-full bg-grey-5'>
          서울
        </div>
      </div>
      <div class='bg-grey-5 flex-grow'>
        <div v-for='region in regions' :key='region' @click='onClickItem(region)'
             class='h-14 flex justify-between items-center px-6 body-1'>
          <span>{{ region }}</span>
          <img v-if="region===selectedRegion" :src="check" alt="선택" width="24px" height="24px" />
        </div>
      </div>
    </div>
    <o-button class='mx-4 my-3 w-[calc(100%-32px)]' @click="onClickApply" >
      적용
    </o-button>
  </div>
</template>
<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'
import OButton from '../../../components/button/OButton.vue'
import RegionModalHeader from './RegionModalHeader.vue'
import {check} from '../../../assets'

const props = defineProps({
  selected: String
})

const emit = defineEmits(['close', 'select', 'reset'])

const selectedRegion = ref(props.selected)

const regions = ['강남구', '서초구', '성동구', '광진구', '마포구', '송파구', '용산구', '종로구']

const onClickItem = (region: string) => {
  selectedRegion.value = region
}
const onReset = () => {
  selectedRegion.value = ''
}

const onClickApply = () => {
  emit('select', selectedRegion.value)
  emit('close')
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

