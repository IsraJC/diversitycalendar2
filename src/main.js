import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './firebase'
import { auth } from './firebase'
import VueTextareaAutosize from 'vue-textarea-autosize';
import 'firebase/firestore';

import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate)
Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})