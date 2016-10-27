import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueValidator from 'vue-validator';
import AuthService from './api/AuthService';

import App from './App';
import Welcome from './components/Welcome.vue';
import Gallery from './components/Gallery.vue';
import Application from './components/Application.vue';
import Exhibition from './components/Exhibition.vue';
import Editor from './components/Editor.vue';
import SignIn from './components/SignIn.vue';

import 'bootstrap/less/bootstrap.less';
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueValidator);

const router = new VueRouter();
router.map({
  '/index': {
    name: 'index',
    component: Welcome,
  },
  '/session': {
    name: 'login',
    component: SignIn,
  },
  '/app': {
    name: 'main',
    component: Application,
    auth: true,
    subRoutes: {
      '/': {
        component: Gallery,
      },
      'exhibition/:appId': {
        name: 'exhibition',
        component: Exhibition,
      },
      'editor/:appId': {
        name: 'editor',
        component: Editor,
      },
    },
  },
});

router.beforeEach(({ to }) => {
  if (to.auth) {
    // 在权限跳转前，尝试使用vuex中的token进行验证
    return AuthService.isLoggedIn(to.router.app.$store.state.auth.token);
  }
  return true;
});
router.redirect({
  '*': '/index',
});
router.start(App, 'app');
