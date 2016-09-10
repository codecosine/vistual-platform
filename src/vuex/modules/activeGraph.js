/**
 * Created by codecosine on 16-8-16.
 */
import {
  INIT_OPTION,
  UPDATE_OPTION,
  UPDATE_TYPE,
} from '../mutation-types';

const graphState = {
  graphId: '00001',
  option: {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  },
  graphType: null,
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
  [UPDATE_TYPE](state, type) {
    const innerState = state;
    innerState.graphType = type;
  },
};

export default {
  state: graphState,
  mutations,
};
