<template>
    <nav>
        <v-toolbar app class="grey lighten-4">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase mdi-white-balance-incandescent--text">
                <span>Mercy</span><span class="font-weight-light">Group</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon flat>
                <v-icon large="true">search</v-icon>
            </v-btn>
            <v-btn icon flat color="indigo">
                <v-icon large="true">mail_outline</v-icon>
            </v-btn>
            <v-btn icon flat color="cyan lighten-2">
                <v-icon large="true">account_circle</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer flat v-model="drawer" app class="blue-grey darken-3">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">
                            {{link.icon}}
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="white--text">
                        {{link.text}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
    export default {
        data() {
            return {
                drawer: false,
                links: [
                    {icon: 'dashboard', text: 'Главная', route: '/'},
                    {icon: 'group', text: 'Клиенты', route: '/clients'},
                    {icon: 'emoji_people', text: 'Сотрудники', route: '/staff'},
                    {icon: 'receipt_long', text: 'Черный список', route: '/black/list'},
                    {icon: 'event_note', text: 'Акции', route: '/events'},
                    {icon: 'storefront', text: 'Склад', route: '/store'},
                ]
            }
        }
    }
</script>