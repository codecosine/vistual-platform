<template lang="html">
  <div class="container">
    <h3 id="overview" class="page-header">创建图表</h3>
    <div class="row">
      <form role="form col-sm-7">
        <div class="input-group">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">所选图表</button>
          </span>
          <input type="text" class="form-control" placeholder="图表名称">
        </div><!-- /input-group -->
        <div class="form-group">
          <label for="exampleInputEmail1">数据</label>
          <a href="/#/app/setting">前往配置</a>
        </div>
        <div class="form-group" ng-show="this.createChartType==='bar'">
            <label>X轴数据列</label>
            选择数据列
            <button type="submit" class="btn btn-primary">添加数据列</button>
        </div>
        <div class="form-group" ng-show="this.createChartType==='bar'">
            <label>y轴数据列</label>
            选择数据列
            <button type="submit" class="btn btn-primary">添加数据列</button>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">生成图表</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
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
  },
};
</script>
<style lang="css">
</style>
