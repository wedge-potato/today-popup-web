<template>
  <button class='rounded-lg h-11 bg-coral-60'>
    <span class='sub-2 text-white'>
      <slot />
    </span>
  </button>
</template>
<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
