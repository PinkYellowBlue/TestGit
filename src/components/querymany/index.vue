<template>
  <div class="user_name_list">
    <div class="user_name_list_case">
      <div class="user_name_list_case_top">
        <div class="user_name_list_flex">
          <div><img src="../../assets/input/City.png" alt=""></div>
          <el-cascader size="large" :options="optionss" v-model="selectedOptions" @change="handleChange">
          </el-cascader>
        </div>
        <div class="user_name_list_flex">
          <div><img src="../../assets/input/User.png" alt=""></div>
          <el-input v-model="input" placeholder="请输入用户名"></el-input>
  
        </div>
        <div class="user_name_list_flex">
          <div><img src="../../assets/input/PhoneNum.png" alt=""></div>
          <el-input v-model="input" placeholder="请输入手机号"></el-input>
  
        </div>
        <div class="user_name_list_flex">
          <div><img src="../../assets/input/VIP.png" alt=""></div>
          <el-select v-model="value" :placeholder=s s>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
  
          </el-select>
        </div>
  
      </div>
      <div class="user_name_list_case_bottom">
        <!-- <div class="register_buttoon">
          <el-button type="text" size="medium">注册时间: </el-button>
        </div> -->
        <!-- <div class="case_bottom_title">注册时间: </div> -->
        <!-- <div class="case_bottom_data"> -->
        <div class="list_case_bottom">
          <div class="list_case_date">注册时间:</div>
          <div>
                        <el-date-picker
                            v-model="value6"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                        </div>
        </div>
        <div class="user_name_list_flex">
          <div><img src="../../assets/input/RealName.png" alt=""></div>
          <el-input resize="none" v-model="input" placeholder="请输入用户名"></el-input>
        </div>
        <div>
          <el-button type="primary" plain>查询</el-button>
        </div>
        <div>
          <el-button type="primary" plain>导出EXCEL</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    provinceAndCityData
  } from 'element-china-area-data'
  export default {
    data() {
      return {
        optionss: provinceAndCityData,
        selectedOptions: [],
        ss: '选择',
        value6: '',
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
        valu: ''
      }
    },
    methods: {
      handleChange(value) {
        console.log(value, '数据是什么')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .user_name_list {
    width: 100%;
    height: auto;
    // margin-top: 20px;
    // margin-left: 10%;
    display: flex;
    justify-content: center;
    .user_name_list_case {
      margin-top: 20px;
      margin-left: 10px;
      width: 1150px;
      height: 180px;
      // border: 1px solid #999;
      .user_name_list_case_top {
        width: 1100px;
        display: flex;
        margin-left: 10px;
        margin-top: 20px;
        justify-content: space-between;
        .user_name_list_flex {
            display: flex;
            justify-content: space-between;
            div {
              margin-right: 20px;
            }
        }
      }
      .user_name_list_case_bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        margin-left: 10px;
        width: 1100px;
        .list_case_bottom {
          display: flex;
          justify-content: space-between;
          .list_case_date {
            margin-top: 10px;
            margin-right: 10px;
          }
        }
        .user_name_list_flex {
            display: flex;
            justify-content: space-between;
            div {
              margin-right: 20px;
            }
        }
        .register_buttoon {
          // font-size: 20px; 
          margin-left: 1.7rem;
        }
        // .case_bottom_data {
        //   height: 40px;
        // }
      }
    }
  }
</style>
