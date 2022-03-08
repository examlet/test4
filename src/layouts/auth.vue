<script setup lang="ts">
</script>

<template>
  <div class="auth h-full">
    <NuxtLink to="/" class="auth__logo hidden lg:flex absolute top-40px left-40px items-start z-1 text-teal-600">
      <div class="auth__logoIcon h-24px w-24px text-3xl">
        <div class="i-carbon-webhook" />
      </div>
      <div class="auth__logoText ml-20px text-2xl font-bold">
        <span>QuickSales</span>
      </div>
    </NuxtLink>

    <div class="auth__wrapper flex items-center justify-center w-full h-full">
      <div class="auth__container flex relative w-360px lg:w-720px my-20px">
        <div class="auth__box flex relative mx-20px md:mx-0 w-360px lg:w-720px h-450px border-1px border-[#e1e3e6] rounded-10px overflow-hidden">
          <div class="auth__leftCol hidden lg:block w-360px h-full flex-grow-0 flex-shrink-0 bg-[#f5f7f9] p-28px">
              <div class="auth__line w-full h-8px bg-teal-500 mb-20px rounded"></div>
              <h1 class="auth__title font-sans text-lg font-normal leading-snug break-words mb-18px">Авторизуйтесь в QuickSales ID, чтобы использовать CRM</h1>
              <ul class="auth__list mb-32px">
                <li class="auth__listItem mb-2px py-10px flex items-center">
                  <div class="auth__listItemIcon w-28px h-28px flex-shrink-0 text-2xl text-[#99a2ad] mr-12px">
                    <div class="i-carbon-two-factor-authentication" />
                  </div>
                  <div class="auth__listItemText text-base leading-tight w-1px flex-grow text-[#6d7885]">
                    <span>QuickSales ID — единый аккаунт для CRM, сервиса рассылок и рекламного кабинета</span>
                  </div>
                </li>
                <li class="auth__listItem mb-2px py-10px flex items-center">
                  <div class="auth__listItemIcon w-28px h-28px flex-shrink-0 text-2xl text-[#99a2ad] mr-12px">
                    <div class="i-carbon-cloud-registry" />
                  </div>
                  <div class="auth__listItemText text-base leading-tight w-1px flex-grow text-[#6d7885]">
                    <span>История входа и активности в аккаунте фиксируется</span>
                  </div>
                </li>
                <li class="auth__listItem mb-2px py-10px flex items-center">
                  <div class="auth__listItemIcon w-28px h-28px flex-shrink-0 text-2xl text-[#99a2ad] mr-12px">
                    <div class="i-carbon-region-analysis-volume" />
                  </div>
                  <div class="auth__listItemText text-base leading-tight w-1px flex-grow text-[#6d7885]">
                    <span>Параллельная сессия невозможна и будет приводить к блокировке аккаунта</span>
                  </div>
                </li>
              </ul>
              <div class="auth__policy op60 text-sm text-center fw300">
                  Регистрируясь в сервисе, принимаю условия соглашения и политики конфиденциальности
                </div>
          </div>
          <div class="auth__rightCol w-full lg:w-360px h-full flex-grow-0 flex-shrink-0 box-border bg-[#fff] p-28px pb-16px">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>