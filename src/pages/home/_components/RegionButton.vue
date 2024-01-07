<template>
  <button :class='`relative flex items-center gap-1 py-1 px-4 border-[1.5px] rounded-full ${count ? "border-coral-60 bg-coral-10 text-coral-60" : "border-grey-30"}`'>
    <span v-if='count' class='absolute -top-[1.5px] -right-[1.5px] flex items-center justify-center bg-coral-60 rounded-full cap-3 w-3 h-3 text-white'>
      {{ count }}
    </span>
    <img :src='icon' width='24px' height='24px' alt="필터" />
    <span class='cap-1'>지역</span>
  </button>
</template>
<script setup lang='ts'>
import { filterBlack, filterCoral } from '../../../assets'
import { computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
})

const icon = computed(() => props.count ? filterCoral : filterBlack)
</script>
