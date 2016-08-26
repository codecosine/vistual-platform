<template>
  <div class="header">
    <ul class="tools">
      <li><a @click="navselect"><i class="glyphicon glyphicon-menu-hamburger"></i></a></li>
      <li><a @click="changeType"><i class="glyphicon glyphicon-th"></i></a></li>
      <li><a @click="changeData"><i class="glyphicon glyphicon glyphicon-pencil"></i></a></li>
      <li><a @click="changeOrigin"><i class="glyphicon glyphicon-wrench"></i></a></li>
      <li><a @click='changeGraph'><i class="glyphicon glyphicon-cog"></i></a></li>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
    </ul>
  </div>
</template>

<style scoped>
  .header {
    height: 5rem;
    display: flex;
    flex-direction: column;
  }
  .nav{
    overflow: visible;
    height: 50px;
    padding: 0 8px;
    z-index: 2;
    font-size: .85em;
    color: #7e888b;
    background: 0 0;
  }
  .tools{
    position: fixed;
    width: 100%;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0);
    color: #6d87de;
    transition: all .4s;
    list-style: none;
  }
  .tools a {
    font-size: 1.4rem;
    display: block;
    margin: 0;
    padding: 1.2rem 1.8rem;
    opacity: 1;
    transition: opacity 0.6s;
  }

  .tools a:hover {
    opacity: 0.7;
  }


</style>
<script>
  import modal from './modal';
  import cosine from './Mycosine';
  export default{
    component: {
      cosine,
      modal,
    },
    data() {
      return {
        showModal: false,
      };
    },
  };
</script>
