<script setup lang="ts">
const drawerCollapsed = ref(true);
const toggleDrawer = () => (drawerCollapsed.value = !drawerCollapsed.value);
const submenuCollapsed = ref(true)
const toggleSubmenu = () => submenuCollapsed.value = !submenuCollapsed.value
const target = ref(null)
onClickOutside(target, () => submenuCollapsed.value = true)
</script>

<template>
  <div class="cabinet h-full w-full bg-[#f5f7f9] pt-48px">
    <div
      class="cabinet__header fixed top-0 left-0 right-0 w-full h-48px z-100 bg-[#fff] border-b border-[#e7e8ec] shadow"
    >
      <div
        class="cabinet__header_container bg-[#fff] flex h-48px w-full flex justify-between items-center mx-auto px-20px xl:px-32px text-sm"
      >
        <div class="flex h-full items-center text-teal-600 text-lg">
          <div class="i-carbon-webhook" />
          <div class="ml-5px text-base font-bold">
            <span>QuickSales</span>
          </div>
          <div class="hidden sm:flex h-full items-center">
            <hr class="h-50% w-1px border-l border-[#e1e3e6] mx-5" />
            <slot name="breadcrumb" />
          </div>
        </div>

        <div class="flex h-full items-center">
          <div
            @click="toggleSubmenu"
            class="block sm:hidden i-carbon-user-profile cursor-pointer hover:text-teal-700"
          />

          <div
            class="hidden md:block text-[#6d7885] mr-20px truncate text-xs tracking-tighter fw200 select-text !selection:bg-teal-700 !selection:bg-opacity-20"
          >#7a37913b-76bb-4dbe-ae60-14a50d241f57</div>
          <QDropdown class="hidden sm:block">
            <QButton tertiary class="flex items-center mx-5px">
              <span class="mr-5px">Вадим Лукин</span>
              <div class="text-base i-carbon-caret-down" />
            </QButton>

            <template #content>
              <NuxtLink
                to="/cabinet/profile"
                class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px"
              >
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-user-profile" />
                <span>Профиль</span>
              </NuxtLink>
              <NuxtLink
                to="/cabinet/balance"
                class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px"
              >
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-currency-ruble" />
                <span>Баланс</span>
              </NuxtLink>
              <NuxtLink
                to="/cabinet/help"
                class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px"
              >
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-document-unknown" />
                <span>Помощь</span>
              </NuxtLink>
              <NuxtLink
                to="/cabinet/support"
                class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px"
              >
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-ai-status-in-progress" />
                <span>Поддержка</span>
              </NuxtLink>
              <hr class="op20 mx-20px my-2" />
              <NuxtLink
                to="#"
                class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px"
              >
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-login" />
                <span>Выйти</span>
              </NuxtLink>
            </template>
          </QDropdown>

          <hr class="h-50% w-1px border-l border-[#e1e3e6] mx-5" />
          <div class="i-carbon-notification-new cursor-pointer hover:text-teal-700" />
          <hr class="h-50% w-1px border-l border-[#e1e3e6] mx-5" />
          <div
            class="i-carbon-settings transition-transform duration-300 ease-in-out cursor-pointer hover:text-teal-700"
            :class="{ 'rotate-360': !drawerCollapsed }"
            @click="toggleDrawer"
          />
        </div>
      </div>
    </div>

    <div
        ref="target"
        class="absolute block lg:hidden bg-[#fff] rounded-2xl top-48px shadow-lg w-full transition duration-300 z-1"
        :class="[submenuCollapsed ? '-translate-y-120%' : '-translate-y-0']"
      >
        <div class="flex flex-col py-15px my-0 mx-auto py-0 box-border relative w-full px-25px text-sm">
          <div class="h-20px mt-0">
            <NuxtLink to="/cabinet/profile" class="landing__header_submenuLink">
              <div class="i-carbon-user-profile" />
              <div class="ml-10px">Профиль</div>
            </NuxtLink>
          </div>
          <div class="h-20px mt-10px">
            <NuxtLink to="/cabinet/balance" class="landing__header_submenuLink">
              <div class="i-carbon-currency-ruble" />
              <div class="ml-10px">Баланс</div>
            </NuxtLink>
          </div>
          <div class="h-20px mt-10px">
            <NuxtLink to="/cabinet/help" class="landing__header_submenuLink">
              <div class="i-carbon-document-unknown" />
              <div class="ml-10px">Помощь</div>
            </NuxtLink>
          </div>
          <div class="h-20px mt-10px">
            <NuxtLink to="/cabinet/support" class="landing__header_submenuLink">
              <div class="i-carbon-ai-status-in-progress" />
              <div class="ml-10px">Поддержка</div>
            </NuxtLink>
          </div>
          <div class="h-20px mt-10px">
            <NuxtLink to="#" class="landing__header_submenuLink">
              <div class="i-carbon-login" />
              <div class="ml-10px">Выйти</div>
            </NuxtLink>
          </div>
        </div>
      </div>

    <div class="cabinet__body h-full">
      <div
        v-if="!drawerCollapsed"
        class="bg-black-500 op10 z-1 fixed h-full w-full"
        @click="toggleDrawer"
      />
      <QDrawer :collapsed="drawerCollapsed" />
      <slot />
    </div>
  </div>
</template>
