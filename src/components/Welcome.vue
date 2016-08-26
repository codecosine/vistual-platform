<template>
    <div class="banner masthead">
      <div class="banner_con">
        <div class="banner_txt">
          <h1>可视化教学平台</h1>
          <h2>您身边的数据专家，让数据会说话</h2>
          <p class="masthead-button-links">
            <a class="btn btn-lg btn-primary btn-shadow" target="_blank" role="button" v-link="{ path:'/app' }">马上使用</a>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bs-docs-featurette">
        <h2 class="bs-docs-featurette-title">为更大数据,更多应用场景而生。</h2>
        <p class="lead">让数据可视化更快速、简单。所有人都能快速上手。</p>
      </div>
      <hr class="half-rule">
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
              <img src="../assets/img/gallery/scatter-painter-choice.png">
            </p>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="step_item">
            <p class="step_img">
              <img src="../assets/img/gallery/scatter-large.png">
            </p>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="step_item">

            <p class="step_img">
              <img src="../assets/img/gallery/heatmap-cartesian.png">
            </p>
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div class="step_item">

            <p class="step_img">
              <img src="../assets/img/gallery/treemap-disk.png">
            </p>
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
  .footer{
    padding-top: 40px;
    padding-bottom: 40px;
    margin-top: 130px;
    color: #767676;
    text-align: center;
  }
  .banner_work{
    background-image: url(../assets/img/bs-masthead5.png);
    background-size: cover;
    text-align: center;
    height: 400px;

  }
  .banner_work_txt{
    color:#000000;
    vertical-align:middle;
    display: table-cell;
  }
  .banner_work_txt .masthead-button-links{
    margin-top:60px;
  }
  .banner{
    margin-top: -78px;
    background-image: url(../assets/img/bs-masthead.png);
    background-size: cover;
    text-align: center;
    height: 600px;

  }
  .banner_con {
    display: table;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .banner_txt{
    color:#ffffff;
    vertical-align:middle;
    display: table-cell;
  }
  .banner_txt h1{
    font-size:70px;
  }
  .banner_txt h2{
    font-weight: 200;
    line-height: 1.25;
    font-size:35px;
  }
  .banner_txt .masthead-button-links{
    margin-top:30px;
  }
  .bs-docs-featurette{
    text-align: center;
    line-height: 1.5;
    color: #555;
  }
  .bs-docs-featurette .lead{
    max-width: 80%;
    margin-right: auto;
    margin-left: auto;
  }

  .half-rule{
    width: 100px;
    margin: 40px auto;
  }


  .logo{
    display: block;
    width: 274px;
    height: 100px;
    background: url(../assets/img/logo.png) no-repeat;
    margin: 0 auto 10px;
  }
  .login{
    padding:0 27px;
  }
  .login .btn{
    width: 100%;
  }

  .step_img img{
    height: 100%;
    width: 100%;
  }

  .chartBox{
    height: 400px;
  }
  .list_margin{
    margin-bottom: 10px;
  }
</style>
<script>
  export default {

  };
</script>
