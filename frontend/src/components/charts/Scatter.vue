<template lang="html">
  <div class="container">
      <form role="form">
      <div class="row">
        <h3 id="overview" class="page-header">散点图创建配置 <small><a href="/#/app/gallery"class="text-help">创建其他类型图表</a></small></h3>
        <div class="col-sm-5">
          <h4 id="overview" class="setting-title">基本配置</h4>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="图表标题名称" v-model="title">
          </div><!-- /input-group -->
          <h4 id="overview" class="setting-title">x-y主要数据序列 <small class="text-muted">请按x-y顺序选择两个数据列</small></h4>
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
            <div class="form-group">
              <label>数据分类集配置</label>
              <p class="text-muted">选择数据分类属性列(如：性别，城市，颜色)，然后设置其分类值(男，女，广州，深圳)</p>
              <ul class="select-list clearfix">
                <li v-for="item in dataSeries">
                  <a class="select-item" @click="seriesNamesSelect(item)"
                     v-bind:class="{ 'selected': sortNames.indexOf(item)!== -1 }" >
                    {{item}}
                  </a>
                </li>
              </ul>
            </div>
            <div class="form-group sort-input-group">
              <input type="text" class="col-sm-3" placeholder="分类值1" v-model="sortNamesValues[0]">
              <input type="text" class="col-sm-3" placeholder="分类值2(可不填)" v-model="sortNamesValues[1]">
              <input type="text" class="col-sm-3" placeholder="分类值3(可不填)" v-model="sortNamesValues[2]">
            </div>
          </div>

        </div>
        <div class="col-sm-7">
          <img src="./settings/scatter-setting.png" style="width:100%"></img>
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
        const scatter = {
          title: {
            text: '散点图',
          },
          legend: {
            data: [],
            left: 'center',
          },
          xAxis: [
            {
              type: 'value',
              scale: true,
              splitLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              splitLine: {
                show: false,
              },
            },
          ],
          series: [],
        };
        scatter.title.text = setting.title;
        if (setting.filterGroup) {
          scatter.legend.data = setting.sortNamesValues;
          scatter.series = setting.filterGroup.map((filter) => {
            const obj = {};
            obj.type = 'scatter';
            obj.name = filter.name;
            obj.data = machiningRaw(raw, setting.seriesNames,
              (item => (item[filter.key] === filter.name)));
            console.log(obj);
            return obj;
          });
        } else {
          scatter.legend.data = ['数据分类'];
          const obj = {};
          obj.type = 'scatter';
          obj.name = '数据分类';
          obj.data = machiningRaw(raw, setting.seriesNames);
          console.log(obj);
          scatter.series.push(obj);
        }
        return scatter;
      },
      title: '',
      sortNames: [],
      sortNamesValues: [],
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
    sortNamesSelect(item) {
      if (this.sortNames.indexOf(item) !== -1) {
        this.sortNames.splice(this.sortNames.indexOf(item), 1);
      } else {
        this.sortNames = [];
        this.sortNames.push(item);
      }
    },
    confirm() {
      let filterGroup = null;
      if (this.sortNames.length !== 0) {
        filterGroup = this.sortNamesValues.map((ele) => {
          const obj = {};
          obj.name = ele;
          obj.key = this.sortNames[0];
          return obj;
        });
      }
      const comfirmArg = {
        setting: {
          title: this.title,
          filterGroup,
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
