import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ECharts from 'vue-echarts/src/components/ECharts.vue';

Vue.component('chart', ECharts);

// 路由模块和HTTP模块
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/index': {
    component: App,
  },
});

router.redirect({
  '*': '/index',
});
router.start(App, '#app');
