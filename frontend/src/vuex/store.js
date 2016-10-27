/**
 * Created by codecosine on 16-8-16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import operation from './modules/operation';
import auth from './modules/auth';
import application from './modules/application';
import storage from './modules/storage';

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    application,
    operation,
    auth,
    storage,
  },
  strict: debug,
});
