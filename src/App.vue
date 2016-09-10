<template>
    <router-view></router-view>
    <rd-notification></rd-notification>
</template>

<script>
  import store from './vuex/store';
  export default {
    store,
  };
</script>

