/**
 * Created by cosine on 2016/9/9.
 */
import {
  GET_GRAPHLIST,
} from '../mutation-types';
const storageState = {
  graphList: null,
  dataSeries: null,
  synchronization: {
    graphList: false,
    dataSeries: false,
  },
};
const mutations = {
  [GET_GRAPHLIST](state, data) {
    const innerState = state;
    innerState.graphList = data;
  },
};

export default {
  state: storageState,
  mutations,
};
