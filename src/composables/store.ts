import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const accessToken = ref();
  const refreshToken = useCookie('refreshToken', {maxAge: 60 * 60 * 24})

  return {
    accessToken,
    refreshToken 
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))