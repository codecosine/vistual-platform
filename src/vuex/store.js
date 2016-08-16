/**
 * Created by codecosine on 16-8-16.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import graph from './modules/graph';

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    graph,
  },
  strict: debug,
});
