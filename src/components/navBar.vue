<!--  -->
<template>
  <div class="arrow">
    <span @click="goBack">＜</span>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: ['title'],
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  created () {},
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
.arrow {
  position: relative;
}
.arrow span {
  position: absolute;
  left: 10px;
  height: 100%;
  line-height: 40px;
  width: 40px;
  font-size: 30px;
}
h2 {
  font-size: 20px;
  font-weight: 900;
  background-color: rgb(240, 86, 86);
  text-align: center;
  height: 40px;
  line-height: 40px;
}
</style>
