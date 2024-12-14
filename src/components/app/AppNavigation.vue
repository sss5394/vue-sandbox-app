<template>
  <v-navigation-drawer v-model="props.isOpen" permanent>
    <v-list>
      <v-list-item
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.path"
      >
        <v-list-item-title class="text-h6">
          {{ menu.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
/** props */
interface Props {
  isOpen: boolean;
}

// デフォルトを定義
const props = withDefaults(defineProps<Props>(), { isOpen: false });

const menus = [
  {
    name: 'Top',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]
</script>

<style scoped lang="scss">
// .v-list-item がアクティブ時の背景色を消す方法が分からなかったので無理やり対応😭
::v-deep(.v-list-item__overlay) {
  display: none;
}
</style>
