<template>
  <nav-bar />
  <img :src='mock' alt='popup store thumbnail'>
  <div class="flex flex-col py-5 px-5 gap-2">
    <span class="cap-1 text-coral-60">{{data.category}}</span>
    <h1 class="head-1">{{ data.title }}</h1>
    <div class="flex flex-col body-2 gap-2">
      <div v-if="data.startDate || data.endDate" class="row">
        <img :src="calendar" class="icon" alt="운영 기간" />
        <span>{{ data.startDate }}</span>
        <span v-if="data.startDate && data.endDate"> ~ </span>
        <span>{{ data.endDate }}</span><br />
      </div>
      <div v-if="data.time" class="row">
        <img :src="time" class="icon" alt="운영 시간"/>
        <span>{{ data.time }}</span><br />
      </div>
      <div v-if='data.region' class="row">
        <img :src="location" class="icon" alt="지역"/>
        <span >서울시 {{ data.region }}</span>
      </div>
      <div v-if='data.link' class="row">
        <img :src="link" class="icon" alt="링크"/>
        <a :href='url' class="text-link truncate" >{{ data.link }}</a>
      </div>
    </div>
  </div>
  <division/>
  <div class="flex flex-col items-start py-5 px-5 gap-2">
    <h2 class='sub-1 mb-3'>소개</h2>
    <span :class="`body-1 whitespace-pre-wrap ${!showMore && 'line-clamp-[9]'}`">{{ data.description }}</span>
    <button class="body-2 text-tertiary" @click="toggleShorMore">{{ showMore ? '접기' : '더보기' }}</button>
  </div>
  <division/>
  <div class="flex flex-col py-5 px-5 gap-2">
    <h2 class='sub-1 mb-3'>위치</h2>
    <span class="body-1">{{ data.location }}</span>
  </div>
</template>
<script setup lang='ts'>

import NavBar from '../../components/nav/NavBar.vue'
import mock from '../../assets/mock.png'
import { getPopup } from '../../requests/getPopup.ts'
import {computed, ref} from 'vue'
import Division from '../../components/division/Division.vue'
import {time, calendar, location, link} from '../../assets'

const data = getPopup()

const showMore = ref(false)

const toggleShorMore = () => {
  showMore.value = !showMore.value
}

const url = computed(() => {
  if (data.link.startsWith('https://')) {
    return data.link
  } else {
    return 'https://' + data.link
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
