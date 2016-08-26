/**
 * Created by codecosine on 16-8-16.
 */
import {
  INIT_OPTION,
  UPDATE_OPTION,
} from '../mutation-types';

const graphState = {
  option: {},
  lastCheckout: null,
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
};

export default {
  state: graphState,
  mutations,
};
