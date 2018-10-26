<template>
    <div class="manage_operating">
        <div class="manage_operating_title">后台操作记录</div>
        <div class="manage_operating_tab">
            <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="people"
      label="操作人"
      >
    </el-table-column>
    <el-table-column
      prop="number"
      label="账号"
      >
    </el-table-column>
    <el-table-column
      prop="describe"
      label="描述">
    </el-table-column>
    <el-table-column
      prop="ip"
      label="IP">
    </el-table-column>
    <el-table-column
      prop="date"
      label="时间">
    </el-table-column>
  </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
      return {
        tableData: [{
          people: '2016-05-02',
          describe: '王小虎',
          number: '上海市普陀区金沙江路 1518 弄',
          ip: '192.156.12.12',
          date: '2018年10月8日12时10分21秒'
        },{
          people: '2016-05-02',
          describe: '王小虎',
          number: '上海市普陀区金沙江路 1518 弄',
          ip: '192.156.12.12',
          date: '2018年10月8日12时10分21秒'
        },{
          people: '2016-05-02',
          describe: '王小虎',
          number: '上海市普陀区金沙江路 1518 弄',
          ip: '192.156.12.12',
          date: '2018年10月8日12时10分21秒'
        },{
          people: '2016-05-02',
          describe: '王小虎',
          number: '上海市普陀区金沙江路 1518 弄',
          ip: '192.156.12.12',
          date: '2018年10月8日12时10分21秒'
        },{
          people: '2016-05-02',
          describe: '王小虎',
          number: '上海市普陀区金沙江路 1518 弄',
          ip: '192.156.12.12',
          date: '2018年10月8日12时10分21秒'
        },]
      }
    }
    }
</script>

<style lang="scss" scoped>
    .manage_operating {
      margin-top: 200px;
        width: 100%;
        height: auto;
        .manage_operating_title {
            font-size: 30px;
            font-weight: 700;
            margin-top: 30px;

        }
        .manage_operating_tab {
            margin-top: 20px;
        }
    }
</style>
