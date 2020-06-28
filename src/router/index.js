import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './modules/routes.js'
import store from '@/store'


Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !store.getters.isAuthenticated) {
        next({name: 'login'})
    } else {
        next()
    }
})

export default router