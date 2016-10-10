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
export const saveToken = (token) => {
  AuthService.saveToken(token);
};
export const fetchToken = () => window.localStorage.getItem(types.TOKEN_KEY);
export const auth = ({ dispatch }) => {
  window.localStorage.setItem(types.TOKEN_KEY, 'cosine');
  dispatch(types.AUTH_SUCCESS, 'cosine');
};
