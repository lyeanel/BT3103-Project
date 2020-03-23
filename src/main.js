import Vue from 'vue';
import './plugins';
import VueChatScroll from 'vue-chat-scroll';
import App from './App';
import router from './router';
import store from './store';
import { CarouselPlugin } from 'bootstrap-vue';
import { NavbarPlugin } from 'bootstrap-vue';
import './firebase/init';
import firebase from 'firebase/app';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(VueChatScroll);
Vue.use(CarouselPlugin);
Vue.use(NavbarPlugin);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user);
});

new Vue({
  render: h => h(App),
  router,
  store,
  components: { App }
}).$mount('#app');
