<template>
  <div>
    <v-btn
      variant="flat"
      base-color="green"
      elevation="6"
      class="normal-btn"
      :size="props.size"
    >
      {{ props.label }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
/** props */
const props = withDefaults(
  defineProps<{
    label: string
    size: string
  }>(),
  {
    label: '',
    size: '',
  },
)
</script>

<style scoped>
.normal-btn{
  margin:0.3em
}
</style>
