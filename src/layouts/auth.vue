<script setup lang="ts">
</script>

<template>
  <div class="auth">
    <NuxtLink to="/" class="auth__logo">
      <div class="auth__logoIcon">
        <div class="i-carbon-webhook" />
      </div>
      <div class="auth__logoText">
        <span>QuickSales</span>
      </div>
    </NuxtLink>

    <div class="auth__wrapper">
      <div class="auth__container">
        <div class="auth__box">
          <div class="auth__leftCol">
              <div class="auth__line"></div>
              <h1 class="auth__title">Авторизуйтесь в QuickSales ID, чтобы использовать CRM</h1>
              <ul class="auth__list">
                <li class="auth__listItem">
                  <div class="auth__listItemIcon">
                    <div class="i-carbon-two-factor-authentication" />
                  </div>
                  <div class="auth__listItemText">
                    <span>QuickSales ID — единый аккаунт для CRM, сервиса рассылок и рекламного кабинета</span>
                  </div>
                </li>
                <li class="auth__listItem">
                  <div class="auth__listItemIcon">
                    <div class="i-carbon-cloud-registry" />
                  </div>
                  <div class="auth__listItemText">
                    <span>История входа и активности в аккаунте фиксируется</span>
                  </div>
                </li>
                <li class="auth__listItem">
                  <div class="auth__listItemIcon">
                    <div class="i-carbon-region-analysis-volume" />
                  </div>
                  <div class="auth__listItemText">
                    <span>Параллельная сессия невозможна и будет приводить к блокировке аккаунта</span>
                  </div>
                </li>
              </ul>
              <div class="auth__policy">
                  Регистрируясь в сервисе, принимаю условия соглашения и политики конфиденциальности
                </div>
          </div>
          <div class="auth__rightCol">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>