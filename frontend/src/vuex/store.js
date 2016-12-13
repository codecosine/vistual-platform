import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import application from './modules/application';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    auth,
    application,
  },
  strict: process.env.NODE_ENV !== 'production',
});
