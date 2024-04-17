<script setup lang="ts">
import DarkModeButton from './components/DarkModeButton.vue'
import Layout from './components/Layout.vue'
</script>

<template>
  <div class="flex flex-col  w-screen h-screen bg-slate-100 dark:bg-neutral-900">
    <div class="flex flex-row justify-end">
      <DarkModeButton />
    </div>
    <Layout />
  </div> 
</template>

<style scoped>
</style>
