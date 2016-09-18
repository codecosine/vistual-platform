<template>
    <form class="form-horizontal">
      <div class="form-group">
        <div class="form-group">
          <label for="Bar" class="col-sm-3 control-label">Bar</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="bar.name" id="Bar">
          </div>
        </div>
        <div class="form-group">
          <label for="Bar2" class="col-sm-3 control-label">Bar2</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="bar.texta" id="Bar2">
          </div>
        </div>

        <div class="col-sm-offset-3 col-sm-9">
          <button type="button" class="btn btn-success" @click="update">updateGraph</button>
        </div>
      </div>
    </form>
</template>

<style>

</style>
<script>
    import { updateGraph } from '../vuex/actions';
    export default{
      data() {
        return {
          chartArg: {
            bar: {},
            pie: {},
          },
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
      method: {
        update() {
        },
      },
    };
</script>
