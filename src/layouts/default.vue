<template> 
  <v-app>
    <v-main>
      <AppHeader />
      <v-container>
        <slot />
      </v-container>
      <AppFooter />
    </v-main>
  </v-app>
</template>
