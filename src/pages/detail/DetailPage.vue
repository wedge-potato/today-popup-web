<template>
  <nav-bar />
  <img :src='url' alt='popup store thumbnail'>
  <div class="flex flex-col py-5 px-5 gap-2">
    <span class="cap-1 text-coral-60">{{data?.category}}</span>
    <h1 class="head-1">{{ data?.title }}</h1>
    <div class="flex flex-col body-2 gap-2">
      <div v-if="data?.startDate || data?.endDate" class="row">
        <img :src="calendar" class="icon" alt="운영 기간" />
        <span>{{ data?.startDate }}</span>
        <span v-if="data?.startDate && data?.endDate"> ~ </span>
        <span>{{ data?.endDate }}</span><br />
      </div>
      <div class="row">
        <img :src="time" class="icon" alt="운영 시간"/>
        <span>{{ data?.startTime }} ~ {{data?.endTime}}</span><br />
      </div>
      <div class="row">
        <img :src="location" class="icon" alt="지역"/>
        <span >{{data?.sido}} {{ data?.sigungu }}</span>
      </div>
      <div v-if='data?.urlLink' class="row">
        <img :src="link" class="icon" alt="링크"/>
        <a :href='url' class="text-link truncate" >{{ data.urlLink }}</a>
      </div>
    </div>
  </div>
  <division/>
  <div class="flex flex-col items-start py-5 px-5 gap-2">
    <h2 class='sub-1 mb-3'>소개</h2>
    <span :class="`body-1 whitespace-pre-wrap ${!showMore && 'line-clamp-[9]'}`">{{ data?.introduction }}</span>
    <button class="body-2 text-tertiary" @click="toggleShorMore">{{ showMore ? '접기' : '더보기' }}</button>
  </div>
  <division/>
  <div class="flex flex-col py-5 px-5 gap-2">
    <h2 class='sub-1 mb-3'>위치</h2>
    <span class="body-1 inline-block">
      {{data?.sido}} {{ data?.sigungu }}
      <img :src="link" alt="popup image" />
      <span>
        복사
      </span>
    </span>
  </div>
</template>
<script setup lang='ts'>

import NavBar from '../../components/nav/NavBar.vue'
import {computed, ref} from 'vue'
import Division from '../../components/divide-line/DivideLine.vue'
import {time, calendar, location, link} from '../../assets'
import {useGetPopup} from '../../requests/use/use-get-popup.ts'

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
})

const {data} = useGetPopup({id: props?.id ?? 0})

const showMore = ref(false)

const toggleShorMore = () => {
  showMore.value = !showMore.value
}

const url = computed(() => {
  if (data?.value?.images[0].startsWith('https://')) {
    return data?.value?.images[0]
  } else {
    return 'https://' + data?.value?.images[0]
  }
})
</script>
<style scoped>
.icon {
  width: 22px;
  height: 22px;
  margin-right: 8px;
}
.row {
  display: flex;
}
</style>
