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
                        commit("authenticationSuccess")
                        resolve(resp)
                    })
                    .catch(err => {
                        console.log("authentication failed from vuex")
                        commit("authenticationFail")
                        reject(err)
                    })
            })
        },
        invalidateAuthentication({commit}) {
            commit("authenticationFail")
        }
    },
    mutations: {
        loadData(state) {
            state.isLoading = true
        },
        authenticationSuccess(state) {
            state.isLoading = false
            state.status = true
        },
        authenticationFail(state) {
            state.isLoading = false
            state.status = false
        }
    },
    state: {
        isLoading: false,
        status: false,
    },
    getters: {
        isAuthenticated(state) {
            return state.status
        }
    }
}