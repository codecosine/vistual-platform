<template>
  <div class="app-header">
    <nav>
      <ul class="nav navbar-nav">
        <li><a><i class="glyphicon glyphicon-th"></i>应用</a></li>
        <li><a><i class="glyphicon glyphicon-question-sign"></i>帮助</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">用户名</a></li>
      </ul>
    </nav>
  </div>
  <div class="app-main">
    <div class="container">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" v-for="app in appList">
          <div class="app-item clearfix text-center">
            <div class="app-item-meta clearfix">
              <a @click="gotoApp" class="btn btn-link app-item-name selectable-text app-set ng-binding" title="cosiner">{{app.appName}}</a>
            </div>
            <div class="app-item-stats">
              <div class="figure-wrap">
                <span class="figure bstooltip ng-scope ng-binding" data-title="2" data-container="body" ng-attr-bs-tooltip="{{ app.total_user_count > 1000 ? '' : 'false' }}" bs-tooltip="false">2</span>
                <div class="text-label cursor-help">图表</div>
              </div>
              <div class="figure-wrap">
                <span class="figure bstooltip ng-scope ng-binding" data-title="5" data-container="body" ng-attr-bs-tooltip="{{ app.yesterday_reqs > 1000 ? '' : 'false' }}" bs-tooltip="false">0</span>
                <div class="text-label cursor-help">数据系列</div>
              </div>
              <div class="figure-wrap">
                <span class="figure bstooltip ng-scope ng-binding" data-title="0" data-container="body" ng-attr-bs-tooltip="{{ app.yesterday_reqs > 1000 ? '' : 'false' }}" bs-tooltip="false">0</span>
                <div class="text-label cursor-help">分析</div>
              </div>
            </div>
          </div>
        </div>

    </div>
    <div class="container">
      <div>
        <h2 id="overview" class="page-header">创建一个新的应用</h2>
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img data-src="holder.js/100%x180" alt="100%x180" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjYwLjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img data-src="holder.js/100%x180" alt="100%x180" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjYwLjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img data-src="holder.js/100%x180" alt="100%x180" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjYwLjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;">
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img data-src="holder.js/100%x180" alt="100%x180" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjYwLjUiIHk9IjkwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MTcxeDE4MDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true" style="height: 180px; width: 100%; display: block;">
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
  .app-item {
    position: relative;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: color .2s ease,border .2s ease;
  }
  .app-item .app-item-stats {
    padding: 0 15px 12px;
  }
  .app-item-name {
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
  .app-item .app-item-meta .app-item-settings {
    position: absolute;
    color: #e5e5e5;
    text-decoration: none;
    line-height: 32px;
    top: 15px;
    right: 13px;
    transition: color .2s ease;
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
  .cursor-help {
    cursor: help;
    vertical-align: 1px;
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

</style>
<script>
  import { selectApp } from '../vuex/actions';
  import { appList } from '../vuex/getters';
  export default {
    data() {
      return {
        showArg: false,
      };
    },
    vuex: {
      getters: {
        appList,
      },
      actions: {
        selectApp,
      },
    },
    method: {
      gotoApp() {
        this.$router.router.go({ name: 'user', params: { userId: 123 } });
      },
    },
  };
</script>
