<script lang="ts" setup>
const progress = ref(0);
const router = useRoute()

watch(router, () => {
  const { pause, resume, isActive } = useIntervalFn(() => {
    progress.value += 0.01

    if (progress.value > 1) {
      progress.value = 0
      pause()
    }
  }, 4)
})

onMounted(() => {
  const { pause, resume, isActive } = useIntervalFn(() => {
    progress.value += 0.01

    if (progress.value > 1) {
      progress.value = 0
      pause()
    }
  }, 1)
})
</script>

<template>
  <progress :value="progress" class="fixed top-0 left-0 w-full h-2px z-9999999"/>
</template>