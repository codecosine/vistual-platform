<template lang="html">
  <div class="container">
      <form role="form">
        <h4 id="overview" class="page-header">创建图表类型为：{{ chartType }}</h4>
        <div class="input-group col-sm-5">
          <input type="text" class="form-control" placeholder="图表标题名称" v-model="chartName">
        </div><!-- /input-group -->
        <h4 id="overview" class="page-header">数据标识列(x轴)  <small>选择合适的标识数据</small></h4>
        <div class="form-group">
          <ul class="algorithm-select-list clearfix">
            <li v-for="item in dataSeries">
              <a class="algorithm-select-item" @click="flagSelect(item)"
                 v-bind:class="{ 'algorithm-selected': item === flagName }" >
                {{item}}
              </a>
            </li>
          </ul>
        </div>
        <h4 id="overview" class="page-header">数据列配置(y轴)  <small>请按顺序选择数据列</small></h4>
        <div class="form-group">
          <ul class="algorithm-select-list clearfix">
            <li v-for="item in dataSeries">
              <a class="algorithm-select-item" @click="SeriesSelect(item)"
                 v-bind:class="{ 'algorithm-selected': SeriesList.indexOf(item)!== -1 }" >
                {{item}}
              </a>
            </li>
          </ul>
        </div>
        <div class="form-group">
            <span class="text-mute">当前选择的数据列顺序为:[<span>
            <span class="text-mute" v-for="item in SeriesList">{{item}},</span>
            <span class="text-mute">]</span>
        </div>
        <h4 id="overview" class="page-header">数据列分类(过滤)  <small>请选择合适的数据类别(如：性别，城市，颜色)</small></h4>
        <div class="form-group">
          <ul class="algorithm-select-list clearfix">
            <li><a class="algorithm-select-item"  v-bind:class="{ 'algorithm-selected': '' === filterGroup }"  @click="filterSelect('')">不需要过滤</a></li>
            <li v-for="item in dataSeries">
              <a class="algorithm-select-item" @click="filterSelect(item)"
                 v-bind:class="{ 'algorithm-selected': item === filterGroup }" >
                {{item}}
              </a>
            </li>
          </ul>
        </div>
        <h4 id="overview" class="page-header">数据分类值(过滤)  <small>输入需要过滤/分类的数据值(如：男生，女生，广东)</small></h4>
        <div class="form-group sort-input-group">
          <input type="text" class="col-sm-2" placeholder="数据分类值" v-model="filterNameValues[0]">
          <input type="text" class="col-sm-2" placeholder="数据分类值" v-model="filterNameValues[1]">
          <input type="text" class="col-sm-2" placeholder="数据分类值" v-model="filterNameValues[2]">
          <input type="text" class="col-sm-2" placeholder="数据分类值" v-model="filterNameValues[3]">
          <input type="text" class="col-sm-2" placeholder="数据分类值" v-model="filterNameValues[4]">
        </div>
        <div class="form-group">
          <a type="button" href="#/app/exhibition" class="btn btn-primary" @click="confirm">生成图表</a>
        </div>
      </form>
  </div>
</template>
<script>
export default {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  data() {
    return {
      chartType: '',
      chartName: '',
      flagName: '',
      filterNameValues: ['', '', '', '', ''],
      SeriesList: [],
      filterGroup: '',
      chartTypes: ['bar', 'line', 'scatter'],
    };
  },
  computed: {
    chartType() {
      return this.$store.getters.chartType;
    },
    dataSeries() {
      if (this.$store.getters.dataSeries[0] === '当前没有导入数据') {
        this.$store.dispatch('updateInfoMsg', '当前没有可用的数据列，点击上方数据导入，前往导入数据');
      }
      return this.$store.getters.dataSeries;
    },
  },
  methods: {
    chartTypeSelect(item) {
      this.chartType = item;
    },
    confirm() {
      const seriesArg = {
        type: this.chartType,
        filterNames: this.SeriesList,
        filterNameValues: this.filterNameValues,
        filterGroup: this.filterGroup,
      };
      const axisArg = this.flagName;
      this.$store.dispatch('comfirmCreate', {
        chartName: this.chartName,
        axisArg,
        seriesArg,
      });
    },
    // 单选
    filterSelect(item) {
      this.filterGroup = item;
    },
    flagSelect(item) {
      this.flagName = item;
    },
    // 多选
    SeriesSelect(item) {
      if (this.SeriesList.indexOf(item) !== -1) {
        this.SeriesList.splice(this.SeriesList.indexOf(item), 1);
      } else {
        this.SeriesList.push(item);
      }
    },
  },
};
</script>
<style lang="css">
  .sort-input-group {
    height: 30px;
  }
  .sort-input-group input {
    margin-right: 10px;
    height: 30px;
  }
  .algorithm-select-list{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  .algorithm-select-list li{
    float: left;
    position: relative;
    margin: 0 4px 4px 0;
    line-height: 28px;
    vertical-align: middle;
    padding: 2px;
    cursor: pointer;
  }
  .algorithm-select-list li a:hover{
    border: 1px solid #bd2013;
  }
  .algorithm-select-list li a {
    float: left;
    background-color: #fff;
    color: #4c4848;
    white-space: nowrap;
    width: auto!important;
    min-width: 10px;
    padding: 0 9px;
    text-align: center;
    border: 1px solid #b8b7bd;
    text-decoration: none;
  }
  .algorithm-select-list li .algorithm-selected{
    border: 1px solid #bd2013;
  }
</style>
