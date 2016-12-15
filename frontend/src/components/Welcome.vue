<template>
  <div>
    <header class="site-header">
      <div class="container">
        <div class="navbar-header">
          <a href="#"><img src='../assets/img/logo_simple.png' style="float:left;width:32px"></a>
        </div>
        <nav class="navbar-main">
          <a class="nav-item" href="#">可视化教学平台</a>
        </nav>
        <div class="nav-action">
          <button class="btn btn-danger nav-btn" @click="changetoLogin('signIn')">登录</button>
          <button class="btn btn-default nav-btn" @click="changetoLogin('signUp')">注册</button>
        </div>
      </div>
    </header>
    <div class="site-main">
      <div class="banner banner-inverse">
        <div class="container">
          <div class="row">
            <div class="col-sm-7">
              <div class="center-block banner-text">
                <h1>用你的数据</h1>
                <h1>去看见更多,发现更多</h1>
                <h3>将冰冷的数字化作图形</h3>
                <h3>去细心倾听,数据的声音</h3>
                <h3>可视化教学平台,离你只有一个按钮的距离</h3>
              </div>
            </div>
            <div class="col-sm-5">
              <form role="form" class="center-block auth-modal auth-modal-inner">
                <div class="form-group">
                  <label for="Rusername">用户名/邮箱</label>
                  <input id="Rusername" type="text" placeholder="输入你的用户名/邮箱" v-model="registerUser.username" class="form-control">
                </div>
                <div class="form-group">
                  <label for="Rpassword">密码</label>
                  <input type="password" class="form-control" placeholder="创建你的密码" v-model="registerUser.password" id="Rpassword">
                 </div>
                 <div class="form-group action-group">
                   <button type="submit" @click="signUp" class="btn btn-block btn-danger">注册并登录</button>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img src="../assets/img/introduce/echart3.png" alt="Echart3" class="img-responsive">
          <h3>Echart3</h3>
          <p>最新版本Echart3支持,更丰富的可视化效果
            新增更多图表类型，更好的满足不同数据的处理需求 更多的搭配方案让你的数据呈现方式更个性和完美。 </p>
          <p>ECharts 3 中更是加入了更多丰富的交互功能以及更多的样式，更多体验等你来尝试</p>
        </div>
        <div class="col-sm-4">
          <img src="../assets/img/introduce/handsontable.png" alt="handsontable" class="img-responsive">
          <h3>Excel快速导入</h3>
          <p>通过EXCEL文件导入的数据可以迅速,便捷的进行处理,更直观。</p>
        </div>
        <div class="col-sm-4">
          <img src="../assets/img/introduce/db.png" alt="Components" class="img-responsive">
          <h3>数据源支持</h3>
          <p>可视化教学平台 提供了多种数据源支持，包括主流的Excel文件,Mysql数据库</p>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <p><a href="https://github.com/codecosine/vistual-platform">github</a></p>
        <p>2015年“数字校园”学生科技项目</p>
        <p>网络信息与现代教育技术中心</p>
        <p>广东工业大学</p>
      </div>
    </footer>
  </div>
</template>
<style>
  .site-header{
    position: relative;
    z-index: 3;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: -1px;
    background-color: #fff;
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0,0,0,0.075);
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  .navbar-main {
    float: left;
    margin-bottom: 0;
    margin-left: 5px;
  }
  .nav-item {
    position: relative;
    float: left;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 16px;
    border-top: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    line-height: 20px;
    color: #3c4146;
  }
  .nav-item:hover {
    color: #000;
    text-decoration: none;
  }
  .nav-actcion{
    position: relative;
  }
  .nav-btn{
    float: right;
    margin-right: 8px;
  }
  .banner{
    background-image: url(../assets/img/pexels-photo.jpg);
    background-size: cover;
    height: 544px;
    margin-bottom: 50px;
    padding: 100px 0px;
  }
  .banner-text{
    color: #fff;
  }
  .banner::before {
    position: absolute;
    height: 620px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-color: rgba(0,0,0,0.3);
  }
  .footer{
    padding-top: 40px;
    padding-bottom: 40px;
    margin-top: 130px;
    color: #767676;
    text-align: center;
  }
</style>
<script>
  export default {
    data() {
      return {
        registerUser: {
          username: '',
          password: '',
        },
      };
    },
    created() {
      this.authToken();// 组件创建完后检查本地localStorage
    },
    methods: {
      /* eslint no-undef: "error" */
      /* eslint-env browser */
      changetoLogin(method) {
        this.$router.push({ name: 'session', params: { method } });
      },
      signUp() {
        this.$store.dispatch('signUpRequest', this.registerUser)
        .then((res) => {
          if (res.success) {
            const auth = {
              username: res.data.username,
              token: res.data.token,
            };
            this.$store.dispatch('signInSuccess', auth);
            window.localStorage.setItem('TOKEN_KEY', res.data.token);
            this.$router.push({ name: 'main' });
          }
        }, (err) => {
          this.$store.dispatch('signInError', err);
        });
      },
      authToken() {
        const TokenlocalStorage = window.localStorage.getItem('TOKEN_KEY');
        if (TokenlocalStorage) {
          this.$http.post('/token', { token: TokenlocalStorage })
            .then((res) => {
              if (res.data.success) {
                const auth = {
                  username: res.data.username,
                  token: TokenlocalStorage,
                };
                this.$http.headers.common['x-access-token'] = TokenlocalStorage;
                this.$store.dispatch('signInSuccess', auth);
                this.$router.push({ name: 'main' });
              } else {
                // 分发res.message
              }
            }, (err) => {
              this.error = err.toString();
            });
        }
      },
    },
  };
</script>
