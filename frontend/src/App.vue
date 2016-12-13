<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import store from './vuex/store';

export default {
  name: 'home',
  store,
};
</script>
<style>
</style>
