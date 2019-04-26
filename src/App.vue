<template>
  <div id="app">
    <mt-header fixed title="外卖"></mt-header>
    <div class="main">
      <!-- <transition name="fade"> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
    <mt-tabbar v-if="$route.meta.showTabBar" v-model="selected">
  <mt-tab-item id="home">
    <img @click="goTab" slot="icon" src="./assets/images/coo.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="member">
    <img @click="goTab" slot="icon" src="./assets/images/hsm.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="shopcart">
    <img @click="goTab" slot="icon" src="./assets/images/shc.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="search">
    <img @click="goTab" slot="icon" src="./assets/images/cloudauth.png">
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
      selected: '',
      isSelected: true
    }
  },
  methods: {
    goTab () {
      this.isSelected = true
    }
  },
  watch: {
    // selected (newV, oldV) {
    //   console.log(newV, oldV)
    //   this.$router.push({
    //     name: newV
    //   })
    // }
  },
  updated () {
    if (this.isSelected) {
      this.$router.push({
        name: this.selected
      })
      this.isSelected = false
    }
  }
}
</script>
<style>
.main {
  margin: 40px 0 55px;
}
.mint-tabbar {
  position: fixed;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
