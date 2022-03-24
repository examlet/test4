<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="auth">
    <div class="auth__content_title">Войдите или зарегистрируйтесь</div>
    <div class="auth__content_socialTitle">Через социальные сети</div>
    <div class="auth__content_socialBtnGroup">
      <QButton class="auth__content_socialBtn" bordered disabled>
        <div class="auth__content_socialIcon bg-blue-500 i-simple-icons-vk" />
      </QButton>
      <QButton class="auth__content_socialBtn" bordered disabled>
        <div class="auth__content_socialIcon i-logos-telegram" />
      </QButton>
      <QButton class="auth__content_socialBtn" bordered disabled>
        <div class="auth__content_socialIcon i-logos-google-icon" />
      </QButton>
    </div>

    <div class="auth__content_otherTitle">Другим способом</div>

    <div class="auth__content_requestBtnGroup">
      <NuxtLink to="#" class="w-full mr-4">
        <QButton class="auth__content_requestBtn" bordered disabled>Номер телефона</QButton>
      </NuxtLink>
      <NuxtLink to="#" class="w-11rem">
        <QButton class="auth__content_requestBtn" bordered disabled>Почта</QButton>
      </NuxtLink>
    </div>

    <NuxtLink to="/auth/login">
      <QButton class="auth__content_otherBtn" bordered>По имени пользователя и паролю</QButton>
    </NuxtLink>

    <NuxtLink to="#">
      <QButton class="auth__content_otherBtn" dashed disabled>Попробовать в тестовом режиме</QButton>
    </NuxtLink>
  </NuxtLayout>
</template>