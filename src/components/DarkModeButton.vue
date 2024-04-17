<script setup lang="ts">
import { ref } from 'vue'

interface toggleDark {
  toggleDark: () => void
}

const isDark = ref(false)
const toggleDark = () : void => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
  return;
}

</script>

<template>
    <button
        @click="toggleDark"
        class="justify-end bg-white flex p-2 m-6 rounded-full dark:bg-neutral-800 dark:text-white shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-110"
      >
        <v-icon name="la-moon" scale="1" />  
    </button>
</template>