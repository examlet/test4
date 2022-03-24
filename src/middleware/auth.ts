export default defineNuxtRouteMiddleware((to, from) => {
    function isTokenExpired(token) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }

    const access_token = useStore().accessToken
    if (access_token) {
        if (isTokenExpired(access_token)) {
            fetch("http://127.0.0.1:8000/api/v1/users/refresh", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(localStorage.getItem('refresh_token'))
            })
                .then(response => {
                    return response.ok ? response.json() : null
                })
                .then(data => {
                    localStorage.setItem('refresh_token', data.refresh_token)
                    useStore().accessToken = data.access_token
                })
                .catch(exception => {
                    console.log(exception)
                })

        }
    } else {
        return navigateTo(`/auth`)
    }
})