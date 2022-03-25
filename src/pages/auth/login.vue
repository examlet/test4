<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const login = useState('login', () => '')
const password = useState('password', () => '')


const store = useStore()
const router = useRouter()
const auth = async () => {
  await fetch(
    "https://b562yw.deta.dev/api/v1/users/login",
    {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({ 'login': login.value, 'password': password.value }),
      mode: "no-cors"
    }
  )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      store.accessToken = data.access_token
      store.refreshToken = data.refresh_token
      router.push('/cabinet')
    })
}
</script>

<template>
  <NuxtLayout name="auth">
    <NuxtLink
      to="/auth"
      class="flex w-18 mb-4 font-sans text-base text-left text-teal-600 no-underline hover:underline decoration-teal-600 underline-offset-3"
      style="margin-left: -0.3rem"
    >
      <div text-xl i-carbon-chevron-left top-8 />
      <div text-base>Назад</div>
    </NuxtLink>

    <div class="text-xl text-left font-semibold">Войдите или зарегистрируйтесь по логину и паролю</div>
    <input
      v-model="login"
      id="login"
      placeholder="Введите логин"
      type="text"
      autocomplete="false"
      class="bg-transparent text-left border-1 border-gray-500 border-opacity-50 focus:border-teal-600 rounded outline-none active:outline-none px-4 py-2 mt-5 h-12 w-full"
    />

    <input
      v-model="password"
      id="password"
      placeholder="Введите или придумайте пароль"
      type="password"
      autocomplete="false"
      class="bg-transparent text-left border-1 border-gray-500 border-opacity-50 focus:border-teal-600 rounded outline-none active:outline-none px-4 py-2 mt-5 h-12 w-full"
    />

    <QButton strong class="w-full h-12 my-5" @click="auth">Далее</QButton>

    <NuxtLink
      to="#"
      class="flex mb-6 font-sans text-base text-left text-teal-600 no-underline hover:underline decoration-teal-600 underline-offset-3"
    >Забыли пароль?</NuxtLink>
  </NuxtLayout>
</template>