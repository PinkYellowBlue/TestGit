<template>
    <div class="role_manage">
        <div class="role_new">
            <div class="role_new_user" @click="dialogVisible = true">
                  <el-button type="primary" plain>新增员工</el-button>
            </div>
        </div>
        <div>
            <div>
                <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="account"
        label="账号"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="role"
        label="所属角色">
      </el-table-column>
      <el-table-column
        prop="date"
        label="录用时间">
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
          编辑权限
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
  title="新增员工"
  :visible.sync="dialogVisible"
  top="30vh"
  width="30%"
  center=true
  :before-close="handleClose">
  <div class="propr_flex_center">
      <div class="flex_act">
      <div class="title_tag">账号</div>
  <div class="input_tag">
    <el-input v-model="input" placeholder="请输入账号"></el-input>
  </div>
  </div>
  </div>
    <div class="propr_flex_center">
      <div class="flex_act">
      <div class="title_tag">密码</div>
  <div class="input_tag">
    <el-input v-model="password" placeholder="请输入密码"></el-input>
  </div>
  </div>
  </div>
  <div class="propr_flex_center">
      <div class="flex_act">
      <div class="title_tag">姓名</div>
  <div class="input_tag">
    <el-input v-model="input" placeholder="请输入姓名"></el-input>
  </div>
  </div>
  </div>
  <div class="propr_flex_center">
      <div class="flex_state">
      <div class="title_tag">状态</div>
  <div class="input_tag">
 <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>  </div>
  </div>
  </div>
  <div class="propr_flex_center">
      <div class="flex_act">
      <div class="title_tag">角色</div>
  <div class="input_tag">
    <el-input v-model="input" placeholder="请输入角色"></el-input>
  </div>
  </div>
  </div>
  <div class="propr_flex_center">
      <div class="flex_act">
      <div class="title_tag">时间</div>
  <div class="input_tag">
    <el-date-picker
        v-model="value_date"
        type="date"
        placeholder="选择日期">
        </el-date-picker>
  </div>
  </div>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<div class="air_csse"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        input: '',
        password: '',
      currentPage4: "2",
      value_date: "",
      tableData: [
        {
          account: "138481293249",
          state: "正常",
          date: "2016年5月2日",
          name: "王小虎",
          role: "运营管理"
        },
        {
          account: "138481293249",
          state: "正常",
          date: "2016年5月2日",
          name: "王小虎",
          role: "运营管理"
        },
        {
          account: "138481293249",
          state: "正常",
          date: "2016年5月2日",
          name: "王小虎",
          role: "运营管理"
        },
        {
          account: "138481293249",
          state: "正常",
          date: "2016年5月2日",
          name: "王小虎",
          role: "运营管理"
        },
        {
          account: "138481293249",
          state: "正常",
          date: "2016年5月2日",
          name: "王小虎",
          role: "运营管理"
        },
        {
          account: "138481293249",
          state: "正常",
          date: "2016年5月2日",
          name: "王小虎",
          role: "运营管理"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.role_manage {
  width: 100%;
  height: auto;
  margin-top: 200px;
  // background: pink;
  .propr_flex_center {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .flex_act {
      width: 400px;
      display: flex;
      justify-content: space-between;
      .title_tag {
        margin-top: 10px;
        font-size: 17px;
      }
      .input_tag {
        width: 330px;
        .el-date-editor.el-input {
          width: 330px;
        }
      }
    }
  }
  .propr_flex_center {
    //状态
    .flex_state {
      //  margin-top: 20px;
      width: 400px;
      display: flex;
      justify-content: space-between;
      .title_tag {
        // margin-right: 5px;
        margin-top: 10px;
        font-size: 17px;
      }
      .input_tag {
        width: 330px;
        .el-select {
          width: 330px;
        }
        .el-date-editor.el-input {
          width: 330px;
        }
      }
    }
  }
  //   .propr_flex_center {
  //     //描述
  //     .flex_describe {
  //       margin-top: 20px;
  //       width: 400px;
  //       display: flex;
  //       justify-content: space-between;
  //       .title_tag {
  //         // margin-right: 5px;
  //         margin-top: 10px;
  //         font-size: 17px;
  //       }
  //       .input_tag {
  //         // margin-left: 20px;
  //         width: 330px;
  //         .el-date-editor.el-input {
  //             width: 330px;
  //         }
  //       }

  //     }
  //   }
  .air_csse {
    width: 100%;
    height: 300px;
  }
  .flex_act {
    width: 265px;
    display: flex;
    justify-content: space-between;
    .title_tag {
      margin-top: 10px;
      font-size: 17px;
    }
    .input_tag {
      width: 200px;
    }
  }
  //状态
  //  .flex_state {
  //    margin-top: 20px;
  //     width: 260px;
  //     display: flex;
  //     justify-content: space-between;
  //     .title_tag {
  //       // margin-right: 5px;
  //       margin-top: 10px;
  //       font-size: 17px;
  //     }
  // .input_tag {
  //   input {
  //     width: 210px;
  //   }
  //   width: 210px;
  //   background: pink;
  // }
  // }
  //描述
  // .flex_describe {
  //  margin-top: 20px;
  //   width: 265px;
  //   display: flex;
  //   justify-content: space-between;
  //   .title_tag {
  //     // margin-right: 5px;
  //     margin-top: 10px;
  //     font-size: 17px;
  //   }
  //   .input_tag {
  //     // margin-left: 20px;
  //     width: 200px;
  //   }
  // }
  .role_new {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .role_new_user {
      margin-top: 20px;
      margin-right: 20px;
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
