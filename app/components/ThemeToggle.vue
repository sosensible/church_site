<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  theme.value = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  document.documentElement.setAttribute('data-theme', theme.value)
})
</script>

<template>
  <button @click="toggleTheme" class="btn btn-outline btn-sm bg-base-300">
    Toggle Theme
  </button>
</template>
