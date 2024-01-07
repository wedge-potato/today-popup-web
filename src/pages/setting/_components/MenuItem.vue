<template>
  <div class="flex justify-between sub-2 px-4 py-2">
    <span>{{name}}</span>
    <img :src="next" alt="이동" width="24px" height="24px" />
  </div>
</template>
<script setup lang="ts">
import {next} from '../../../assets'

defineProps({
  name: String,
  route: String,
})
</script>
