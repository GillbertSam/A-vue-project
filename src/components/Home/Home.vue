<!--  -->
<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" v-bind:key="index">
        <img :src="img.url" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- <el-carousel :interval="1000" type="card" height="200px">
      <el-carousel-item v-for="(img,index) in imgs" v-bind:key="index">
        <img :src="img.url" alt>
      </el-carousel-item>
    </el-carousel> -->
    <div class="home-content">
      <ul>
        <li v-for="(item,index) in contents" :key="index">
          <a :href="item.href">
            <b :style="`background-image:url(${item.url})`"></b>
            <span>{{item.desc}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      imgs: [],
      contents: []
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {
    let imgs = require('../../../static/jsons/lunbotu.json')
    this.imgs = imgs.data
    let contents = require('../../../static/jsons/home_content.json')
    this.contents = contents.data
    // this.$axios
    //   .get('/static/jsons/lunbotu.json')
    //   .then(res => {
    //     console.log(res)
    //     this.imgs = res.data.data
    //   })
    //   .catch(err => {
    //     console.log('轮播图异常', err)
    //   })
    // this.$axios
    //   .get('/static/jsons/home_content.json')
    //   .then(res => {
    //     console.log(res)
    //     this.contents = res.data.data
    //   })
    //   .catch(err => {
    //     console.log('内容区异常', err)
    //   })
  },
  mounted () {},
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {}
}
</script>
<style >
.mint-swipe {
  height: 200px;
}
.home-content ul li {
  float: left;
  list-style: none;
  width: 33.3%;
  box-sizing: border-box;
  height: 100px;
  /* border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc; */
  text-align: center;
}
.home-content ul li:nth-of-type(1),
.home-content ul li:nth-of-type(2) {
  /* border-top: 1px solid #ccc; */
}
.home-content {
  margin-top: 20px;
}
.home-content ul li a {
  text-decoration: none;
  color: #2b2b2b;
}
.home-content ul li a b {
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 auto;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 5px auto 10px;
}
.home .el-carousel__container {
  background-color: rgba(124, 255, 0, 0.2);
}
</style>
