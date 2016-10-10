<template>
  <div class="container">
    <div class="row">
      <div class="center-block logo"><img src="../assets/img/logo.png" style="width:150px"></div>
      <validator name="validationSignIn" v-if="formState">
        <alert :show.sync="signInError" class="center-block" duration="0" type="danger" width="350px" dismissable>
          <span class="glyphicon glyphicon-info-sign"></span>
          <strong v-if="$validationSignIn.username.required">请输入用户名</strong>
          <strong v-if="$validationSignIn.username.required">用户名或者密码错误，请重试</strong>
        </alert>
        <form role="form" class="center-block auth-modal auth-modal-inner">
            <div class="form-group">
              <label for="username">用户名/邮箱</label>
              <input id="username" type="text" v-validate:username="['required']" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" id="password" v-validate:password="['required']" >
            </div>
            <button type="submit" @click="signIn" class="btn btn-block btn-danger" v-bind:disabled="!$validationSignIn.valid">登录</button>
        </form>
      </validator>
      <validator name="validationSignUp" v-if="!formState">
        <alert :show.sync="signUpError" class="center-block" duration="0" type="danger" width="350px" dismissable>
          <span class="glyphicon glyphicon-info-sign"></span>
        </alert>
        <form role="form" class="center-block auth-modal auth-modal-inner">
          <div class="form-group">
            <label for="Rusername">注册用户名/邮箱</label>
            <input id="Rusername" type="text" v-validate:Rusername="['required']" class="form-control">
          </div>
          <div class="form-group">
          <label for="Rpassword">密码</label>
          <input type="password" class="form-control" id="Rpassword" v-validate:password="['required']" >
           </div>
          <button type="submit" @click="signUp" class="btn btn-block btn-danger" v-bind:disabled="!$validationSignUp.valid">注册</button>
        </form>
      </validator>
      <p class="create-account-callout center-block auth-modal">
          没有账号?<a class="hand" @click="switch" data-ga-click="Sign in, switch to sign up">注册新用户</a>
       </p>
    </div>
  </div>
</template>
<style>
  .hand{
    cursor:pointer;
  }
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
    import { auth } from '../vuex/actions';

    export default{
      components: {
        alert,
      },
      data() {
        return {
          signInError: false,
          signUpError: false,
          formState: true,
        };
      },
      vuex: {
        actions: {
          auth,
        },
      },
      methods: {
        signIn() {
          this.$http.post('api/login', {});
          this.$router.go({ name: 'application' });
        },
        signUp() {
          this.$http.post('api/register', {});
        },
        switch() {
          this.formState = !this.formState;
        },
      },
    };
</script>
