<template>
  <v-app-bar 
    color="primary" 
    :elevation="2" 
    elevate-on-scroll>
    <v-app-bar-nav-icon @click="isOpen = !isOpen"/>
    <NuxtLink to="/" class="app-title">
      <v-app-bar-title>
        Application Bar
      </v-app-bar-title>
    </NuxtLink>
  </v-app-bar>
  <AppNavigation :is-open="isOpen"/>
</template>

<script setup lang="ts">
// ナビゲーションの表示・非表示を制御
const isOpen = useState('isOpen', () => false)
</script>


<style scoped>
.app-title{
  color: white;
  text-decoration:none;
}
</style>
