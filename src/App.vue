<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'App',
        created: function () {
            this.setToken()
        },
        methods: {
            setToken() {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token')
            },
        },
    };
</script>
