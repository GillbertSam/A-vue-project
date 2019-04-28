<!--  -->
<template>
  <div class>
    <!-- <p id="test_3">
      <img
        src="../../assets/logo.png"
        @mousedown="start"
        @mouseup="stop"
        @mousemove="move"
        :style="style"
      >
    </p> -->
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      canDrag: false,

      x0: 0,

      y0: 0,

      x1: 0,

      y1: 0,

      style: null
    }
  },
  computed: {},
  watch: {},
  methods: {
    start: function (e) {
      // 鼠标左键点击

      if (e.button === 0) {
        this.canDrag = true

        // 记录鼠标指针位置

        this.x0 = e.clientX

        this.y0 = e.clientY
      }
    },

    stop: function (e) {
      this.canDrag = false
    },

    move: function (e) {
      if (this.canDrag === true) {
        this.x1 = e.clientX

        this.y1 = e.clientX

        let x = this.x1 - this.x0

        let y = this.y1 - this.y0

        let img = document.querySelector('#test_3 img')

        this.style = `left:${img.offsetLeft + x}px;top:${img.offsetTop + y}px`

        this.x0 = this.x1

        this.y0 = this.y1
      }
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
img {
  position: absolute;
}
</style>
