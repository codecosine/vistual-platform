import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Welcome from './components/Welcome';
import Application from './components/Application';
import Session from './components/Session';

import Exhibition from './components/views/Exhibition';
import Gallery from './components/views/Gallery';
import Create from './components/views/Create';
import Setting from './components/views/Setting';
import Bar from './components/charts/Bar';
import Scatter from './components/charts/Scatter';

import store from './vuex/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.devtools = true;

const routes = [
  { path: '/', component: Welcome },
  { path: '/session/:method', name: 'session', component: Session },
  { path: '/app',
    component: Application,
    children: [
      {
        path: '',
        name: 'main',
        meta: { requiresAuth: true },
        component: Gallery,
      },
      {
        path: 'gallery',
        meta: { requiresAuth: true },
        component: Gallery,
      },
      {
        name: 'exhibition',
        path: 'exhibition',
        meta: { requiresAuth: true },
        component: Exhibition,
      },
      {
        path: 'setting',
        meta: { requiresAuth: true },
        component: Setting,
      },
      {
        name: 'create',
        path: 'create',
        meta: { requiresAuth: true },
        component: Create,
      },
      {
        name: 'bar',
        path: 'bar',
        meta: { requiresAuth: true },
        component: Bar,
      },
      {
        name: 'scatter',
        path: 'scatter',
        meta: { requiresAuth: true },
        component: Scatter,
      },
      {
        name: 'line',
        path: 'line',
        meta: { requiresAuth: true },
        component: Bar,
      },
      {
        name: 'pie',
        path: 'pie',
        meta: { requiresAuth: true },
        component: Bar,
      },
    ],
  },
];
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // const auth = store.getters.token;
    // test warning~
    const auth = true;
    if (!auth) {
      next({
        path: '/app',
      });
      // 分发信息
      store.dispatch('tokenAuthFalse');
    } else {
      next();
    }
  } else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
