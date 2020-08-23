import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#2196f3',
                secondary: '#00bcd4',
                accent: '#ffc107',
                error: '#f44336',
                warning: '#ff5722',
                info: '#607d8b',
                success: '#4caf50'
            },
        },
    },
    icons: {
      iconfont: 'mdi'
    },
});
