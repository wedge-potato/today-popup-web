<template>
  <top-bar />
  <img :src='mock' alt='popup store thumbnail'>
  <div>
    <h1>{{ data.title }}</h1>
    <span>{{ data.startDate }}</span>
    <span> ~ </span>
    <span>{{ data.endDate }}</span><br />
    <span>{{ data.time }}</span><br />
    <span v-if='data.region'>{{ data.region.join(' ') }}</span>
  </div>
  <div>
    <h2 class='font-bold'>소개</h2>
    <span>{{ data.description }}</span>
  </div>
  <div>
    <h2 class='font-bold'>위치</h2>
    <span>{{ data.location }}</span>
  </div>
  <div>
    <h2 class='font-bold'>홈페이지</h2>
    <a :href='link'>{{ data.link }}</a>
  </div>
</template>
<script setup lang='ts'>

import TopBar from '../../components/top-bar/TopBar.vue'
import mock from '../../assets/mock.png'
import { getPopup } from '../../requests/getPopup.ts'
import { computed } from 'vue'

const data = getPopup()

const link = computed(() => {
  if (data.link.startsWith('https://')) {
    return data.link
  } else {
    return 'https://' + data.link
  }
})
</script>
