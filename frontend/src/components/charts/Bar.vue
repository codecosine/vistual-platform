<template lang="html">
  <div class="container">
      <form role="form">
      <div class="row">
        <h3 id="overview" class="page-header">柱状图创建配置 <small><a href="/#/app/gallery"class="text-help">创建其他类型图表</a></small></h3>
        <div class="col-sm-5">
          <h4 id="overview" class="setting-title">基本配置</h4>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="图表标题名称" v-model="title">
          </div><!-- /input-group -->
          <h4 id="overview" class="setting-title">x轴标识序列</h4>
          <div class="form-group">
            <ul class="select-list clearfix">
              <li v-for="item in dataSeries">
                <a class="select-item" @click="xAxisNamesSelect(item)"
                  v-bind:class="{ 'selected': item === xAxisNames }" >
                  {{item}}
                </a>
              </li>
            </ul>
          </div>
          <h4 id="overview" class="setting-title">y轴主要数据序列    <small class="text-muted">多选则建立多个数据分类集</small></h4>
          <div class="form-group">
            <ul class="select-list clearfix">
              <li v-for="item in dataSeries">
                <a class="select-item" @click="seriesNamesSelect(item)"
                   v-bind:class="{ 'selected': seriesNames.indexOf(item)!== -1 }" >
                  {{item}}
                </a>
              </li>
            </ul>
          </div>
          <h4 id="overview" class="setting-title">高级配置
            <span class="glyphicon glyphicon-plus advancedBtn" v-show="!advanced" @click="advancedChange"></span>
            <span class="glyphicon glyphicon-minus advancedBtn" v-show="advanced" @click="advancedChange"></span>
          </h4>
          <div v-show="advanced">
            暂无
          </div>
        </div>
        <div class="col-sm-7">
          <img src="./settings/bar-setting.png" style="width:100%"></img>
          <div class="col-sm-10 btn-action">
              <a type="button" href="#/app/exhibition" class="btn btn-primary btn-block" @click="confirm">前往展示台</a>
          </div>
        </div>
        </div>
      </form>
  </div>
</template>
<script>
export default {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  data() {
    return {
      advanced: false,
      getOption(setting, raw, machiningRaw) {
        const bar = {
          title: {
            text: 'bar',
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: [],
          },
          xAxis: [
            {
              type: 'category',
              data: [''],
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [],
        };
        bar.title.text = setting.title;
        bar.legend.data = setting.seriesNames;
        bar.xAxis.data = machiningRaw(raw, setting.xAxisNames)
                          .map(ele => ele[0]);
        const data = machiningRaw(raw, setting.seriesNames);
        bar.series = setting.seriesNames.map((name, nameIndex) => {
          const obj = {};
          obj.type = 'bar';
          obj.name = name;
          obj.data = data.map(ele => ele[nameIndex]);
          return obj;
        });
        return bar;
      },
      title: '',
      xAxisNames: '',
      seriesNames: [],
    };
  },
  computed: {
    dataSeries() {
      if (this.$store.getters.dataSeries[0] === '当前没有导入数据') {
        this.$store.dispatch('updateInfoMsg', '当前没有可用的数据,请点击上方的数据配置');
      }
      return this.$store.getters.dataSeries;
    },
  },
  methods: {
    advancedChange() {
      this.advanced = !this.advanced;
    },
    // 单选
    xAxisNamesSelect(item) {
      this.xAxisNames = item;
    },
    filterSelect(item) {
      this.filterGroup = item;
    },
    // 多选
    seriesNamesSelect(item) {
      if (this.seriesNames.indexOf(item) !== -1) {
        this.seriesNames.splice(this.seriesNames.indexOf(item), 1);
      } else {
        this.seriesNames.push(item);
      }
    },
    confirm() {
      const comfirmArg = {
        setting: {
          title: this.title,
          xAxisNames: [this.xAxisNames],
          seriesNames: this.seriesNames,
        },
        getOption: this.getOption,
      };
      this.$store.dispatch('comfirmCreate', comfirmArg);
    },
  },
};
</script>
<style lang="css">
  .setting-title {
    padding-bottom: 9px;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .advancedBtn {
    cursor: pointer;
    font-size: 85%;
  }
  .btn-action {
    margin-top: 20px;
    margin-left: 45px;
  }
  .sort-input-group {
    height: 30px;
  }
  .sort-input-group input {
    margin-right: 10px;
    height: 30px;
  }
  .select-list{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  .select-list li{
    float: left;
    position: relative;
    margin: 0 4px 4px 0;
    line-height: 28px;
    vertical-align: middle;
    padding: 2px;
    cursor: pointer;
  }
  .select-list li a:hover{
    border: 1px solid #bd2013;
  }
  .select-list li a {
    float: left;
    background-color: #fff;
    color: #4c4848;
    white-space: nowrap;
    width: auto!important;
    min-width: 10px;
    padding: 0 9px;
    text-align: center;
    border: 1px solid #b8b7bd;
    text-decoration: none;
  }
  .select-list li .selected{
    border: 1px solid #bd2013;
  }
</style>
