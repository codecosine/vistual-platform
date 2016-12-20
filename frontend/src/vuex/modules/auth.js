import Vue from 'vue';
import {
  SIGNIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_REQUEST_FINISH,
  UPDATE_USER_MSG,
  CLEAR_USER_MSG,
} from '../mutation-types';

const authState = {
  token: null,
  request: false,
  usermsg: {
    msgstate: false,
    msg: '',
  },
  user: {
    username: 'xiaoxian',
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
  [UPDATE_USER_MSG](state, data) {
    state.usermsg = data;
  },
  [CLEAR_USER_MSG](state) {
    state.usermsg = {
      msgstate: false,
      msg: '',
    };
  },
};
const actions = {
  signInRequest({ state, commit }, user) {
    if (state.request) {
      return new Error('请求重复发送');
    }
    commit(SIGNIN_REQUEST);
    return Vue.http.post('/auth', user);
  },
  signUpRequest({ state, commit }, user) {
    if (state.request) {
      commit(UPDATE_USER_MSG, { msgstate: 'danger', msg: '请不要尝试多次登录' });
      return new Error('请求重复发送');
    }
    commit(SIGNIN_REQUEST);
    return Vue.http.post('/register', user);
  },
  signInError({ commit }) {
    commit(SIGNIN_REQUEST_FINISH);
    commit(UPDATE_USER_MSG, { msgstate: 'danger', msg: '登录失败，请重试！' });
  },
  updateInfoMsg({ commit }, msg) {
    commit(UPDATE_USER_MSG, { msgstate: 'info', msg });
  },
  clearUserMsg({ commit }) {
    commit(CLEAR_USER_MSG);
  },
  signInSuccess({ state, commit }, data) {
    commit(SIGNIN_SUCCESS, data);
    commit(SIGNIN_REQUEST_FINISH);
    commit(UPDATE_USER_MSG, { msgstate: 'success', msg: '登录成功，正转入应用页' });
  },
  logout({ commit }) {
    commit(LOGOUT_SUCCESS);
    commit(UPDATE_USER_MSG, { msgstate: 'info', msg: '注销成功' });
  },
  tokenAuthFalse({ commit }) {
    commit(UPDATE_USER_MSG, { msgstate: 'danger', msg: '本地权限已经过期失效，请尝试使用用户密码登录' });
  },
};
const authGetters = {
  username: state => state.user.username,
  token: state => state.token,
  usermsg: state => state.usermsg,
};
export default {
  state: authState,
  mutations,
  actions,
  getters: authGetters,
};
