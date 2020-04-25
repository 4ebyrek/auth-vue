import axios from 'axios'

export default {
    actions: {
        sendAuthData({commit}, {username, password}){

            return new Promise((resolve, reject) => {
                commit("loadData")

                let formData = new FormData();
                formData.append("username", username);
                formData.append("password", password);

                axios({url: 'http://localhost:8081/login', data: formData, method: 'POST' })
                    .then(resp => {
                        const token = resp.headers.authorization
                        localStorage.setItem('user-token', token) // store the token in localstorage
                        commit("updateAuthToken", token)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit("authFailed", err)
                        localStorage.removeItem('user-token')
                        console.log("Wrong username or password" + err.message);
                        reject(err)
                    })
            })
        }
    },
    mutations: {
        loadData(state){
            state.status = 'loading'
        },
        updateAuthToken(state){
            state.status='success'
        },
        authFailed(state){
            state.status='error'
        }
    },
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
    },
    getters: {
        isAuthenticated(state){
            return !!state.token
        },
        getAuthStatus(state){
            return state.status
        },
        getAuthToken(state){
            return state.token
        }
    }
}