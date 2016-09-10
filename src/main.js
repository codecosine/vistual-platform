import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import Welcome from './components/Welcome.vue';
import DashBoard from './components/DashBoard.vue';

import { RadonInstall } from 'radon-ui';
import 'bootstrap/less/bootstrap.less';
import 'radon-ui/dist/static/css/dist.css';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(RadonInstall, {
  Notification: true,
});

const router = new VueRouter();
router.map({
  '/index': {
    component: Welcome,
  },
  '/app': {
    component: DashBoard,
  },
});
router.redirect({
  '*': '/index',
});
router.start(App, 'app');
