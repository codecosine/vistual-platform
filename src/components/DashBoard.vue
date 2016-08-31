<template>
  <div class="header">
      <ul class="tools">
        <li><a @click="showLeft = true"><i class="glyphicon glyphicon-menu-hamburger"></i></a></li>
        <li><a @click="showChartsList = true"><i class="glyphicon glyphicon-th"></i></a></li>
        <li><a @click="showArg = true"><i class="glyphicon glyphicon glyphicon-pencil"></i></a></li>
        <li><a @click="changeOrigin"><i class="glyphicon glyphicon-wrench"></i></a></li>
        <li><a @click='changeGraph'><i class="glyphicon glyphicon-cog"></i></a></li>
        <li><a @click="test('polar')"><i class="glyphicon glyphicon-refresh"></i></a></li>
      </ul>
  </div>
  <div class="container">
    <echarts :options="option"></echarts>
  </div>
  <aside :show.sync="showLeft" placement="left" header="配置数据源" :width="350">
    <fieldset>
      <div class="btn-group col-sm-12" role="group" aria-label="...">
        <button type="button" @click="showOrigin = 0" class="btn btn-default">Excel表格</button>
        <button type="button" @click="showOrigin = 1" class="btn btn-default">Mysql数据库</button>
        <button type="button" @click="showOrigin = 2" class="btn btn-default">JSON文本</button>
      </div>
    </fieldset>
    <fieldset v-show="showOrigin == 1">
      <div class="form-group">
        <label class="col-sm-2 control-label">主机地址</label>
        <div class="col-sm-8">
          <input type="text" placeholder="0.0.0.0" class="form-control form-control-rounded" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">端口号</label>
        <div class="col-sm-8">
          <input type="text" placeholder="3306" class="form-control form-control-rounded" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">Database</label>
        <div class="col-sm-8">
          <input type="text" placeholder="test" class="form-control form-control-rounded" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-8">
          <input type="text" placeholder="root" class="form-control form-control-rounded" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">密码</label>
        <div class="col-sm-8">
          <input type="password" class="form-control form-control-rounded" />
        </div>
      </div>
    </fieldset>
    <div v-show="showOrigin == 2">
      <bs-input label="Textarea" type="textarea" no-validate></bs-input>
    </div>
  </aside>
  <aside :show.sync="showChartsList" placement="left" header="选择图表" :width="350">
    <label class="col-sm-3 control-label">图表类型</label>
    <div class="col-sm-9">
      <input type="text" class="form-control"  v-model="chartType" lazy>
    </div>
  </aside>
  <aside :show.sync="showArg" placement="left" header="配置图表参数" :width="350">
    <chart-option></chart-option>
  </aside>
</template>
<style scoped>
  .header {
    height: 5rem;
    display: flex;
    flex-direction: column;
  }
  .nav{
    overflow: visible;
    height: 50px;
    padding: 0 8px;
    z-index: 2;
    font-size: .85em;
    color: #7e888b;
    background: 0 0;
  }
  .tools{
    position: fixed;
    width: 100%;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0);
    color: #6d87de;
    transition: all .4s;
    list-style: none;
  }
  .tools a {
    font-size: 1.4rem;
    display: block;
    margin: 0;
    padding: 1.2rem 1.8rem;
    opacity: 1;
    transition: opacity 0.6s;
  }

  .tools a:hover {
    opacity: 0.7;
  }
</style>
<script>
  import echarts from './ECharts.vue';
  import { aside, input } from 'vue-strap';
  import { initGraph, updateType } from '../vuex/actions';
  import { graphOption, graphType } from '../vuex/getters';
  import chartOption from './chartOption.vue';
  export default {
    components: {
      aside,
      echarts,
      BsInput: input,
      ChartOption: chartOption,
    },
    data() {
      return {
        showChartsList: false,
        showLeft: false,
        showOrigin: 0,
        showTop: false,
        showArg: false,
        selectedChart: 0,
        chartsList: [
          {
            id: 0,
            name: '标准散点图',
            value: 'scatter',
            imageUrl: '/static/img/gallery/scatter-weight.png',
            src: '',
          },
          {
            id: 1,
            name: '标准折线图',
            value: 'line',
            imageUrl: 'assets/img/gallery/dynamic-data2.png',
            src: '',
          },
        ],
      };
    },
    vuex: {
      getters: {
        graphOption,
        graphType,
      },
      actions: {
        initGraph,
        updateType,
      },
    },
    computed: {
      option: {
        cathe: false,
        get() {
          return this.graphOption;
        },
      },
      chartType: {
        get() {
          return this.graphType;
        },
        set(val) {
          this.updateType(val);
        },
      },
    },
    methods: {
      test(type) {
        this.initGraph(type);
      },
    },
  };
</script>
