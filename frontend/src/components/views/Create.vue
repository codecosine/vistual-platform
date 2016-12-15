<template lang="html">
  <div class="container">
    <div class="row">
      <form role="form">
        <h4 id="overview" class="page-header">当前创建图表为：{{ chartType }}</h4>

        <div class="input-group col-sm-5">
          <input type="text" class="form-control" placeholder="图表名称" v-model="chartName">
        </div><!-- /input-group -->
        <h4 id="overview" class="page-header">标识列(x轴)  <small>选择合适的数据</small></h4>

        <div class="form-group">
          <ul class="algorithm-select-list clearfix">
            <li v-for="item in dataSeries">
              <a class="algorithm-select-item" @click="this.flagName = item"
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
          <div class="alert alert-info" role="alert">
            <span>当前选择的数据列顺序为:[<span>
            <span v-for="item in SeriesList">{{item}},</span>
            <span>]</span>
          </div>
        </div>
        <h4 id="overview" class="page-header">数据分类(过滤)  <small>请选择合适的数据类别(如：性别，城市，颜色)</small></h4>
        <div class="form-group">
          <ul class="algorithm-select-list clearfix">
            <li v-for="item in dataSeries">
              <a class="algorithm-select-item" @click="this.filterGroup = item"
                 v-bind:class="{ 'algorithm-selected': item === filterGroup }" >
                {{item}}
              </a>
            </li>
          </ul>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" @click="confirm">生成图表</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  /* eslint no-param-reassign: ["error", { "props": false }] */

  data() {
    return {
      chartName: '',
      flagName: '',
      SeriesList: [],
      filterGroup: '',
    };
  },
  computed: {
    chartType() {
      return this.$store.getters.chartType;
    },
    dataSeries() {
      return this.$store.getters.dataSeries;
    },
  },
  methods: {
    confirm() {
      const seriesArg = {
        type: this.chartType,
        filterNames: this.SeriesList,
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
