<!--  -->
<template>
<div class=''>
    <!-- 1.js事件 -->
    <!-- <img @mousedown="dragOn" @mousemove="draging" @mouseup="dragOff" src="../../assets/logo.png" alt=""> -->
    <!-- <div @mousedown="dragOn" @mousemove="draging" @mouseup="dragOff" src="../../assets/logo.png" alt="">asdasdazcaasd</div> -->

    <!-- 2.v-drag自定义指令 -->
    <!-- <div v-drag>这是个测试</div> -->
    <div v-drag><img src="../../assets/logo.png" alt=""></div>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      isDrag: false,
      offsetL: null,
      offsetT: null
    }
  },
  computed: {},
  watch: {},
  methods: {
    dragOn (e) {
      console.log(e)
      e.preventDefault()
      let img = e.path[0]
      this.offsetL = e.clientX - img.offsetLeft
      this.offsetT = e.clientY - img.offsetTop
      this.isDrag = true
    },
    draging (e) {
      console.log(this.isDrag)
      if (!this.isDrag) { return false }
      let img = e.path[0]
      let mL = e.clientX
      let mR = e.clientY
      img.style.left = (mL - this.offsetL) + 'px'
      img.style.top = (mR - this.offsetT) + 'px'
      console.log('draging')
    },
    dragOff (e) {
      let img = e.path[0]
      this.isDrag = false
      img.onmousemove = null
    }
  },
  created () {

  },
  mounted () {

  },
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
img {
  position: absolute;
  /* top: 100px;
  left: 200px; */
}
div {
  position: absolute;
  top: 10%;
  left: 50%;
  user-select: none;
}
</style>
