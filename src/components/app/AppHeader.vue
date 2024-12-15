<template>
  <div>
    <v-app-bar
      :elevation="2"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="isOpen = !isOpen" />

      <NuxtLink
        to="/"
        class="app-title"
      >
        <v-app-bar-title> Vue Sandbox Appp </v-app-bar-title>
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
    <AppNavigation v-model:is-open="isOpen" />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

// ナビゲーションの表示・非表示を制御
const isOpen = useState('isOpen', () => false)

const darkTheme = ref(false)
const theme = useTheme()
const titleCollor = ref('black')

const changeTheme = () => {
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
  titleCollor.value = darkTheme.value ? 'white' : 'black'
}
</script>

<style scoped>
.app-title {
  color:  v-bind(titleCollor);
  text-decoration: none;
}
</style>
