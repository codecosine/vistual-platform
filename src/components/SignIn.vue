<template>
  <div class="container">
    <div class="row">
        <div class="center-block logo"><img src="../assets/img/logo.png" style="width:150px"></div>

      <alert :show.sync="signinError" class="center-block" duration="0" type="danger" width="350px" dismissable>
        <span class="glyphicon glyphicon-info-sign"></span>
        <strong>登录失败</strong>
        <p>用户名或者密码错误,请重试</p>
      </alert>
        <form role="form" class="center-block auth-modal auth-modal-inner">
          <div class="form-group">
            <label for="username">用户名/邮箱</label>
            <input type="email" class="form-control" id="username">
          </div>
          <div class="form-group">
            <label for="inputpassword">密码</label>
            <input type="password" class="form-control" id="inputpassword">
          </div>
          <button type="submit" class="btn btn-block btn-danger">登录</button>
        </form>
        <p class="create-account-callout center-block auth-modal">
          没有账号?
          <a href="/join?source=login" data-ga-click="Sign in, switch to sign up">注册新用户</a>
        </p>
    </div>
  </div>
</template>
<style>
  .auth-modal-inner{
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #d8dee2;
    border-radius: 5px;
  }
  .auth-modal{
    width: 350px;
    padding: 20px;
    margin-top: 10px;
  }
  .logo {
    padding: 100px 0px;
    width:150px;
    height:150px;
  }
  .create-account-callout {
    margin-top: 15px;
    padding: 15px 20px;
    text-align: center;
    border: 1px solid #d8dee2;
    border-radius: 5px;
  }
</style>
<script>
    import { alert } from 'vue-strap';
    export default{
      components: {
        alert,
      },
      data() {
        return {
          signinError: true,
        };
      },
    };
</script>
