<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="auth">
    <div class="auth__content_title text-xl text-left font-semibold mb-6">Войдите или зарегистрируйтесь</div>
    <div class="auth__content_socialTitle text-left text-teal-600 mb-4">Через социальные сети</div>
    <div class="auth__content_socialBtnGroup flex justify-between mb-6">
      <QButton class="auth__content_socialBtn text-2xl w-22 h-12 mr-4" bordered disabled>
        <div class="auth__content_socialIcon mx-a bg-blue-500 i-simple-icons-vk" />
      </QButton>
      <QButton class="auth__content_socialBtn text-2xl w-22 h-12 mr-4" bordered disabled>
        <div class="auth__content_socialIcon mx-a i-logos-telegram" />
      </QButton>
      <QButton class="auth__content_socialBtn text-2xl w-22 h-12" bordered disabled>
        <div class="auth__content_socialIcon mx-a i-logos-google-icon" />
      </QButton>
    </div>

    <div class="auth__content_otherTitle text-left mb-4 text-[#6d7885]">Другим способом</div>

    <div class="auth__content_requestBtnGroup flex h-12 mb-4">
      <NuxtLink to="" class="w-full mr-4">
        <QButton class="auth__content_requestBtn w-full h-full" bordered disabled>Номер телефона</QButton>
      </NuxtLink>
      <NuxtLink to="" class="w-11rem">
        <QButton class="auth__content_requestBtn w-full h-full" bordered disabled>Почта</QButton>
      </NuxtLink>
    </div>

    <NuxtLink to="/auth/login">
      <QButton class="auth__content_otherBtn w-full h-12 mb-4" bordered>По имени пользователя и паролю</QButton>
    </NuxtLink>

    <NuxtLink to="">
      <QButton class="auth__content_otherBtn w-full h-12 mb-4" dashed disabled>Попробовать в тестовом режиме</QButton>
    </NuxtLink>
  </NuxtLayout>
</template>