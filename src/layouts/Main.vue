<template>
    <v-content class="grey lighten-4">
        <NavBar/>
        <v-content class="ma-0 pa-0 mx-4">
            <router-view></router-view>
        </v-content>
    </v-content>
</template>

<script>
    import NavBar from "@/components/NavBar";

    export default {
        name: 'App',
        components: {NavBar},
        data: () => ({
            //
        })
    }
</script>