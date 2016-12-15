const examples = {
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
  scatter: {
    title: {
      text: '散点图',
    },
    toolbox: {
      feature: {
        dataZoom: {},
        brush: {
          type: ['rect', 'polygon', 'clear'],
        },
      },
    },
    legend: {
      data: [],
      left: 'center',
    },
    xAxis: [
      {
        type: 'value',
        scale: true,
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        splitLine: {
          show: false,
        },
      },
    ],
    series: [],
  },
};
function machiningRaw(raw, seriesArg) {
  const result = [];
  // 找出所有要过滤的值
  const filterGroupValues = [];
  raw.forEach((ele) => {
    if (filterGroupValues.indexOf(ele[seriesArg.filterGroup]) === -1) {
      if (filterGroupValues.length > 10) {
        throw new Error('所分类数据类别值过多，请重新选择分类值');
      }
      filterGroupValues.push(ele[seriesArg.filterGroup]);
    }
  });
  filterGroupValues.forEach((filterGroupValue) => {
    const resultSeries = {};
    // 分组过滤
    let filtered = raw.filter(ele => ele[seriesArg.filterGroup] === filterGroupValue);
    filtered = filtered.map((seriesItem) => {
      const array = [];
      // 按顺序添加数据列
      seriesArg.filterNames.forEach((value) => {
        array.push(seriesItem[value]);
      });
      return array;
    });
    resultSeries.type = seriesArg.type;
    resultSeries.data = filtered;
    resultSeries.name = seriesArg.filterGroup;
    result.push(resultSeries);
  });
  return result;
}

function getOption(createArgs, rawData) {
  const option = examples[createArgs.chartType];
  // 添加标题
  option.title.text = createArgs.chartName;
  // 添加legend 小组
  option.legend.data.push(createArgs.seriesArg.map(ele => ele.group));
  // 暂定处理xAxis
  // if (option.xAxis[0].type === 'value') {
  // }
  // 处理series
  option.series.push(machiningRaw(rawData, createArgs.seriesArg));
  return option;
}
export default {
  getOption,
};
