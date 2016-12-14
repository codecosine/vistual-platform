<template lang="html">
  <div class="container">
    <div class="row">
      <form role="form">
        <h4 id="overview" class="page-header">当前创建图表为：{{ createChartType }}</h4>

        <div class="input-group col-sm-5">
          <input type="text" class="form-control" placeholder="图表名称" v-model="chartName">
        </div><!-- /input-group -->
        <h4 id="overview" class="page-header">标识列(x轴)  <small>选择合适的数据</small></h4>

        <div class="form-group">
          <ul class="algorithm-select-list clearfix">
            <li v-for="item in algorithmList">
              <a class="algorithm-select-item" v-on:click="select(item)"
                 v-bind:class="{ 'algorithm-selected': item.isSelected }" >
                {{item.name}}
              </a>
            </li>
          </ul>
        </div>
        <h4 id="overview" class="page-header">数据列配置(y轴)  <small>请按顺序选择数据列</small></h4>
        <div class="form-group">
          <ul class="algorithm-select-list clearfix">
            <li v-for="item in algorithmList">
              <a class="algorithm-select-item" v-on:click="select(item)"
                 v-bind:class="{ 'algorithm-selected': item.isSelected }" >
                {{item.name}}
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
      algorithmList: [
        {
          name: 'IRE',
          args: '',
          isSelected: true,
        },
        {
          name: 'CRE',
          args: '',
          isSelected: false,
        },
        {
          name: 'ICRE',
          args: '',
          isSelected: false,
        },
        {
          name: 'IIRE',
          args: '',
          isSelected: false,
        },
        {
          name: 'IRE3',
          args: '',
          isSelected: false,
        },
        {
          name: 'CRE3',
          args: '',
          isSelected: false,
        },
      ],
      select(item) {
        this.algorithm = item.name;
        this.algorithmList.forEach((ele) => {
          ele.isSelected = false;
        });
        item.isSelected = true;
      },
    };
  },
  computed: {
    createChartType() {
      return this.$store.getters.createChartType;
    },
    dataSeries() {
      return this.$store.getters.dataSeries;
    },
  },
  methods: {
    addXAxis(dataSerie) {
      this.$store.actions.addXAxis(dataSerie);
    },
    confirm() {

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
