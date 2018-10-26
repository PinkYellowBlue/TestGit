<template>
  <div class="user_many">
    <query-many></query-many>
    <div class="user_tab">
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="用户 UID"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="昵称"
        >
      </el-table-column>
       <el-table-column
        prop="userName"
        label="姓名"
        >
      </el-table-column>
       <el-table-column
        prop="card"
        label="会员卡类型"
        >
      </el-table-column>
       <el-table-column
        prop="number"
        label="消费次数"
        >
      </el-table-column>
       <el-table-column
        prop="state"
        label="是否在线"
        >
      </el-table-column>
       <el-table-column
        prop="city"
        label="注册省市"
        >
      </el-table-column>
      <el-table-column
        prop="joinData"
        label="注册时间"
        >
      </el-table-column>
      <el-table-column
        prop="handle"
        label="操作"
        >
        <template slot-scope="scope">
        <el-button
          size="mini"
          >更多</el-button>
      </template>
      </el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
         data() {
        return {
          currentPage4: 4,
          tableData: [{
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          }, {
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          },{
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          },{
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          },{
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          },{
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          },{
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          },{
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          },{
            date: '1234567',
            name: '王小虎王',
            userName: '吴彦祖',
            handle: '更多',
            card: '年卡',
            number: '222',
            state: '是',
            city: '湖南省、长沙市',
            joinData: '2018年10月26日'
          },]
        }
      },
       methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
   
  }
</script>
<style lang="scss" scoped>
  .user_many {
    width: 100%;
    margin-top: 200px;
    height: auto;
    .user_tab {
      margin-top: 20px;
      margin-left: 10px;
      width: 98%;
      height: 800px;
      // border: 1px solid #999;
      .paging {
        width: 98%;
        display: flex;
        margin-top: 30px;
        justify-content: center;
      }
    }
  }
</style>
