<template>
    <div class="role_manage">
        <div class="role_new">
            <div class="role_new_user" @click="dialogVisible = true">
                <el-button type="primary" plain>新增角色</el-button>
            </div>
        </div>
        <div class="tab_statc">
            <div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="编号" type="index" width="180">
                    </el-table-column>
                    <el-table-column prop="date" label="角色">
                    </el-table-column>
                    <el-table-column prop="name" label="状态">
                    </el-table-column>
                    <el-table-column prop="address" label="描述">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template slot-scope="scope">
                        <el-button
                          @click="handleClick(scope.$index,scope.row)"
                          type="text"
                          size="small">
                          编辑
                        </el-button>
                                <el-button
                          @click.native.prevent="deleteRwow(scope.$index, tableData4)"
                          type="text"
                          size="small">
                          编辑权限
                        </el-button>
                                <el-button
                          @click.native.prevent="deleteRow(scope.$index)"
                          type="text"
                          size="small">
                          删除
                        </el-button>
</template>
    </el-table-column>
    </el-table>
            </div>
        </div>
            <!-- <div class="paging">
      <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </div> -->
<el-dialog
  title="新增角色"
  :visible.sync="dialogVisible"
  top="30vh"
  width="30%"
  :center=titeleC
  :before-close="handleClose">
  <div class="propr_flex_center">
      <div class="flex_act">
      <div class="title_tag">角色</div>
  <div class="input_tag">
    <el-input v-model="inputs" placeholder="请输入内容"></el-input>
  </div>
  </div>
  </div>
  <div class="propr_flex_center">
      <div class="flex_state">
      <div class="title_tag">状态</div>
  <div class="input_tag">
 <el-select v-model="values" placeholder="请选择">
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
        <div class="flex_describe">
      <div class="title_tag">描述</div>
  <div class="input_tag">
 <el-input
  type="textarea"
  :rows="4"
  placeholder="请输入内容"
  v-model="textareas">
</el-input>
   </div>
  </div>
    </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="newUser">确 定</el-button>
  </span>
</el-dialog>
<!-- 编辑角色 -->
<el-dialog
  title="编辑角色"
  :visible.sync="editDialog"
  top="30vh"
  width="30%"
  :center=titeleC
  :before-close="handleCloses">
  <div class="propr_flex_center">
      <div class="flex_act">
      <div class="title_tag">角色</div>
  <div class="input_tag">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
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
        <div class="flex_describe">
      <div class="title_tag">描述</div>
  <div class="input_tag">
 <el-input
  type="textarea"
  :rows="4"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
   </div>
  </div>
    </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editDialog = false">取 消</el-button>
    <el-button type="primary" @click="editUser">确 定</el-button>
  </span>
</el-dialog>
    </div>
</template>

<script>
    const log = console.log.bind(console)
    export default {
        data() {
            return {
                titeleC: true,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                input: '',
                textarea: '',
                values: '',
                inputs: '',
                textareas: '',
                num: 0,
                dialogVisible: false,
                editDialog: false,
                edit: false,
                tableData: [{
                    date: '活动策划',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '前台',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '总经理助理',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '技术总监',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleCloses(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            //增加角色
            newUser() {
                var that = this
                var obj = new Object
                obj.date = that.inputs
                obj.name = that.values
                obj.address = that.textareas
                if (obj.date && obj.name && obj.address != '') {
                    log('成功')
    
    
                    that.tableData.unshift(obj)
                    that.dialogVisible = false
    
                    // that.input = ''
                    // that.value = ''
                    // that.textarea = ''
                } else {
                    log('失败')
                    that.$notify.error({
                        title: '错误',
                        message: '请填写完整信息',
                        position: 'bottom-right'
                    });
                }
            },
            //找到当前角色
            handleClick(index, row) {
                var that = this
                that.num = index
    
                log(that.num, row, '🐔')
    
                var obj = row
                // var that = this
                that.editDialog = true
                // console.log(obj, '信息');
                that.input = obj.date
                that.value = obj.name
                that.textarea = obj.address
                // if (that.edit) {
                //         obj.date = that.input
                //         obj.name = that.value
                //         obj.address = that.textarea
                // }
                // console.log(obj.date, '空吗');
    
                // if (that.input && that.value && that.textarea != '') {
                //     console.log('有没有数据');
    
                //         that.edit = true
    
                // }    
            },
            //编辑角色
            editUser() {
                var that = this
                if (that.input && that.value && that.textarea != '') {
                    log('成功')
                    var obj = new Object
                    obj.date = that.input
                    obj.name = that.value
                    obj.address = that.textarea
                    var editNum = that.tableData
                    // editNum = obj
                    this.$set(editNum, that.num, obj);
                    log(editNum[that.num], obj, '是什么')
                    that.editDialog = false
                    // that.edit = true
                    // if (that.edit) {
                    //     that.handleClick(row)
                    //     that.editDialog = false
                    // } else {
                    //     that.tableData.unshift(obj)
                    //     that.dialogVisible = false
                    // }
                    // that.input = ''
                    // that.value = ''
                    // that.textarea = ''
                } else {
                    log('失败')
                    that.$notify.error({
                        title: '错误',
                        message: '请填写完整信息',
                        position: 'bottom-right'
                    });
                }
            },
            //删除角色
            deleteRow(index) {
                var that = this
                log(index,'删除数据')
                var deletNum = that.tableData
                deletNum.splice(index,1)

                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .role_manage {
        width: 100%;
        height: auto;
        margin-top: 200px;
        .tab_statc {
            margin-left: 20px;
        }
        //弹窗
        //角色
        .propr_flex_center {
            display: flex;
            justify-content: center;
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
                }
            }
        }
        //状态
        .flex_state {
            margin-top: 20px;
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
            }
        }
        //描述
        .flex_describe {
            margin-top: 20px;
            width: 400px;
            display: flex;
            justify-content: space-between;
            .title_tag {
                // margin-right: 5px;
                margin-top: 10px;
                font-size: 17px;
            }
            .input_tag {
                // margin-left: 20px;
                width: 330px;
            }
        }
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
