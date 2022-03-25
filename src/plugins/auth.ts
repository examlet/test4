export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', (to, from) => {
        function isTokenExpired(token) {
            const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
            return (Math.floor((new Date).getTime() / 1000)) >= expiry;
        }

        const store = useStore()

        const access_token = store.accessToken
        console.log(`access: ${access_token}`)
        const refresh_token = store.refreshToken
        console.log(`refresh: ${refresh_token}`)

        let redirect = false
        if (!access_token || isTokenExpired(access_token)) {
            if (refresh_token) {
                fetch("https://b562yw.deta.dev/api/v1/users/refresh", {
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(refresh_token)
                }).then(response => response.json()).then(data => {
                    store.accessToken = data.access_token
                    store.refreshToken = data.refresh_token
                }).catch(exception => {
                    console.log(exception)
                    redirect = true
                })

            } else {
                redirect = true
            }
        }

        if (redirect && !to.fullPath.includes('auth')) {
            return navigateTo('/auth')
        }


    }, { global: true })
})