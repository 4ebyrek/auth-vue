<template>
    <div>
        <form @submit.prevent="submit">
            <input type="text" placeholder="username" v-model="username"/>
            <input type="text" placeholder="password" v-model="password"/>
            <button type="submit">GO</button>
        </form>
        <hr>
        <h3>{{getAuthToken}}</h3>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    export default {
        name: 'Auth',
        data() {
            return{
                username: '',
                password: ''
            }
        },
        computed: mapGetters(["getAuthToken"]),
        methods: {
            ...mapActions(["sendAuthData"]),
            submit(){
                this.sendAuthData({
                    username: this.username,
                    password: this.password
                });
            }
        }
    }
</script>
