import Vue from 'vue'
import './plugins'
import VueChatScroll from 'vue-chat-scroll';
import App from './App'
import router from './router'
import store from './store'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(VueChatScroll);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
