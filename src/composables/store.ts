import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const accessToken = ref('')

  return {
    accessToken
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))