<!--  -->
<template>
<div class=''>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="120"
      :render-header="yrlRenderHeader">
      <!-- <template slot="header" slot-scope="scope">
        <el-checkbox name="dateChecked" @change="checkChange" v-model="dateChecked">日期</el-checkbox>
    </template> -->
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
      <template slot="header" slot-scope="scope">
        <el-checkbox name="nameChecked" @change="checkChange" v-model="nameChecked">姓名</el-checkbox>
    </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
      <template slot="header" slot-scope="scope">
        <el-checkbox name="addressChecked" @change="checkChange" v-model="addressChecked">地址</el-checkbox>
    </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button> -->
    <el-button @click="download()">下载</el-button>
  </div>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
      dateChecked: false,
      nameChecked: false,
      addressChecked: false,
      checkedArray: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    yrlRenderHeader (c, {columns, $index}) {
      return c('input', {
        domProps: {
          type: 'checkbox',
          innerHTML: '日期',
          name: 'dateChecked'
        },
        attr: {
          name: 'dateChecked'
        },
        on: {
          change: (val) => {
            this.checkChange(val.path[0].checked, val)
            console.log(val.path[0].checked, val)
          }
        }
      })
    },
    download () {
      this.checkedArray.forEach((v, i) => {
        this[v] = false
      })
      this.checkedArray = []
    },
    checkChange (checked, e) {
      if (checked) {
        this.checkedArray.push(e.path[0].name)
      } else {
        this.checkedArray = this.checkedArray.filter((v, i) => {
          return v !== e.path[0].name
        })
      }
    }},
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

</style>
