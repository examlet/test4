<script setup lang="ts">
</script>

<template>
  <NuxtLayout name="cabinet">
    <Sidebar />
    <template #breadcrumb>
      <slot name="breadcrumb" />
    </template>
    <slot/>
  </NuxtLayout>
</template>
