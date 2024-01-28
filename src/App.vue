<script setup lang="ts">
import {RouterView} from 'vue-router'
import {useQueryClient} from '@tanstack/vue-query'

const queryClient = useQueryClient()
</script>

<template>
    <router-view />
</template>

<style scoped>
</style>
