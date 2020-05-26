import axios from 'axios';
import router from "@/router";
import store from "@/store";


const invalideAuth = () => {
    console.log("asd")
    store.dispatch("invalidateAuthentication")
    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem('user-token')
    router.push("/login")
}

const request = (method, url, data) => {
    return axios({method, url, data})
        .catch(error => {
            if (
                error.response.status === 401
                && error.config
                && !error.config.__isRetryRequest
            ) {
                invalideAuth()
            }
        })
}


export {request}