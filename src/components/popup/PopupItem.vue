<template>
  <div class='flex flex-col'>
    <div class='rounded-lg mb-2 bg-grey-20 min-w-[168px] min-h-[168px] flex items-center' >
    <!--todo: remove onerror-->
      <img :src='item?.thumbnail' alt='popup store thumbnail' onerror="this.style.display='none'"/>
    </div>
    <div class='sub-2'>{{ item?.title }}</div>
    <div class='sub-3 text-secondary'>
      <span>{{ item?.location }}</span>
      <span v-if='item?.location && item?.category'> · </span>
      <span>{{ item?.category }}</span>
      <div v-if='item?.endDate' class='flex'>
        <img :src='calendar' alt='캘린더' width='14px' height='14px' />
        <span>{{ item?.endDate }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { PropType } from 'vue'
import { Popup } from '../../requests'
import { calendar } from '../../assets'

defineProps({
  item: Object as PropType<Popup>,
})
</script>
