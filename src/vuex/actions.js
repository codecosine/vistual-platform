/**
 * Created by codecosine on 16-8-16.
 */
import graphOption from '../api/graphOption';
import * as types from './mutation-types';

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

