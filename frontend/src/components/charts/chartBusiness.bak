const examples = {
  bar: {
    title: {
      text: 'bar',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: [],
    },
    xAxis: [
      {
        type: 'category',
        data: [''],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [],
  },
  line: {
    title: {
      text: '折线图',
    },
    legend: {
      data: [],
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: [],
  },
  scatter: {
    title: {
      text: '散点图',
    },
    grid: {
      left: '3%',
      right: '7%',
      bottom: '3%',
      containLabel: true,
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
function machiningRaw(raw, seriesArg, filterGroupValues) {
  const result = [];
  // 如果没有设置
  if (filterGroupValues.length === 0) {
    const resultSeries = {};
    const filtered = raw.map((seriesItem) => {
      const array = [];
      // 按顺序添加数据列
      seriesArg.filterNames.forEach((value) => {
        array.push(seriesItem[value]);
      });
      return array;
    });
    resultSeries.type = seriesArg.type;
    resultSeries.data = filtered;
    resultSeries.name = '数据系列';
    result.push(resultSeries);
  } else {
    filterGroupValues.forEach((filterGroupValue) => {
      const resultSeries = {};
      // 分组过滤
      const filtered = [];
      raw.forEach((seriesItem) => {
        const array = [];
        if (seriesItem[seriesArg.filterGroup] === filterGroupValue) {
          // 按顺序添加数据列
          if (seriesArg.filterNames.length === 1) {
            filtered.push(seriesArg.filterNames[0]);
          } else {
            seriesArg.filterNames.forEach((value) => {
              array.push(seriesItem[value]);
            });
            filtered.push(array);
          }
        }
      });
      resultSeries.type = seriesArg.type;
      resultSeries.data = filtered;
      resultSeries.name = filterGroupValue;
      result.push(resultSeries);
    });
  }
  return result;
}

function getOption(createArgs, rawData) {
  const option = examples[createArgs.seriesArg.type];
  const filterGroupValues = createArgs.seriesArg.filterNameValues.filter(ele => ele !== '');
  // 添加标题
  option.title.text = createArgs.chartName;
  // 添加legend 小组
  if (filterGroupValues.length === 0) {
    option.legend.data = ['数据系列'];
  } else {
    option.legend.data = filterGroupValues;
  }
  // 暂定处理xAxis
  if (option.xAxis[0].type === 'category') {
    option.xAxis[0].data = createArgs.axisArg;
  }
  // 处理series
  // console.log('处理series');
  option.series = machiningRaw(rawData, createArgs.seriesArg, filterGroupValues);
  return option;
}
export default {
  getOption,
};
