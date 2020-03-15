import axios from 'axios'

export default {
    actions: {
        async sendAuthData(context, {username, password}){
            let formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            await axios.post('http://localhost:8081/login', formData)
                .then(response => {
                    context.commit('updateAuthToken', response.headers.authorization)
                })
                .catch(() => {
                    console.log("Wrong username or password");
                });
        }
    },
    mutations: {
        updateAuthToken(state, token){
            state.token=token.substr("Bearer".length + 1, token.length)
        }
    },
    state: {
        token: ''
    },
    getters: {
        getAuthToken(state){
            return state.token;
        }
    }
}