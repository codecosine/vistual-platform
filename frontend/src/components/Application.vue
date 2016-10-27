<template>
  <div class="app-header">
    <nav>
      <ul class="nav navbar-nav">
        <li><a><i class="glyphicon glyphicon-th"></i>应用</a></li>
        <li><a><i class="glyphicon glyphicon-question-sign"></i>帮助</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">{{userInfo.username}}</a></li>
      </ul>
    </nav>
  </div>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>
<style>

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
  import { userInfo } from '../vuex/getters';
  export default {
    vuex: {
      getters: {
        userInfo,
      },
    },
  };
</script>
