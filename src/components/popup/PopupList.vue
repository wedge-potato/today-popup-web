<template>
  <div class='flex justify-between flex-wrap'>
    <popup-item
      v-for='(popup, index) in popupList'
      v-bind:key='index'
      :item='popup'
      @click='onClick(popup.id)'
      class='w-[calc(50%-5px)] mb-7' />
  </div>
</template>
<script setup lang='ts'>
import PopupItem from './PopupItem.vue'
import { PropType } from 'vue'
import {Popup} from '../../requests'

defineProps({
  popupList: Object as PropType<Popup[]>,
})

const emit = defineEmits(['click'])

const onClick = (id: number) => {
  emit('click', id)
}

</script>
