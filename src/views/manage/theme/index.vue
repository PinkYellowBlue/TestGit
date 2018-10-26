<template>
    <div class="role_manage">
        <div class="role_new">
            <div class="role_new_user_title">主题列表</div>
            <div class="role_new_user" @click="dialogVisible = true">
                  <el-button type="primary" plain>新增主题</el-button>
            </div>
        </div>
        <div>
            <div>
                <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="theme"
        label="主题"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="添加时间"
        >
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          编辑
        </el-button>
                <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
    </el-table>
            </div>
        </div>
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
    <el-dialog
  title="新增主题"
  :visible.sync="dialogVisible"
  center=true
  top="30vh"
  width="30%"
  :before-close="handleClose">
  <div class="new_flex">
  <div class="flex_theme">
    <div class="flex_title">新增主题</div>
    <div class="flex_input">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
  </div>
  </div>
  <div class="new_flex">
  <div class="flex_date">
    <div class="date_twe">添加时间</div>
    <div class="date_picker">
      <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    </div>
  </div>
    </div>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
    </div>
</template>

<script>
    export default {
          data() {
        return {
           dialogVisible: false,
           value1: '',
          tableData: [{
            date: '2016-05-02',
            theme: '喝茶',
            
          },{
            date: '2016-05-02',
            theme: '喝茶',
            
          },{
            date: '2016-05-02',
            theme: '喝茶',
            
          },{
            date: '2016-05-02',
            theme: '喝茶',
            
          },]
        }
      },
       methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
    }
</script>

<style lang="scss" scoped>
    .role_manage {
      margin-top: 200px;
        width: 100%;
        height: auto;
        .new_flex {
          display: flex;
          justify-content: center;
               //弹窗主题
        .flex_theme {
          width: 400px;
          display: flex;
          justify-content: space-between;
          .flex_title {
            font-size: 17px;
            margin-top: 12px;
          }
          .flex_input {
              .el-input {
                width: 300px;
              }
          }
        }
        //弹窗时间
        .flex_date {
          margin-top: 20px;
          width: 400px;
          display: flex;
          justify-content: space-between;
          .date_twe {
              font-size: 17px;
              margin-top: 12px;
          }
          .date_picker {
            background: pink;
            width: 300px;
              .el-input {
                width: 300px;
                
              }
          }
        }
        }
       
        .role_new {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .role_new_user {
                margin-top: 20px;
                margin-right: 20px;
            }
            .role_new_user_title {
                margin-top: 20px;
                margin-right: 20px;
                font-size: 20px;
            }
        }
        .paging {
        width: 98%;
        margin-top: 30px;
        display: flex;
        justify-content: center;
      }
    }
</style>
