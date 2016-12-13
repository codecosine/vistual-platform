/**
 * Created by cosine on 2016/9/9.
 */
import Vue from 'vue';
import {
  UPDATE_CHART_ITEMS,
  CREATE_CHART,
  DELETE_CHART,
  UPDATE_CHART_ID,
  UPDATE_SERIES,
  UPDATE_CURRENT_NAME,
  UPDATE_CHART_XAXIS,
} from '../mutation-types';

const appState = {
  chartItems: [{
    name: 'bar',
    src: require('../../assets/img/gallery/bar-mark.png'), // eslint-disable-line
  }],
  currentId: 0,
  createFrom: {
    name: '',
    chartType: '',
    xAxis: [],
  },
  examples: {
    bar: {
      title: {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['蒸发量', '降水量'],
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [{
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        markPoint: {
          data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }],
        },
        markLine: {
          data: [{ type: 'average', name: '平均值' }],
        } },
        {
          name: '降水量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          markPoint: {
            data: [{ name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 }, { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }],
          },
          markLine: {
            data: [{ type: 'average', name: '平均值' }],
          },
        }],
    },
    line: {
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
  },
  graphOptions: {
    title: {
      text: '当前没有图表数据渲染',
    },
    xAxis: [
      {
        type: 'category',
        data: [],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [],
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
};
/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [UPDATE_CHART_ITEMS](state, data) {
    state.chartItems = data;
  },
  [CREATE_CHART](state, data) {
    state.chartItems.push(data);
  },
  [DELETE_CHART](state, index) {
    state.appLists.splice(index, 1);
  },
  [UPDATE_CHART_ID](state, id) {
    state.currentId = id;
  },
  [UPDATE_CURRENT_NAME](state, data) {
    state.currentName = data;
  },
  [UPDATE_SERIES](state, data) {
    state.dataSeries = data;
  },
  [UPDATE_CHART_XAXIS](state, data) {
    state.createFrom.xAxis.push(data);
  },
};
const actions = {
  fetchItemsSuccess({ state, commit }, data) {
    commit(UPDATE_CHART_ITEMS, data);
  },
  dataSeriesRequest({ state, commit }, user) {
    if (state.request) {
      return new Error('请求重复发送');
    }
    return Vue.http.post('/users/auth', user);
  },
  addXAxis({ state, commit }, dataSerie) {
    commit(UPDATE_CHART_XAXIS, dataSerie);
  },
  updateName({ state, commit }, name) {
    commit(UPDATE_CURRENT_NAME, name);
  },
};
const appGetters = {
  currentId: state => state.currentId,
  chartsItems: state => state.chartItems,
  dataSeries: state => state.dataSeries,
  option: state => state.graphOptions,
  examples: state => state.examples,
  createChartType: state => state.createFrom.chartType,
};

export default {
  state: appState,
  mutations,
  actions,
  getters: appGetters,
};
