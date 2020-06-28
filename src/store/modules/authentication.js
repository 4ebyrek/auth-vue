import axios from 'axios'
import api from '@/api'

export default {
    actions: {
        authenticate({commit}, {username, password}) {

            //TODO спросить почему нужно возваращать именно промис
            return new Promise((resolve, reject) => {
                commit("loadData")

                let formData = new FormData();
                formData.append("username", username);
                formData.append("password", password);
                api.login(formData)
                    .then(resp => {
                        const token = resp.headers.authorization
                        localStorage.setItem('user-token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit("authenticationSuccess", token)
                        resolve(resp)
                    })
                    .catch((err) => {
                        console.log("[vuex] authentication fail")
                        reject(err)
                    })
            })
        },
        invalidateAuthentication({commit}) {
            commit("authenticationFail")
        }
    },
    mutations: {
        loadData: (state) => {
            state.isLoading = true
        },

        authenticationSuccess: (state, token) => {
            state.isLoading = false
            state.token = token
        },
        authenticationFail: (state) => {
            state.isLoading = false
            state.token = ''
        }
    },
    state: {
        isLoading: false,
        token: localStorage.getItem('user-token') || ''
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token
        }
    }
}