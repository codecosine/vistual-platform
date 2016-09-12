/**
 * Created by codecosine on 16-8-17.
 */
import {
  AUTH_SUCCESS,
  SIGNIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../mutation-types';

const authState = {
  token: null,
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
    innerState.user = data.user;
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
