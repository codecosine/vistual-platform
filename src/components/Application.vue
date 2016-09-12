<template>
  <div class="app-header">
    <nav>
      <ul class="nav navbar-nav">
        <li><a><i class="glyphicon glyphicon-th"></i>应用</a></li>
        <li><a><i class="glyphicon glyphicon-question-sign"></i>帮助</a></li>
        <li><a><i class="glyphicon glyphicon-menu-hamburger"></i></a></li>
        <li><a><i class="glyphicon glyphicon-refresh"></i></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">用户名</a></li>
      </ul>
    </nav>
  </div>
  <div class="app-main">
    <div class="container">
      <div v-for="graph in currentApp.graphList">
        <echarts :options="graphOptions[graph.group]" :group="graph.group"></echarts>
      </div>
    </div>
  </div>
  <aside :show.sync="showArg" placement="left" header="配置图表参数" :width="350">
  </aside>
</template>
<style scoped>
  .app-item {
    position: relative;
    margin-bottom: 30px;
    border: 1px solid #eee;
    border-radius: 4px;
    transition: color .2s ease,border .2s ease;
  }
  .app-item .app-item-stats {
    padding: 0 15px 12px;
  }
  .app-item .app-item-stats .figure-wrap {
    width: 33.33%;
    width: calc(100% / 3);
    float: left;
  }
  .app-item .app-item-meta .app-item-settings {
    position: absolute;
    color: #e5e5e5;
    text-decoration: none;
    line-height: 32px;
    top: 15px;
    right: 13px;
    transition: color .2s ease;
  }
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
