<script setup lang="ts">
const props = defineProps({
  to: { type: String, required: true },
  icon: { type: String, required: true },
  title: { type: String, required: true }
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<template>
  <NuxtLink
    :to="to"
    :class="[isActive ? 'text-teal-700 bg-gray-100 rounded' : 'text-gray-700']"
    flex
    items-center
    relative
    py-4
    pl-2
    hover:text-teal-700
    h-37px
  >
    <i :class="icon" flex-shrink-0 mr-3 />
    <transition name="fade">
      <span text-sm truncate pb-2px>{{ title }}</span>
    </transition>
  </NuxtLink>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>