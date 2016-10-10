/**
 * Created by codecosine on 16-8-16.
 */
import graphOption from '../api/graphOption';
import * as types from './mutation-types';
import AuthService from '../api/AuthService';

export const initGraph = ({ dispatch }, type) => {
  const option = graphOption.defaultType(type);
  dispatch(types.INIT_OPTION, option);
};
export const updateGraph = ({ dispatch }, option) => {
  dispatch(types.UPDATE_OPTION, option);
};
export const updateType = ({ dispatch }, type) => {
  dispatch(types.UPDATE_TYPE, type);
};
// Application
export const selectApp = ({ dispatch }, id) => {
  dispatch(types.UPDATE_CURRENTAPP, id);
};

// authentication
export const tokenLogin = () => {
  console.log('tokenLogin');
};
export const saveToken = ({ dispatch }, token) => {
  dispatch(types.AUTH_SUCCESS, token);
  return AuthService.saveToken(token);
};

export const login = ({ dispatch }, user) => {
  dispatch(types.SIGNIN_REQUEST);
  return AuthService.login(user);
};
export const register = ({ dispatch }, user) => {
  dispatch(types.SIGNIN_REQUEST);
  return AuthService.register(user);
};
