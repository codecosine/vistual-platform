<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import store from './vuex/store';
export default {
  components: {

  },
  store,
};
</script>

<style>
html {
  height: 100%;
}
</style>
