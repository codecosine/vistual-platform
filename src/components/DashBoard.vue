<template>
  <div class="app-header">
    <nav>
      <ul class="nav navbar-nav">
        <li><a href="#">应用</a></li>
        <li><a @click="showLeft = true"><i class="glyphicon glyphicon-menu-hamburger"></i></a></li>
        <li><a @click="showChartsList = true"><i class="glyphicon glyphicon-th"></i></a></li>
        <li><a @click="showArg = true"><i class="glyphicon glyphicon glyphicon-pencil"></i></a></li>
        <li><a @click="changeOrigin"><i class="glyphicon glyphicon-wrench"></i></a></li>
        <li><a @click='changeGraph'><i class="glyphicon glyphicon-cog"></i></a></li>
        <li><a @click="test('polar')"><i class="glyphicon glyphicon-refresh"></i></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">用户名</a></li>
      </ul>
    </nav>
  </div>
  <div class="app-main">
    <div class="container">
      <div class="container cardList">
        <div v-for="card in cardList">
          <rd-card :title='card.name' class="col-sm-4">
            <p>{{card.content}}</p>
          </rd-card>
        </div>
      </div>
      <div v-for="graph in graphList">
        <echarts :options="graphOptions[graph.group]" :group="graph.group"></echarts>
      </div>
    </div>
  </div>


  <aside :show.sync="showArg" placement="left" header="配置图表参数" :width="350">
  </aside>
</template>
<style scoped>
  .app-header {
    height: 5rem;
    display: flex;
    flex-direction: column;
    z-index: 3;
    margin-bottom: -1px;
    background-color: #fff;
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0,0,0,0.075);
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  .app-main {
    margin-top: 40px;
  }

</style>
<script>
  import echarts from './ECharts.vue';
  import { rdCard } from 'radon-ui';
  import { aside, input } from 'vue-strap';
  import { initGraph, updateType } from '../vuex/actions';
  import { graphOptions } from '../vuex/getters';
  export default {
    components: {
      rdCard,
      aside,
      echarts,
      BsInput: input,
    },
    data() {
      return {
        showChartsList: false,
        showLeft: false,
        showOrigin: 0,
        showTop: false,
        showArg: false,
        selectedChart: 0,
        cardList: [
          {
            name: 'chart1',
            content: 'content1',
          },
          {
            name: 'chart2',
            content: 'content2',
          },
          {
            name: 'chart3',
            content: 'content3',
          },
        ],
        graphList: [
          {
            group: 'group2',
            name: 'testName1',
          }, {
            group: 'group2',
            name: 'testName2',
          },
        ],
      };
    },
    vuex: {
      getters: {
        graphOptions,
      },
      actions: {
        initGraph,
        updateType,
      },
    },
    computed: {
    },
  };
</script>
