<template>
  <div class="container">
    <v-echarts :options="test.bar" width="1000px"></v-echarts>
  </div>
</template>
<style scoped>
  .echarts{
    width: 1000px;
  }
</style>
<script>
  import VEcharts from 'vue-echarts';

  export default {
    components: {
      VEcharts,
    },
    created() {
      this.loadingChart();
    },
    data() {
      return {
        chartOption: null,
      };
    },
    methods: {
      loadingChart() {
        // 尝试请求获取数据,成功就加载
      },
    },
    computed: {
      option() {
        return this.$store.getters.option;
      },
      test() {
        return this.$store.getters.examples;
      },
    },
  };
</script>
