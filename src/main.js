import Vue from 'vue';
import VeeValidate from 'vee-validate';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

import './workers/registerServiceWorker';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VeeValidate);

firebase.initializeApp({
  apiKey: 'AIzaSyAf555VVwI3jdF6PoY9IGtvLUHmsW7P4LA',
  authDomain: 'vue-fb-crm.firebaseapp.com',
  databaseURL: 'https://vue-fb-crm.firebaseio.com',
  projectId: 'vue-fb-crm',
  storageBucket: 'vue-fb-crm.appspot.com',
  messagingSenderId: '794228927177',
  appId: '1:794228927177:web:d74987d4df0455d9937b18',
  measurementId: 'G-CQPPWK7EM5',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount('#app');
  }
});
