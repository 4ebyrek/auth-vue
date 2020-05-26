<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import router from '@/router'
    import store from '@/store'


    export default {
        name: 'App',
        data: () => ({
            //
        }),
        created: function () {
            this.checkToken()
        },
        methods: {
            checkToken() {
                if (localStorage.getItem('user-token')) {
                    console.log("local storage exists")

                    store.commit("authenticationSuccess")
                    axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token')

                    axios.get('http://localhost:8081/api/v1/auth/check', {
                        headers: {
                            Authorization: localStorage.getItem('user-token')
                        }
                    }).catch((e) => {
                        console.log(`check auth fail ${e}`)
                        store.dispatch("invalidateAuthentication")
                        axios.defaults.headers.common['Authorization'] = ''
                        localStorage.removeItem('user-token')
                        router.push("/login")
                    })
                }
            },
        },
    };
</script>
