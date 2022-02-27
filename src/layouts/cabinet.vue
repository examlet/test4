<script setup lang="ts">
const router = useRoute()
const tt = ["Хуй", "Залупа"]
</script>

<template>
  <div class="cabinet h-full w-full bg-[#f5f7f9] pt-64px">
    <div class="cabinet__header fixed top-0 left-0 right-0 w-full h-48px z-100 bg-[#fff] border-b border-[#e7e8ec]">
      <div class="cabinet__header_container flex h-48px w-full flex justify-between items-center mx-auto px-20px xl:px-32px text-sm">
          <div class="flex items-center text-teal-600 text-lg">
            <div class="i-carbon-webhook" />
            <div class="ml-10px text-base font-bold">
              <span>QuickSales</span>
            </div>
          </div>

          <div class="-ml-32px absolute p-0 w-full text-center items-center mx-auto">
            Каналы
            <!-- <QBreadcrumb :url="router.path" :titles="tt" /> -->
          </div>

          <div class="flex h-full items-center">
            <div>Лукин Вадим #1337</div>
            <hr class="h-50% w-1px border-l border-[#e1e3e6] mx-5">
            <div class="i-carbon-idea" />
            <hr class="h-50% w-1px border-l border-[#e1e3e6] mx-5">
            <div class="i-carbon-settings" />
          </div>

        </div>
    </div>
  </div>
</template>