<template>
  <div id="app">
    <mt-header title="外卖"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
  <mt-tab-item id="home">
    <img slot="icon" src="./assets/images/coo.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="member">
    <img slot="icon" src="./assets/images/hsm.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="shopcart">
    <img slot="icon" src="./assets/images/shc.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="./assets/images/cloudauth.png">
    发现
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: ''
    }
  },
  methods: {

  },
  watch: {
    selected (newV, oldV) {
      console.log(newV, oldV)
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>
</style>
