<template>
  <div class="container">
    <div class="row">
      <div class="center-block logo"><img src="../assets/img/logo.png" style="width:150px"></div>
        <form role="form" class="center-block auth-modal auth-modal-inner" v-if="method==='signIn'">
            <div class="form-group">
              <label for="username">用户名/邮箱</label>
              <input id="username" type="text" v-model="user.username" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input id="password" type="password" v-model="user.password" class="form-control" >
            </div>
            <button type="submit" @click="signIn" class="btn btn-block btn-danger">登录</button>
        </form>
        <form role="form" class="center-block auth-modal auth-modal-inner" v-else>
          <div class="form-group">
            <label for="Rusername">注册用户名/邮箱</label>
            <input id="Rusername" type="text" v-model="registerUser.username"  class="form-control">
          </div>
          <div class="form-group">
          <label for="Rpassword">密码</label>
          <input type="password" class="form-control" v-model="registerUser.password" id="Rpassword">
           </div>
          <button type="submit" @click="signUp" class="btn btn-block btn-danger">注册</button>
        </form>
        <p class="create-account-callout center-block auth-modal" v-if="method==='signIn'">
            没有账号?<a class="hand" href="/#/session/signUp" data-ga-click="Sign in, switch to sign up">注册新用户</a>
         </p>
        <p class="create-account-callout center-block auth-modal" v-else>
            已有账号?<a class="hand" href="/#/session/signIn" data-ga-click="Sign in, switch to sign up">现在登录</a>
         </p>
    </div>
  </div>
</template>
<style>
  .hand{
    cursor:pointer;
  }
  .action-group{
    margin-top: 30px;
  }
  .action-group button{
    height: 40px;
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
    export default{
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
        };
      },
      computed: {
        method() {
          return this.$route.params.method;
        },
      },
      methods: {
        /* eslint no-undef: "error" */
        /* eslint-env browser */
        signIn() {
          this.$store.dispatch('signInRequest', this.user)
            .then((res) => {
              if (res.data.success) {
                this.$store.dispatch('signInSuccess', res.data.data);
                // localStorage 中保存一份
                window.localStorage.setItem('TOKEN_KEY', JSON.stringify(res.data.data.token));
                this.$router.push({ name: 'main' });
              }  // 传递 res.message
            }, (err) => {
              this.$store.dispatch('signInError', err);
            });
        },
        signUp() {
          this.$store.dispatch('signUpRequest', this.registerUser)
          .then((res) => {
            if (res.success) {
              this.$store.dispatch('signInSuccess', res.data);
              // this.$route.router.go({ name: 'main' });
            }
            // 传递 res.message
          }, (err) => {
            this.$store.dispatch('signInError', err);
          });
        },
        switchState() {
          this.formState = !this.formState;
        },
      },
    };
</script>
