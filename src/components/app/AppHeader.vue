<template>
  <div>
    <v-app-bar
      color="primary"
      :elevation="2"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="isOpen = !isOpen" />

      <NuxtLink
        to="/"
        class="app-title"
      >
        <v-app-bar-title>
          Application Bar
        </v-app-bar-title>
      </NuxtLink>
      <template #append>
        <v-switch
          v-model="darkTheme"
          :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
          hide-details
          inset
          @update:model-value="changeTheme"
        />
      </template>
    </v-app-bar>
    <AppNavigation v-model="isOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

// ナビゲーションの表示・非表示を制御
const isOpen = useState('isOpen', () => false)

const darkTheme = ref(false)
const theme = useTheme()

const changeTheme = () => {
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
}
</script>

<style scoped>
.app-title{
  color: white;
  text-decoration:none;
}
</style>
