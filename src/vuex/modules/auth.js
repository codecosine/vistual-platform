/**
 * Created by codecosine on 16-8-17.
 */
import {
  LOGIN_SUCCESS,
  USERINFO_SUCCESS,
  USERINFO_FAILURE,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS,
} from '../mutation-types';
import { getCookie } from '../../api/authService';

const authState = {
  token: getCookie('token') || null,
  user: null,
};

const mutations = {
  [LOGIN_SUCCESS](state, action) {
    const innerState = state;
    innerState.token = action.token;
  },
  [USERINFO_SUCCESS](state, action) {
    const innerState = state;
    innerState.user = action.user;
  },
  [USERINFO_FAILURE](state) {
    const innerState = state;
    innerState.user = null;
  },
  [LOGOUT_USER](state) {
    const innerState = state;
    innerState.token = getCookie('token') || null;
    innerState.user = null;
    innerState.token = null;
  },
  [UPDATE_USER_SUCCESS](state, action) {
    const innerState = state;
    innerState.user = action.user;
  },
};

export default {
  state: authState,
  mutations,
};
