<template>
  <div class='flex justify-between flex-wrap'>
    <popup-item
      v-for='(popup, index) in list'
      v-bind:key='index'
      :item='popup'
      @click='onClick(popup.id)'
      class='w-[calc(50%-5px)] mb-7' />
  </div>
</template>
<script setup lang='ts'>
import PopupItem from './PopupItem.vue'
import { PopupList } from '../../requests/getPopupList.ts'
import { computed, PropType } from 'vue'

const props = defineProps({
  popupList: Object as PropType<PopupList>,
})

const emit = defineEmits(['click'])

const list = computed(() => props.popupList?.list)

const onClick = (id: number) => {
  emit('click', id)
}

</script>
