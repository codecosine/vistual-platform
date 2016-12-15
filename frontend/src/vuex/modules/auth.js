import Vue from 'vue';
import {
  SIGNIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_REQUEST_FINISH,
} from '../mutation-types';

const authState = {
  token: null,
  request: false,
  user: {
    username: 'gduttest',
  },
};
/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SIGNIN_SUCCESS](state, data) {
    state.request = false;
    state.user.username = data.username;
    state.token = data.token;
  },
  [LOGOUT_SUCCESS](state) {
    state.token = null;
    state.user = {
      username: '未登录',
    };
  },
  [SIGNIN_REQUEST](state) {
    state.request = true;
  },
  [SIGNIN_REQUEST_FINISH](state) {
    state.request = false;
  },
};
const actions = {
  signInRequest({ state, commit }, user) {
    if (state.request) {
      return new Error('请求重复发送');
    }
    commit(SIGNIN_REQUEST);
    return Vue.http.post('/users/auth', user);
  },
  signUpRequest({ state, commit }, user) {
    if (state.request) {
      return new Error('请求重复发送');
    }
    commit(SIGNIN_REQUEST);
    return Vue.http.post('/users/register', user);
  },
  signInError({ commit }) {
    commit(SIGNIN_REQUEST_FINISH);
    // console.err(err);
  },
  signInSuccess({ state, commit }, data) {
    commit(SIGNIN_SUCCESS, data);
    commit(SIGNIN_REQUEST_FINISH);
  },
  logout({ commit }) {
    commit('LOGOUT_SUCCESS');
  },
};
const authGetters = {
  username: state => state.user.username,
  token: state => state.token,
};
export default {
  state: authState,
  mutations,
  actions,
  getters: authGetters,
};
