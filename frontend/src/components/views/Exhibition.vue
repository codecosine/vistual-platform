<template>
  <div class="container">
    <v-echarts :options="option" width="1000px"></v-echarts>
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
    data() {
      return {
        testBar: {
          title: {
            text: 'bar',
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: ['数据系列'],
          },
          xAxis: [
            {
              type: 'category',
              data: ['张三', '李四'],
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [{
            name: '数据系列',
            type: 'bar',
            data: [175, 188],
          }],
        },

      };
    },
    methods: {
      test() {
        this.chartOption = this.graphName1;
      },
    },
    computed: {
      option() {
        return this.$store.getters.option;
      },
    },
  };
</script>
