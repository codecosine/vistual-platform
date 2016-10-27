<template>
    <div class="container">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" v-for="app in appList">
          <div class="app-item cf text-center">
            <div class="app-item-meta cf">
              <a @click="gotoApp(app.appId)" class="btn app-item-name">{{app.appName}}</a>
            </div>
            <div class="app-item-stats cf">
              <div class="figure-wrap">
                <span class="figure bstooltip" data-title="2" data-container="body">2</span>
                <div class="text-label">图表</div>
              </div>
              <div class="figure-wrap">
                <span class="figure bstooltip" data-title="5" data-container="body">0</span>
                <div class="text-label">数据系列</div>
              </div>
              <div class="figure-wrap">
                <span class="figure bstooltip" data-title="0" data-container="body">0</span>
                <div class="text-label">分析</div>
              </div>
            </div>
          </div>
        </div>

    </div>
    <div class="container">
      <div>
        <h2 id="overview" class="page-header">创建一个新的应用</h2>
        <div class="row">
          <div v-show="!showCreate" class="col-xs-6 col-md-3" v-for="item in gallery">
            <a @click="gotoCreate(item.name)" class="thumbnail galleryList">
              <img alt="item.name" v-bind:src="item.src" data-holder-rendered="true" >
            </a>
            <span class="text-center">{{item.name}}</span>
          </div>
          <div v-show="showCreate">
            <div class="col-lg-6">
              <div class="input-group">
                <span class="input-group-btn">
                  <button @click="showCreate=false" class="btn btn-default" type="button">所选图表:{{createApp.graphName}}</button>
                </span>
                <input type="text" class="form-control" placeholder="新建应用名称" v-model="createApp.name">
                <span class="input-group-btn">
                  <button @click="gotoNewApp" class="btn btn-default" type="button">下一步</button>
                </span>
              </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>

  .cf:before,
  .cf:after {
    content: " "; /* 1 */
    display: table; /* 2 */
  }

  .cf:after {
    clear: both;
  }
  .app-item {
    position: relative;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: color .2s ease,border .2s ease;
  }
  .app-item:hover, .app-item:focus {
    border-color: #3090e4;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.06);
  }
  .app-item .app-item-stats {
    padding: 0 15px 12px;
  }
  .app-item-name {
    color: #3090e4;
    font-size: 18px;
    margin: 0;
    padding: 0;
    line-height: 32px;
    font-weight: 700;
    max-width: 80%;
    max-width: calc(100% - 100px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 0;
  }
  .app-item .app-item-stats .figure-wrap {
    width: 33.33%;
    width: calc(100% / 3);
    float: left;
  }
  .app-item .app-item-meta{
    padding: 10px 0px;
  }
  .app-item .app-item-stats .figure {
    font-family: radikal,"Helvetica Neue",Helvetica,"PingFang SC","Microsoft Yahei","WenQuanYi Micro Hei",Arial,Verdana,sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 1.1;
    color: #555;
    transition: color .2s ease;
  }
  .app-item .app-item-stats .text-label {
    color: #999;
    font-size: 12px;
    font-weight: 300;
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
  .galleryList{
    height: 180px;
    width: 100%;
    display: block;
  }

</style>
<script>
  import { selectApp } from '../vuex/actions';
  import { appList, userInfo } from '../vuex/getters';
  export default {
    data() {
      return {
        showArg: false,
        showCreate: false,
        createApp: {
          name: '',
          graphName: '',
        },
        gallery: [
          {
            name: 'bar-mark',
            src: require('../assets/img/gallery/bar-mark.png'), // eslint-disable-line
          },
          {
            name: 'bar-stack',
            src: require('../assets/img/gallery/bar-stack.png'), // eslint-disable-line
          },
          {
            name: 'mix-line-bar',
            src: require('../assets/img/gallery/mix-line-bar.png'), // eslint-disable-line
          },
          {
            name: 'pie-doughnut',
            src: require('../assets/img/gallery/pie-doughnut.png'), // eslint-disable-line
          },
        ],
      };
    },
    vuex: {
      getters: {
        appList,
        userInfo,
      },
      actions: {
        selectApp,
      },
    },
    methods: {
      gotoCreate(graphName) {
        this.showCreate = true;
        this.createApp.graphName = graphName;
      },
      gotoNewApp() {
        this.$router.go({ name: 'editor', params: { appId: 123 } });
      },
      gotoApp(id) {
        this.$router.go({ name: 'exhibition', params: { appId: id } });
      },
    },
  };
</script>
