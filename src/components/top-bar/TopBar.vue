<template>
  <div class="flex justify-between bg-gray-200">
    <button v-if="!isHome" @click="onClickBack">뒤로가기</button>
    <h1 v-if="isHome">서비스명 + 로고</h1>
    <button v-if="!isSetting" @click="onClickSetting">설정</button>
  </div>
</template>
<script setup lang="ts">

import {useRouter} from "vue-router";
import {computed} from "vue";

const router = useRouter()
const currentPath = computed(() => router.currentRoute.value.path)

const isHome = computed(() => currentPath.value === '/')
const isSetting = computed(() => currentPath.value === '/setting')

const onClickBack = () => {
  router.back()
}

const onClickSetting = () => {
  router.push('/setting')
}
</script>
