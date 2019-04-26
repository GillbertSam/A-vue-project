<!--  -->
<template>
  <div class>
    <nav-bar :title="title"></nav-bar>
    <ul class="list">
      <li v-for="(list,index) in datas" :key="index">
        <router-link :to="{name:'News.NewsDetail',query:{id:index}}">
          <div class="list-content-left">{{list.title}}</div>
          <div class="list-content-right">{{list.content}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      datas: [],
      title: '新闻列表'
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {
    let datas = require('../../../static/jsons/NewsList.json')
    this.datas = datas.data
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
<style scoped>
.list li {
  border-bottom: 1px solid #000;
  overflow: hidden;
  height: 60px;
  line-height: 60px;
}
.list div {
  float: left;
}
.list-content-left {
  width: 30%;
  text-align: center;
}
.list-content-right {
  width: 70%;
}
</style>
