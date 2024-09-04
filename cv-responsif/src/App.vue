<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>


  <header>
    <NavBar @toggle-menu="toggleMenu" />
  </header>

  <main>
    <router-view></router-view>
  </main>


</template>

<style scoped>


</style>
