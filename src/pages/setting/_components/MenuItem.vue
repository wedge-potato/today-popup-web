<template>
  <div class="flex justify-between">
    <span>{{name}}</span>
    <span>></span>
  </div>
</template>
<script setup lang="ts">
defineProps({
  name: String,
  route: String,
})
</script>
