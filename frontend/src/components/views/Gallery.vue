<template>
  <div>
    <div class="container">
      <div>
        <h3 id="overview" class="page-header">打开一个图表</h3>
        <div class="row">
          <div class="col-xs-6 col-md-3" v-for="item in chartsItems">
            <a @click="showCharts(item.name)" class="thumbnail galleryList">
              <img alt="item.name" v-bind:src="item.src" data-holder-rendered="true" >
            </a>
            <span class="text-center">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 id="overview" class="page-header">创建一个新的图表</h3>
        <div class="row">
          <div class="col-xs-6 col-md-3" v-for="item in gallery">
            <a @click="create(item.name)" class="thumbnail galleryList">
              <img alt="item.name" v-bind:src="item.src" data-holder-rendered="true" >
            </a>
            <span class="text-center">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .app-header {
    height: 5rem;
    display: flex;
    flex-direction: column;
    z-index: 3;
    margin-bottom: -1px;
    background-color: #fff;
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0,0,0,0.075);
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  .app-main {
    margin-top: 40px;
  }
  .galleryList{
    height: 180px;
    width: 100%;
    display: block;
  }

</style>
<script>
  export default {
    data() {
      return {
        gallery: [
          {
            name: 'bar',
            src: require('../../assets/img/gallery/bar-mark.png'), // eslint-disable-line
          },
          {
            name: 'bar-stack',
            src: require('../../assets/img/gallery/bar-stack.png'), // eslint-disable-line
          },
          {
            name: 'mix-line-bar',
            src: require('../../assets/img/gallery/mix-line-bar.png'), // eslint-disable-line
          },
          {
            name: 'pie-doughnut',
            src: require('../../assets/img/gallery/pie-doughnut.png'), // eslint-disable-line
          },
        ],
      };
    },
    created() {
      this.fetchItems(this.username);
    },
    computed: {
      chartsItems() {
        return this.$store.getters.chartItems;
      },
      currentId() {
        return this.$store.getters.currentId;
      },
    },
    methods: {
      create(graphName) {
        this.$store.dispatch('updateName', graphName);
        this.$router.push({ name: 'create' });
      },
      showCharts(graphName) {
        this.$router.push({ name: 'exhibition', params: { graphName } });
      },
      fetchItems(username) {
        this.loading = true;
        this.$http.post('/users/chartItems', { username })
          .then((res) => {
            // token获得已经登录数据
            this.$store.dispatch('fetchItemsSuccess', res.data);
          }, (err) => {
            this.error = err.toString();
          });
      },
    },
  };
</script>
