<template>
  <div class="app-header">
    <nav>
      <ul class="nav navbar-nav">
        <li><a><i class="glyphicon glyphicon-th"></i>应用</a></li>
        <li><a><i class="glyphicon glyphicon-menu-hamburger"></i></a></li>
        <li><a @click="showArg = true"><i class="glyphicon glyphicon glyphicon-pencil"></i></a></li>
        <li><a><i class="glyphicon glyphicon-cog"></i></a></li>
        <li><a><i class="glyphicon glyphicon-refresh"></i></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">用户名</a></li>
      </ul>
    </nav>
  </div>
  <div class="app-main">
    <div class="container">
      <div class="container cardList">
        <div v-for="card in appList">
          <rd-card :title='card.appName' class="col-sm-4">
            <p>{{card.graphId}}</p>
          </rd-card>
        </div>
      </div>
      <div v-for="graph in currentApp.graphList">
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
  import { aside, input } from 'vue-strap';
  import { initGraph, updateType } from '../vuex/actions';
  import { graphOptions, appList, currentApp } from '../vuex/getters';
  export default {
    components: {
      aside,
      echarts,
      BsInput: input,
    },
    data() {
      return {
        showArg: false,
      };
    },
    vuex: {
      getters: {
        graphOptions,
        appList,
        currentApp,
      },
      actions: {
        initGraph,
        updateType,
      },
    },
  };
</script>
