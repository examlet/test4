<script lang="ts" setup>
const progress = ref(0);
const router = useRoute()

watch(router, (selection, prevSelection) => {
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
  <progress :value="progress" class="q-progress"></progress>
</template>

<style scoped>
progress {
  appearance: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 9999999;
}

::-webkit-progress-bar {
  background-color: transparent;
}

::-webkit-progress-value {
  background-color: #14b8a6;
}
</style>