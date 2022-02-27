<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="auth">
    <NuxtLink to="/auth" class="font-sans text-base text-left text-teal-600 no-underline hover:underline decoration-teal-600 underline-offset-3" flex style="margin-left: -0.3rem" w-18 mb-4>
      <div text-xl i-carbon-chevron-left top-8 />
      <div text-base>Назад</div>
    </NuxtLink>

    <div class="text-xl text-left font-semibold mb-3">Войдите или зарегистрируйтесь по логину и паролю</div>
    
    <input
      id="username"
      placeholder="Введите логин"
      type="text"
      autocomplete="false"
      class="bg-transparent text-left border-1 border-gray-500 border-opacity-50 focus:border-teal-600 rounded outline-none active:outline-none px-4 py-2 mt-5 h-12 w-full"
    />

    <input
      id="password"
      placeholder="Введите или придумайте пароль"
      type="password"
      autocomplete="false"
      class="bg-transparent text-left border-1 border-gray-500 border-opacity-50 focus:border-teal-600 rounded outline-none active:outline-none px-4 py-2 mt-5 h-12 w-full"
    />

    <QButton class="w-full h-12 my-5" strong>Далее</QButton>

    <NuxtLink to="" class="font-sans text-base text-left text-teal-600 no-underline hover:underline decoration-teal-600 underline-offset-3" flex mb-6>Забыли пароль?</NuxtLink>
  </NuxtLayout>
</template>

<style scoped></style>