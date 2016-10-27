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
  import { tokenLogin } from './vuex/actions';
  import AuthService from './api/AuthService';
  export default {
    store,
    vuex: {
      actions: {
        tokenLogin,
      },
    },
    created() {
      // 在应用第一次加载的时候，尝试读取本地的cookie 以及 localStorage 进行权限验证获取token
      AuthService.fetchToken()
        .then((res) => {
          console.log('fetchToken');
          console.log(res);
          this.tokenLogin(res);
        }, (err) => {
          console.log(err);
        });
    },
  };
</script>
