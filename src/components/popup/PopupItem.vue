<template>
  <div class='w-40'>
    <img :src='mock' alt='popup store thumbnail'>
    <div class='font-bold'>{{ item?.title }}</div>
    <div class='text-sm'>
      <span>{{ item?.startDate }}</span>
      <span> ~ </span>
      <span>{{ item?.endDate }}</span>
    </div>
    <span v-if='item?.region' class='text-sm'>{{ item.region.join(' ') }}</span>
  </div>
</template>
<script setup lang='ts'>
import { PropType } from 'vue'
import { Popup } from '../../requests/getPopupList.ts'
import mock from '../../assets/mock.png'

defineProps({
  item: Object as PropType<Popup>,
})
</script>
