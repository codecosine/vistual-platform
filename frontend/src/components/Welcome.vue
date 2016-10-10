<template>
  <header class="site-header">
    <div class="container">
      <div class="navbar-header">
        <img src='../assets/img/logo_simple.png' style="float:left;width:40px">
        <a class="navbar-brand" href="#">可视化教学平台</a>
      </div>
      <nav class="navbar-main">
        <ul class="nav navbar-nav">
          <li><a href="#">特性</a></li>
          <li><a href="#">文档</a></li>
          <li><a href="#">帮助</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" v-link="{ path: '/session' }">登录</a></li>
          <li><a href="#" v-link="{ path: '/session' }">注册</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="site-main">
    <div class="banner banner-inverse">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="center-block banner-text">
              <h1>用心,听见更多</h1>
              <h3>不再是满屏幕冰冷的数字</h3>
              <h3>数据的声音,离你只有一个按钮的距离</h3>
              <h3>可视化教学平台,所有人都可以快速上手</h3>
            </div>
          </div>
          <div class="col-sm-6">
            <form role="form" class="center-block auth-modal auth-modal-inner">
              <div class="center-block">
                <p class="text-danger">
                  <span class="glyphicon glyphicon-info-sign"></span>
                  登录失败!用户名或者密码错误,请重试.
                </p>
              </div>
              <div class="form-group">
                <label for="username">用户名/邮箱</label>
                <input type="email" class="form-control" id="username">
              </div>
              <div class="form-group">
                <label for="inputpassword">密码</label>
                <input type="password" class="form-control" id="inputpassword">
              </div>
              <button type="button" @click="signIn" class="btn btn-block btn-danger">登录</button>
              <p class="create-account-callout center-block">
                没有账号?
                <a>注册新用户</a>
              </p>
            </form>
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
          <h3>Excel快速编辑</h3>
          <p>通过数据源导入的数据可以迅速,便捷的进行处理,更直观,所有人都可以快速上手</p>
        </div>
        <div class="col-sm-4">
          <img src="../assets/img/introduce/db.png" alt="Components" class="img-responsive">
          <h3>数据源支持</h3>
          <p>可视化教学平台 提供了多种数据源支持，包括主流的Excel文件,Mysql数据库</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h3 class="front_title text-center">更丰富的图表类型</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3 col-xs-12">
          <div class="step_item">
            <p class="step_img">
              <img src="../assets/img/gallery/pie-nest.png">
            </p>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="step_item">
            <p class="step_img">
              <img src="../assets/img/gallery/scatter-punchCard.png">
            </p>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="step_item">

            <p class="step_img">
              <img src="../assets/img/gallery/mix-timeline-finance.png">
            </p>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="step_item">
            <p class="step_img">
              <img src="../assets/img/gallery/scatter-weight.png">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <p>Code licensed under <a href="https://github.com/angular-ui/bootstrap/blob/master/LICENSE">MIT License</a>.</p>
      <p>广东工业大学数字校园</p>
    </div>
  </footer>

</template>
<style scoped>
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
    margin-bottom: 0;
    margin-left: 5px;
  }
  .navbar-header a{
    line-height: 20px;
    color: #3c4146;
  }
  .navbar-main ul li a{
    line-height: 20px;
    color: #3c4146;
  }
  .banner{
    background-image: url(../assets/img/pexels-photo.jpg);
    background-size: cover;
    height: 550px;
    margin-bottom: 50px;
    padding: 100px 0px;
  }
  .banner-text{
    color: #fff;
  }
  .banner::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    content: "";
    background-color: rgba(0,0,0,0.3);
    -webkit-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
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
  import { login, saveToken } from '../vuex/actions';
  export default {
    vuex: {
      actions: {
        login,
        saveToken,
      },
    },
    methods: {
      signIn() {
        this.login(this.user)
          .then((res) => {
            const token = res.data.token;
            this.saveToken(token);
            this.$route.router.go({ name: 'main' });
          }, (err) => {
            console.log(err);
          });
      },
    },
  };
</script>
