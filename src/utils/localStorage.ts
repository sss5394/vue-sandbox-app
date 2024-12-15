/* eslint-disable @typescript-eslint/no-explicit-any */
/** Type */
export type StorageData = {
  value: any
  expires?: {
    ttlToken: string
    expiration: number
    timestamp: number
  }
}

/** Util */
export const StorageUtil = {
  SESSION_EXPIRATION: 60000,
  set(key: string, value: any, type?: string) {
    // 有効期限の設定
    let expires = undefined
    switch (type) {
      case 'session':
        expires = {
          ttlToken: crypto.randomUUID(),
          expiration: this.SESSION_EXPIRATION,
          timestamp: Date.now(),
        }
        break
      default:
    }

    try {
      // Dataの格納
      const data: StorageData = expires ? { value, expires } : { value }
      localStorage.setItem(key, JSON.stringify(data))
    }
    catch (e) {
      let message = ''
      if (e instanceof DOMException && e.name === 'QuotaExceededError') {
        message = 'ローカルストレージの容量がいっぱいです'
      }
      else {
        message = 'データの保存中にエラーが発生しました'
      }
      return message
    }
  },
  get(key: string) {
    const dataStr = localStorage.getItem(key)
    if (!dataStr) return null

    const data: StorageData = JSON.parse(dataStr)
    if (data.expires?.ttlToken
      && (Date.now() - data.expires.timestamp > data.expires.expiration)) {
      // 有効期限切れの場合は削除
      localStorage.removeItem(key)
      return null
    }
    return data.value
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  },
}
