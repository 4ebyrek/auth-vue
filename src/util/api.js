import axios from 'axios';
import router from "@/router";
import store from "@/store";

const invalideAuth = () => {
    store.dispatch("invalidateAuthentication")
    router.push("/login")
    console.log(`[interceptor] authentication failed`)
}

const request = (method, url, data) => {
    return axios({method, url, data})
        .catch(error => {
            if (
                error.response.status === 401
            ) {
                invalideAuth()
            }
        })
}


export {request}