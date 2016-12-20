<template>
  <div>
    <header class="site-header">
      <div class="container">
        <div class="navbar-header">
          <a href="#"><img src='../assets/img/logo_simple.png' style="float:left;width:32px"></a>
        </div>
        <nav class="navbar-main">
          <a class="nav-item" href="#">可视化教学平台</a>
          <a class="nav-item" href="#/app/gallery">应用</a>
          <a class="nav-item" href="#/app/exhibition">展示台</a>
          <a class="nav-item" href="#/app/setting">数据导入</a>
          <a class="nav-item" href="#/app/create">创建图表</a>
        </nav>
        <div class="nav-action">
          <span class="btn btn-success nav-btn">已登录:{{ username }}</span>
          <span class="btn btn-default nav-btn" @click="logout">注销</span>
        </div>
      </div>
    </header>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
  .app-main {
    margin-top: 25px;
  }
</style>
<script>
  export default {
    computed: {
      username() {
        return this.$store.getters.username;
      },
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push({ path: '/session/signIn' });
      },
    },
  };
</script>
