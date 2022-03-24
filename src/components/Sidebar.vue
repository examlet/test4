<script setup lang="ts">
const collapsed = useState('sidebarCollapsed', () => false)
</script>

<template>
  <div
    class="bg-white-500 shadow-md float-left fixed z-2 h-full p-2 flex flex-col"
    :class="[collapsed ? 'w-3.3rem' : 'w-12.5rem']"
    style="transition: 0.3s ease;"
    @mouseenter="collapsed = false"
    @mouseleave="collapsed = true"
  >
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/cabinet/123" icon="i-carbon-home" title="Математика" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/cabinet/123/leads" icon="i-carbon-collaborate" title="Клиенты" />
    <SidebarLink to="/cabinet/123/orders" icon="i-carbon-shopping-cart" title="Заказы" />
    <SidebarLink to="/cabinet/123/dialogs" icon="i-carbon-application-web" title="Диалоги" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/cabinet/123/mails" icon="i-carbon-scan" title="Рассылки" />
    <SidebarLink to="/cabinet/123/bots" icon="i-carbon-app-connectivity" title="Боты" />
    <SidebarLink to="/cabinet/123/actions" icon="i-carbon-flow-stream-reference" title="Действия" />
    <SidebarLink to="/cabinet/123/subscriptions" icon="i-carbon-page-scroll" title="Подписки" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/cabinet/123/ads" icon="i-carbon-dashboard-reference" title="Объявления" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/cabinet/123/analitics" icon="i-carbon-chart-combo" title="Аналитика" />
    <SidebarLink to="/cabinet/123/controls" icon="i-carbon-operations-record" title="Управление" />
    <hr op20 mx-3 my-2 />
    <SidebarLink to="/cabinet/123/processes" icon="i-carbon-iot-connect" title="Процессы" />
    <SidebarLink to="/cabinet/123/api" icon="i-carbon-container-software" title="API и интеграции" />
  </div>

  <div class="ml-3.3rem">
    <slot />
  </div>
</template>