<script setup lang="ts">
const activeTab = ref(1)
const drawerCollapsed = ref(true);

const toggleDrawer = () => (drawerCollapsed.value = !drawerCollapsed.value);

const toggleNotification = () => {
  drawerCollapsed.value = activeTab.value == 0 && !drawerCollapsed.value ? true : false;
  activeTab.value = 0;
};

const toggleSettings = () => {
  drawerCollapsed.value = activeTab.value == 1 && !drawerCollapsed.value ? true : false;
  activeTab.value = 1;
};
</script>

<template>
  <div class="cabinet">
    <div class="cabinet__header">
      <div class="cabinet__header_container">
        <div class="cabinet__header_leftGroup">
          <NuxtLink to="/" class="cabinet__header_leftGroup">
            <div class="cabinet__header_logoIcon" />
            <div class="cabinet__header_logoText">QuickSales</div>
          </NuxtLink>

          <div class="cabinet__header_breadcrumb">
            <hr class="divider-vertical" />
            <slot name="breadcrumb" />
          </div>
        </div>

        <div class="cabinet__header_rightGroup">
          <div class="cabinet__header_userUuid">#</div>

          <QDropdown>
            <div class="block sm:hidden i-carbon-user-profile cabinet__header_icon" />

            <QButton tertiary class="cabinet__header_userButton">
              <span class="mr-5px">Имя Фамилия</span>
              <div class="text-base i-carbon-caret-down" />
            </QButton>

            <template #content>
              <NuxtLink to="/cabinet/profile" class="cabinet__header_userLink">
                <div class="cabinet__header_userLinkIcon i-carbon-user-profile" />
                <span>Профиль</span>
              </NuxtLink>
              <NuxtLink to="/cabinet/balance" class="cabinet__header_userLink">
                <div class="cabinet__header_userLinkIcon i-carbon-currency-ruble" />
                <span>Баланс</span>
              </NuxtLink>
              <NuxtLink to="/cabinet/help" class="cabinet__header_userLink">
                <div class="cabinet__header_userLinkIcon i-carbon-document-unknown" />
                <span>Помощь</span>
              </NuxtLink>
              <NuxtLink to="/cabinet/support" class="cabinet__header_userLink">
                <div class="cabinet__header_userLinkIcon i-carbon-ai-status-in-progress" />
                <span>Поддержка</span>
              </NuxtLink>
              <hr class="divider-basic" />
              <NuxtLink to="#" class="cabinet__header_userLink">
                <div class="cabinet__header_userLinkIcon i-carbon-login" />
                <span>Выйти</span>
              </NuxtLink>
            </template>
          </QDropdown>

          <hr class="divider-vertical" />

          <div
            @click="toggleNotification"
            :class="{ 'animate-tada animate-1s': drawerCollapsed }"
            class="i-carbon-notification-new cabinet__header_icon"
          />

          <hr class="divider-vertical" />

          <div
            @click="toggleSettings"
            :class="{ 'rotate-180': !drawerCollapsed }"
            class="i-carbon-settings duration-300 cabinet__header_icon"
          />
        </div>
      </div>
    </div>

    <div class="cabinet__body">
      <div v-if="!drawerCollapsed" class="cabinet__drawerBackDrop" @click="toggleDrawer" />

      <QDrawer :collapsed="drawerCollapsed">
        <div class="p-20px">
          <QTabs
            v-model="activeTab"
            :currentTab="activeTab"
            :tabList="['Уведомления', 'Настройки']"
            class="h-40px w-full"
          />

          <div class="mt-20px">
            <div v-if="activeTab == 0">Уведомления</div>
            <div v-else>Настройки</div>
          </div>
        </div>
      </QDrawer>
      <slot />
    </div>
  </div>
</template>
