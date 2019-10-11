<template>
  <div>
    <el-table
      :data="tableData"  @row-click="gotoPer">
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="dir" label="方向" width="180">
      </el-table-column>
      <el-table-column prop="perBlogNum" label="博文数">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          dir: "2016-05-02",
          name: "王小虎",
          perBlogNum: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 1,
          dir: "2016-05-02",
          name: "王小虎",
          x: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 1,
          dir: "2016-05-02",
          name: "王小虎",
          perBlogNum: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 1,
          dir: "2016-05-02",
          name: "王小虎",
          perBlogNum: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  mounted() {
    alert(this.$route.params.dir);
  },
  methods: {
    gotoPer(row) {
      console.log(123)
      alert(row.id);
      this.$router.push({name:'blogger',params:{id:row.id}})
    }
  }
};
</script>
