/**
 * Created by cosine on 2016/9/9.
 */
import {
  GET_GRAPHLIST,
} from '../mutation-types';
const storageState = {
  graphOptions: {
    group1: {
      polar: {
        title: {
          text: '极坐标双数值轴',
        },
        legend: {
          data: ['line'],
        },
        polar: {
          center: ['50%', '54%'],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        angleAxis: {
          type: 'value',
          startAngle: 0,
        },
        radiusAxis: {
          min: 0,
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: (function () {
              const data = [];
              for (let i = 0; i <= 360; i++) {
                const t = i / 180 * Math.PI;
                const r = Math.sin(2 * t) * Math.cos(2 * t);
                data.push([r, i]);
              }
              return data;
            }()),
          },
        ],
        animationDuration: 2000,
      },
    },
    group2: {
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
