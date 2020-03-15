import Vue from 'vue'
import Vuex from 'vuex'
import authData from './modules/auth.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authData
    }
})