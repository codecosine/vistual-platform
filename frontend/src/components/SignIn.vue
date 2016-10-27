<template>
  <div class="container">
    <div class="row">
      <div class="center-block logo"><img src="../assets/img/logo.png" style="width:150px"></div>
      <validator name="validationSignIn" v-if="formState">
        <alert :show.sync="signInError" class="center-block" duration="0" type="danger" width="350px" dismissable>
          <span class="glyphicon glyphicon-info-sign"></span>
          <strong>{{ errmsg }}</strong>
        </alert>
        <form role="form" class="center-block auth-modal auth-modal-inner">
            <div class="form-group">
              <label for="username">用户名/邮箱</label>
              <input id="username" type="text" v-model="user.username" v-validate:username="['required']" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input id="password" type="password" v-model="user.password" v-validate:password="['required']" class="form-control" >
            </div>
            <button type="submit" @click="signIn" class="btn btn-block btn-danger" v-bind:disabled="!$validationSignIn.valid">登录</button>
        </form>
      </validator>
      <validator name="validationSignUp" v-if="!formState">
        <alert :show.sync="signUpError" class="center-block" duration="0" type="danger" width="350px" dismissable>
          <span class="glyphicon glyphicon-info-sign"></span>
          <strong>{{ errmsg }}</strong>
        </alert>
        <form role="form" class="center-block auth-modal auth-modal-inner">
          <div class="form-group">
            <label for="Rusername">注册用户名/邮箱</label>
            <input id="Rusername" type="text" v-model="registerUser.username" v-validate:Rusername="['required']" class="form-control">
          </div>
          <div class="form-group">
          <label for="Rpassword">密码</label>
          <input type="password" class="form-control" v-model="registerUser.password" id="Rpassword" v-validate:password="['required']" >
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
    import { login, register, saveToken } from '../vuex/actions';

    export default{
      components: {
        alert,
      },
      data() {
        return {
          user: {
            username: '',
            password: '',
          },
          registerUser: {
            username: '',
            password: '',
          },
          signInError: false,
          signUpError: false,
          errormsg: '未知错误，请刷新',
          formState: true,
        };
      },
      vuex: {
        actions: {
          login,
          register,
          saveToken,
        },
      },
      methods: {
        signIn() {
          this.login(this.user)
            .then((res) => {
              const token = res.token;// res.data.token
              this.saveToken(token);
              this.$route.router.go({ name: 'main' });
            }, (err) => {
              if (err.status === 401) {
                this.signInError = true;
                this.errmsg = '用户名或密码错误，请重试！';
              }
            });
        },
        signUp() {
          this.register(this.registerUser)
            .then((res) => {
              const token = res.data.token;
              this.saveToken(token);
            }, (err) => {
              if (err.status === 401) {
                this.signInError = true;
                this.errmsg = '该用户名已经存在！';
              }
            });
        },
        switch() {
          this.formState = !this.formState;
        },
      },
    };
</script>
