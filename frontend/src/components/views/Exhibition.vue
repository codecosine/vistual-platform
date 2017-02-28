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
    computed: {
      option() {
        return this.$store.getters.option;
      },
    },
  };
</script>
