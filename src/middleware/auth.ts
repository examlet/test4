export default defineNuxtRouteMiddleware((to, from) => {
    function isTokenExpired(token) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }

    const refresh_token = localStorage.getItem('refresh_token')
    console.log(`refresh: ${refresh_token}`)
    const access_token = useStore().authUser.accessToken
    console.log(`access: ${access_token}`)

    let redirect = null
    if (access_token) {
        if (isTokenExpired(access_token)) {
            if (refresh_token) {
                console.log(refresh_token)
                fetch("http://127.0.0.1:8000/api/v1/users/refresh", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(refresh_token)
            })
                .then(response => response.ok ? response.json() : null)
                .then(data => {
                    localStorage.setItem('refresh_token', data.refresh_token)
                    useStore().authUser.accessToken = data.access_token
                    useStore().authUser.uuid = data.uuid
                    useStore().authUser.username = data.username
                })
                .catch(exception => {
                    console.log(exception)
                    redirect = true
                })
            } else {
                redirect = true
            }
        }
    } else if (refresh_token) {
        fetch("http://127.0.0.1:8000/api/v1/users/refresh", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(refresh_token)
            })
                .then(response => response.ok ? response.json() : null)
                .then(data => {
                    localStorage.setItem('refresh_token', data.refresh_token)
                    useStore().authUser.accessToken = data.access_token
                    useStore().authUser.uuid = data.uuid
                    useStore().authUser.username = data.username
                })
                .catch(exception => {
                    console.log(exception)
                    redirect = true
                })
    } else {
        redirect = true
    }

    if (redirect) {
        return navigateTo(`/auth`)
    }    
})