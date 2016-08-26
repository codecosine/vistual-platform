<template>
  <div class="container">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default" @click="updateGraph(msg)">updateGraph</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>

</style>

<script>
    import { updateGraph } from '../vuex/actions';
    export default{
      data() {
        return {
          msg: {
            title: {
              text: '折线图堆叠',
            },
            tooltip: {
              trigger: 'axis',
            },
            legend: {
              data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true,
            },
            toolbox: {
              feature: {
                saveAsImage: {},
              },
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210],
              },
            ],
          },
        };
      },
      vuex: {
        actions: {
          updateGraph,
        },
      },
    };
</script>
