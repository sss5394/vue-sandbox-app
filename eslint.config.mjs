// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',

      'import/order': [
        'error',
        {
          'groups': [
            'builtin', // 組み込みモジュール
            'external', // npmでインストールした外部ライブラリ
            'internal', // 自作モジュール
            [
              'parent',
              'sibling',
            ],
            'object',
            'type',
            'index',
          ],
          'newlines-between': 'always', // グループ毎にで改行を入れる
          'pathGroupsExcludedImportTypes': [
            'builtin',
          ],
          'alphabetize': {
            order: 'asc', // 昇順にソート
            caseInsensitive: true, // 小文字大文字を区別する
          },
          'pathGroups': [ // 指定した順番にソートされる
            {
              pattern: '@/components/common',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/components/hooks',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
    },
  },
)
