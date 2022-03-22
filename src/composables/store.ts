import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
    const collapsed = ref(true)

    return { collapsed }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))