<template>
  <div class="app-main">
    <div class="container">
      <v-select>
        <v-option value="apple">Apple</v-option>
        <v-option value="banana">Banana</v-option>
        <v-option value="cherry">Cherry</v-option>
        <v-option value="orange">Orange</v-option>
        <v-option value="grape">Grape</v-option>
      </v-select>
      <form action="./#select" method="get">
        <v-select :value.sync="select.value" :options="select.test" multiple name="animals[]" limit="3" search justified required disabled clear-button close-on-select></v-select>
        <button type="submit" class="btn btn-default">Submit form</button>
      </form>
      <div v-for="graph in currentApp.graphList">
        <div>group:{{graph.group}}</div>
        <v-echarts :options="graphOptions[graph.graphName]" :group="graph.group" class="col-md-12"></v-echarts>
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
  import { select, option, aside, input } from 'vue-strap';
  import { initGraph, updateType } from '../vuex/actions';
  import { graphOptions, appList, currentApp, userInfo } from '../vuex/getters';
  export default {
    components: {
      aside,
      VEcharts: echarts,
      VSelect: select,
      VOption: option,
      BsInput: input,
    },
    data() {
      return {
        showArg: false,
        value: '',
        test: [
          { value: 1, label: 'Cat' },
          { value: 2, label: 'Cow' },
          { value: 3, label: 'Dog' },
          { value: 4, label: 'Elephant' },
          { value: 5, label: 'Fish' },
          { value: 6, label: 'Lion' },
          { value: 7, label: 'Tiger' },
          { value: 8, label: 'Turtle' },
        ],
      };
    },
    vuex: {
      getters: {
        graphOptions,
        appList,
        currentApp,
        userInfo,
      },
      actions: {
        initGraph,
        updateType,
      },
    },
  };
</script>
