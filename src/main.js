import Vue from 'vue';
import App from './App';
import Welcome from './components/Welcome';
import Hello from './components/DashBoard';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import 'bootstrap/less/bootstrap.less';

// 路由模块和HTTP模块
Vue.use(VueResource);

Vue.use(VueRouter);
const router = new VueRouter();

router.map({
  '/index': {
    component: Welcome,
  },
  '/app': {
    component: Hello,
  },
});

router.redirect({
  '*': '/index',
});
router.start(App, 'app');
