import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const authUser = reactive({
    uuid: '',
    username: '',
    login: '',
    accessToken: null,
    firstAuth: true,
  })

  return {
    authUser
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))