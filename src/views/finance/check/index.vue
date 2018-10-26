<template>
  <div class="user_name_list_order">
    <div class="user_name_list_center">
      <div class="user_name_list_case">
        <div class="user_name_list_case_top">
          <div>
            <el-cascader size="large" :options="optionss" v-model="selectedOptions" @change="handleChange">
  
            </el-cascader>
          </div>
          
          <!-- <div class="case_bottom_title">注册时间: </div> -->
          <!-- <div class="case_bottom_data"> -->
          <div class="register_date">
            <div class="register_buttoon">
            注册时间:
          </div>
            <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>
              <div class="button_sex">
            <el-button type="primary" plain>查询</el-button>
          </div>
          <div>
            <el-button type="primary" plain>导出EXCEL</el-button>
          </div>
        </div>
        <!-- <div class="user_name_list_case_bottom"> -->
          <!-- <div class="register_buttoon">
                   注册时间:
              </div>
                
                  <div>
                         <el-date-picker
        v-model="value6"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
                  </div> -->
  
          <!-- <div class="button_sex">
            <el-button type="primary" plain>查询</el-button>
          </div>
          <div>
            <el-button type="primary" plain>导出EXCEL</el-button>
          </div>
        </div> -->
      </div>
    </div>
    <div class="order_number_money">
      <div class="order_number_money_case">
        <div class="order_number">
          订单数量 10000
        </div>
        <div class="order_money">
          交易金额 100000元
        </div>
      </div>
    </div>
    <div class="tab_order">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="对账日期">
        </el-table-column>
        <el-table-column prop="money" label="交易金额">
        </el-table-column>
        <el-table-column prop="moneyLat" label="通到费">
        </el-table-column>
        <el-table-column prop="agency" label="代理商结算">
        </el-table-column>
        <el-table-column prop="close" label="结算状态">
        </el-table-column>
        <el-table-column prop="handle" label="操作">
          <template slot-scope="scope">
          <el-button
            size="mini"
            >详情</el-button>
</template>
      </el-table-column>
    </el-table>
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
    <div class="air_order"></div>
      </div>
</template>

<script>
  import {
    provinceAndCityData
  } from 'element-china-area-data'
  export default {
    data() {
      return {
        currentPage4: 4,
        optionss: provinceAndCityData,
        selectedOptions: [],
        value6: '',
        input: '',
        value: '',
        valu: '',
        tableData: [{
          date: '2018-09-08',
          money: '12',
          moneyLat: '12',
          agency: '3.4',
          close: '已结',
          handle: '详情',
        }, {
          date: '2018-09-08',
          money: '12',
          moneyLat: '12',
          agency: '3.4',
          close: '已结',
          handle: '详情',
        }, {
          date: '2018-09-08',
          money: '12',
          moneyLat: '12',
          agency: '3.4',
          close: '已结',
          handle: '详情',
        }, {
          date: '2018-09-08',
          money: '12',
          moneyLat: '12',
          agency: '3.4',
          close: '已结',
          handle: '详情',
        }, {
          date: '2018-09-08',
          money: '12',
          moneyLat: '12',
          agency: '3.4',
          close: '已结',
          handle: '详情',
        }, {
          date: '2018-09-08',
          money: '12',
          moneyLat: '12',
          agency: '3.4',
          close: '已结',
          handle: '详情',
        }, {
          date: '2018-09-08',
          money: '12',
          moneyLat: '12',
          agency: '3.4',
          close: '已结',
          handle: '详情',
        }, ]
      }
    },
    methods: {
      handleChange(value) {
        console.log(value, '数据是什么')
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  
    }
  }
</script>

<style lang="scss" scoped>
  .user_name_list_order {
    margin-top: 200px;
    width: 100%;
    height: auto;
    // margin-top: 20px;
    // margin-left: 10%;
    .user_name_list_center {
      width: 100%;
      display: flex;
      justify-content: center;
      .user_name_list_case {
        margin-top: 20px;
        width: 1200px;
        height: auto;
        // border: 1px solid #dcdcdc;
        .register_buttoon {
          font-size: 17px;
          margin-left: 30px;
          margin-top: 13px;
          width: 100px;
          // background: pink;
          text-align: center;
        }
        .user_name_list_case_top {
          width: 1100px;
          display: flex;
          margin-left: 10px;
          margin-top: 20px;
          justify-content: space-between;
          .register_date {
            display: flex;
            justify-content: space-between;
          }
        }
        .user_name_list_case_bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          margin-left: 10px;
          width: 300px;
          .button_sex {
            button {
              width: 100px;
            }
          }
          // .case_bottom_data {
          //   height: 40px;
          // }
        }
      }
    }
    .order_number_money {
      // margin-top: 200px;
      width: 100%;
      height: auto;
      // display: flex;
      // justify-content: center;
      .order_number_money_case {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        .order_number {
          margin-left: 20px;
        }
        .order_money {
          margin-left: 40px;
        }
      }
    }
    .tab_order {
      margin-left: 20px;
    }
    .paging {
      width: 98%;
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
    .air_order {
      width: 100%;
      height: 200px;
    }
  }
</style>
