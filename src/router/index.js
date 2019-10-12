import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/auth',
      component: () => import(/* webpackChunkName: "about" */ '../views/Auth/Index.vue'),
      meta: {
        layout: 'empty',
      },
      children: [
        {
          path: '',
          name: 'login',
          component: () => import(/* webpackChunkName: "adm" */ '../views/Auth/Login.vue'),
        },
        {
          path: 'registration',
          name: 'registration',
          component: () => import(/* webpackChunkName: "adm" */ '../views/Auth/Registration.vue'),
        },
      ],
    },
  ],
});
