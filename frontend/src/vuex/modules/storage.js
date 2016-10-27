/**
 * Created by cosine on 2016/9/9.
 */
import {
  GET_GRAPH_OPTIONS,
  GET_GRAPH_SERIES,
} from '../mutation-types';
const storageState = {
  graphOptions: {
    graphName1: {
      title: {
        text: '一天用电量分布',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15',
          '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00',
          '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} W',
        },
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
          lte: 6,
          color: 'green',
        }, {
          gt: 6,
          lte: 8,
          color: 'red',
        }, {
          gt: 8,
          lte: 14,
          color: 'green',
        }, {
          gt: 14,
          lte: 17,
          color: 'red',
        }, {
          gt: 17,
          color: 'green',
        }],
      },
      series: [
        {
          name: '用电量',
          type: 'line',
          smooth: true,
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390,
            380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
          markArea: {
            data: [[{
              name: '早高峰',
              xAxis: '07:30',
            }, {
              xAxis: '10:00',
            }], [{
              name: '晚高峰',
              xAxis: '17:30',
            }, {
              xAxis: '21:15',
            }]],
          },
        },
      ],
    },
    graphName2: {
      title: {
        text: '折线图堆叠',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
      ],
    },
  },
  dataSeries: {
    dataName1: {
      type: 'default',
      dimension: 1,
      data: [1, 2, 3, 4, 5, 6, 6],
    },
    dataName2: {
      type: 'default',
      dimension: 1,
      data: ['男生'],
    },
  },
  synchronization: {
    graphList: false,
    dataSeries: false,
  },
};
const mutations = {
  [GET_GRAPH_OPTIONS](state, data) {
    const innerState = state;
    innerState.graphOptions = data;
  },
  [GET_GRAPH_SERIES](state, data) {
    const innerState = state;
    innerState.dataSeries = data;
  },
};

export default {
  state: storageState,
  mutations,
};
