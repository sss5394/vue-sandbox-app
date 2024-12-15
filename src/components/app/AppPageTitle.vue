<template>
  <div :class="['text-h3', 'app-page-title']">
    {{ props.title }}
  </div>
</template>

<script setup lang="ts">
/** props */
const props = withDefaults(
  defineProps<{
    title: string
  }>(),
  {
    title: '',
  },
)
</script>

<style scoped>
.app-page-title{
  margin-bottom:0.25em
}
</style>
