<template>
    <router-view></router-view>
</template>

<style>
  body {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Microsoft Yahei","WenQuanYi Micro Hei",Arial,Verdana,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
  }
</style>
<script>
  import store from './vuex/store';
  export default {
    store,
  };
</script>

