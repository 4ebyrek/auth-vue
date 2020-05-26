import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './modules/routes.js'
import store from '@/store/index'


Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    console.log(`is auth ? = ${store.getters.isAuthenticated}`)

    if (to.name !== 'login' && !store.getters.isAuthenticated) {
        next({name: 'login'})
    } else {
        next()
    }
})

export default router