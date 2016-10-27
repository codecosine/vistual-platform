/**
 * Created by codecosine on 16-10-1.
 */
/**
 * Created by codecosine on 16-8-16.
 */
import {
  INIT_OPTION,
  UPDATE_OPTION,
  UPDATE_TYPE,
} from '../mutation-types';

const operationState = {
  currentGraph: 'graph1',
  graphArguments: {},
};

const mutations = {
  [INIT_OPTION](state, option) {
    const innerState = state;
    innerState.option = option;
  },
  [UPDATE_OPTION](state, option) {
    const innerState = state;
    innerState.option = option;
  },
  [UPDATE_TYPE](state, type) {
    const innerState = state;
    innerState.graphType = type;
  },
};

export default {
  state: operationState,
  mutations,
};
