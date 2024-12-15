<template>
  <div>
    <AppPageTitle
      title="LocalStorage"
    />

    <v-form ref="sampleForm">
      <v-text-field
        v-model="name"
        class="text-field"
        :rules="[rules.required]"
        label="名前"
      />
      <v-text-field
        v-model="age"
        class="text-field"
        :rules="[rules.number, rules.range]"
        label="年齢"
      />
    </v-form>
    <v-container>
      <v-row no-gutters>
        <NormalButton
          label="保存"
          size="large"
          @click="save"
        />
        <NormalButton
          label="保存（期限付き）"
          size="large"
          @click="saveExpired"
        />

        <NormalButton
          label="表示"
          size="large"
          @click="display"
        />

        <NormalButton
          label="クリア"
          size="large"
          @click="clear"
        />
      </v-row>
    </v-container>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        title="ユーザ情報"
      >
        <div v-if="user !== null">
          <v-card-text>
            {{ user.name }}
          </v-card-text>
          <v-card-text>
            {{ user.age }}
          </v-card-text>
        </div>
        <div v-if="user === null">
          <v-card-text>
            登録されていません。
          </v-card-text>
        </div>

        <v-card-actions>
          <v-spacer />

          <v-btn
            text="Close Dialog"
            @click="dialog = false"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import NormalButton from '~/components/button/NormalButton.vue'
import { StorageUtil } from '~/utils/localStorage'

type UserInfo = {
  name: string
  age: number
}

/** data */
const name = ref('')
const age = ref(0)
const dialog = ref(false)
const user = ref<UserInfo | null>(null)
const sampleForm = ref()

const rules = {
  required: (value: string | number) => !!value || 'Required',
  number: (value: number) => !isNaN(value) || 'Number is required',
  range: (value: string) => ((0 <= parseInt(value)) && (parseInt(value) <= 100)) || 'Number is 0 ~ 100',
}

/**
 * Event
 */
async function save() {
  const validResult = await sampleForm.value.validate()
  if (validResult.valid) {
    const user = { name: name.value, age: age.value }
    StorageUtil.set('local-storage', user)
  }
}

async function saveExpired() {
  const validResult = await sampleForm.value.validate()
  if (validResult.valid) {
    const user = { name: name.value, age: age.value }
    StorageUtil.set('local-storage', user, 'session')
  }
}

async function display() {
  const value = StorageUtil.get('local-storage')
  if (value !== null) {
    const userInfo: UserInfo = {
      name: value?.name,
      age: value?.age,
    }
    user.value = userInfo
  }
  else {
    user.value = null
  }
  dialog.value = true
}
function clear() {
  StorageUtil.clear()
}
</script>

<style scope>
.text-field {
  margin: 0.2em
}
</style>
