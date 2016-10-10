/**
 * Created by codecosine on 16-8-17.
 */
import {
  AUTH_SUCCESS,
  SIGNIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNIN_REQUEST,
} from '../mutation-types';

const authState = {
  token: null,
  signIn_request: false,
  user: {
    username: '未登录',
    authId: '',
  },
};

const mutations = {
  [AUTH_SUCCESS](state, token) {
    const innerState = state;
    innerState.token = token;
  },
  [SIGNIN_SUCCESS](state, data) {
    const innerState = state;
    innerState.signIn_request = false;
    innerState.user = data.user;
  },
  [SIGNIN_REQUEST](state) {
    const innerState = state;
    innerState.signIn_request = true;
  },
  [LOGOUT_SUCCESS](state) {
    const innerState = state;
    innerState.token = null;
    innerState.user = {
      username: '未登录',
      authId: '',
    };
  },
};

export default {
  state: authState,
  mutations,
};
