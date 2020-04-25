<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-spacer />
                                <v-toolbar-title>Mercy Group</v-toolbar-title>
                                <v-spacer />
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit.prevent="submit" id="signIn">
                                    <v-text-field label="Login" name="login" v-model="username" prepend-icon="person" type="text"/>
                                    <v-text-field id="password" label="Password" v-model="password" name="password" prepend-icon="lock" type="password"/>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn type="submit" color="primary" form="signIn">Sign In</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
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
        methods: {
            ...mapActions(["sendAuthData"]),
            ...mapGetters(["getAuthToken", "getAuthStatus","isAuthenticated"]),
            submit(){
                this.sendAuthData({
                    username: this.username,
                    password: this.password
                }).then(()=>{
                    console.log("isAuthenticated = "+ this.isAuthenticated());
                    console.log("getAuthStatus = "+ this.getAuthStatus());
                    console.log("getAuthToken = "+ this.getAuthToken());
                });
            }
        }
    }
</script>
