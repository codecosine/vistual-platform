<template>
  <chart :options="graphOption"></chart>
  <button @click="test('polar')">this is a amazing button</button>
</template>

<style>
  .echarts {
    height: 300px;
  }
</style>

<script>
  import { initGraph } from '../vuex/actions';
  import { graphOption } from '../vuex/getters';
  export default {
    vuex: {
      getters: {
        graphOption,
      },
      actions: {
        initGraph,
      },
    },
    methods: {
      test(type) {
        this.initGraph(type);
      },
    },
  };
</script>
