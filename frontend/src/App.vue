<template>
  <div id="app">
    <div class="global-alert" v-show="usermsgshow">
      <div class="alert alert-dismissible container" role="alert"
      v-bind:class="{
        'alert-warning': usermsg.msgstate === 'warning',
        'alert-success': usermsg.msgstate === 'success',
        'alert-info': usermsg.msgstate === 'info',
        'alert-danger': usermsg.msgstate === 'danger'}">
        <button type="button" class="close" @click="closeAlert">
          <span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        {{usermsg.msg}}
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import store from './vuex/store';

export default {
  name: 'home',
  store,
  methods: {
    closeAlert() {
      this.$store.dispatch('clearUserMsg');
      // this.usermsgshow = false;
    },
    lazyCloseAlert() {
    },
  },
  computed: {
    usermsgshow() {
      if (this.usermsg.msgstate) {
        // this.lazyCloseAlert();
        return true;
      }
      return false;
    },
    usermsg() {
      return this.$store.getters.usermsg;
    },
  },
};
</script>
<style>
  .global-alert {
    position: absolute;
    z-index: 20;
    top:75px;
    left:0;
    right: 0;
  }
</style>
