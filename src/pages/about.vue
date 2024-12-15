<template>
  <div>
    <AppPageTitle title="About" />
    <section>
      <p>各ページについての説明です。</p>
    </section>
    <v-list
      lines="three"
      :items="items"
      item-props
    />
  </div>
</template>

<script setup>
/** data */
const items = ref([
  {
    to: '/',
    title: 'Top',
    subtitle: 'トップページです。',
    value: 1,
  },
  {
    to: '/about',
    title: 'About',
    subtitle: '各ページの説明をしています。',
    value: 2,
  },
  {
    to: '/localStorage',
    title: 'LocalStorage',
    subtitle: 'ローカルストレージの使用サンプルです。',
    value: 3,
  },
])
</script>
