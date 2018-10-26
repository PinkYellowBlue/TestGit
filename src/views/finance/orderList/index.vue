<template>
    <div class="user_name_list_order">
        <div class="user_name_list_center">
            <!-- <div class="user_name_list_case">
                <div class="user_name_list_case_top">
                    <div>
                        <el-cascader size="large" :options="optionss" v-model="selectedOptions" @change="handleChange">
    
                        </el-cascader>
                    </div>
                    <div>
                        <el-input v-model="input" placeholder="请输入用户名"></el-input>
    
                    </div>
                    <div>
                        <el-input v-model="input" placeholder="请输入手机号"></el-input>
    
                    </div>
                    <div>
                        <el-input v-model="input" placeholder="请输入姓名"></el-input>
                    </div>
    
                </div>
                <div class="user_name_list_case_bottom">
                    <div class="register_buttoon">
                        注册时间:
                    </div>
                    <div>
                        <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
    
                    <div>
                        <el-button type="primary" plain>查询</el-button>
                    </div>
                    <div>
                        <el-button type="primary" plain>导出EXCEL</el-button>
                    </div>
                </div>
            </div> -->
    <div class="user_name_list_case">
      <div class="user_name_list_case_top">
        <div class="user_name_list_flex">
          <div><img src="@/assets/input/City.png" alt=""></div>
          <el-input v-model="information.orderNo" placeholder="请输入订单号"></el-input>
        </div>
        <div class="user_name_list_flex">
          <div><img src="@/assets/input/User.png" alt=""></div>
          <el-input v-model="information.nickName" placeholder="请输入用户名"></el-input>
  
        </div>
        <div class="user_name_list_flex">
          <div><img src="@/assets/input/PhoneNum.png" alt=""></div>
          <el-input v-model="information.phone" placeholder="请输入手机号"></el-input>
  
        </div>
        <div class="user_name_list_flex">
          <div><img src="@/assets/input/VIP.png" alt=""></div>
                    <el-input v-model="information.userName" placeholder="请输入姓名"></el-input>
        </div>
  
      </div>
      <div class="user_name_list_case_bottom">
        <!-- <div class="register_buttoon">
          <el-button type="text" size="medium">注册时间: </el-button>
        </div> -->
        <!-- <div class="case_bottom_title">注册时间: </div> -->
        <!-- <div class="case_bottom_data"> -->
        <div class="list_case_bottom">
          <div class="list_case_date">下单时间:</div>
           <el-date-picker
      v-model="date"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
        </div>
        <div class="user_name_list_flex">
          <div><img src="@/assets/input/VIP.png" alt=""></div>
                    <el-select v-model="information.status" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </div>
        <div>
          <el-button type="primary" plain @click="daaa">查询</el-button>
        </div>
        <div>
          <el-button type="primary" plain>导出EXCEL</el-button>
        </div>
      </div>
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
                <el-table-column prop="orderNo" label="订单号">
                </el-table-column>
                <el-table-column prop="orderMoney" label="交易金额">
                </el-table-column>
                <el-table-column prop="createTime" label="交易时间">
                </el-table-column>
                <el-table-column prop="payType" label="类型">
                </el-table-column>
                <el-table-column prop="userName" label="下单人">
                </el-table-column>
                <el-table-column prop="nickName" label="用户名">
                </el-table-column>
                <el-table-column prop="payMode" label="支付方式">
                </el-table-column>
                <el-table-column prop="payStatus" label="状态">
                </el-table-column>
                <el-table-column prop="more" label="操作">
                    <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click.native.prevent="OrderDetails(scope.$index,scope.row)"
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
      :current-page="page"
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="pages">
    </el-pagination>
    </div>
    <div class="air_order"></div>
      </div>
</template>

<script>
import { provinceAndCityData } from "element-china-area-data";
import { orderList, orderQuery, OrderDetails } from "@/api/finance";
import Vue from "vue";
const log = console.log.bind(console);
export default {
  data() {
    return {
      page: 1,//当前页面
      pages: 0,//总条数
      optionss: provinceAndCityData,
      selectedOptions: [],
      value6: "",
      input: "",
      value: "",
      valu: "",
      date: [],
      information: {
          orderNo: '',
        nickName: "",
        userName: "",
        phone: "",
        status: "",
        orderNo: "",
        beginTime: "",
        endTime: "",
        pageNo: 1,
      }, //查询信息
      options: [
        {
          value: 1,
          label: "微信支付"
        },
        {
          value: 2,
          label: "支付宝支付"
        }
      ],

      tableData: []
    };
  },
  created: function() {
    this.OrderList();
  },
  methods: {
    handleChange(value) {
      console.log(value, "数据是什么");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        var that = this
      console.log(`当前页: ${val}`);
      that.page = val
      log(that.page,'第几页')
      that.information.pageNo = val
      log(that.information.pageNo,'更新页码成功')
      that.OrderList()
    },

    //支付状态
    stateFilter(value) {
      var dataKey = {
        "0": "成功",
        "1": "失败",
        "2": "未支付",
        "3": "交易关闭"
      };
      var newValue = dataKey[value];
      return newValue;
    },
    //支付方式
    paymentFilter(value) {
      var dataKey = {
        "1": "支付宝支付",
        "2": "微信支付"
      };
      var newValue = dataKey[value];
      return newValue;
    },
    //订单类型
    typeFilter(value) {
      var dataKey = {
        "1": "写信",
        "2": "会员",
        "3": "礼物",
        "4": "提现"
      };
      var newValue = dataKey[value];
      return newValue;
    },
    daaa() {
      var that = this;
      var date = that.date;
      var load = [];
      if (date != null) {
          
      
      for (var i = 0; i < date.length; i++) {
        var e = date[i];

        var data = new Date(e);
        var y = e.getFullYear();
        var m = e.getMonth() + 1;
        // m = m < 10 ? '0' + m : m;
        var d = e.getDate();
        // d = d < 10 ? ('0' + d) : d;
        var newDate = y + "-" + m + "-" + d;
        log(newDate, "查询数据");
        load.push(newDate);
      }
      that.information.beginTime = load[0];
      that.information.endTime = load[1];
      log(that.information.beginTime, that.information.endTime, "骑士结束");
      var information = that.information;
      log(information,'提交的信息')
    }
    that.Order(information);
      return;
    },
    //交易金额
    dealMoney(value) {
      var newValue = value / 10 / 10;
      return newValue;
    },
    //获取列表
    OrderList() {
      var that = this;
      orderList(this.information).then(response => {
        const data = response.data.data;
        console.log(data, "参数聚合");
        // that.tableData = data.list;
        that.pages = data.total
        var dataList = data.list;
        var load = [];
        for (var i = 0; i < dataList.length; i++) {
          var payStatusValue = dataList[i].payStatus; //支付状态
          var payModeValue = dataList[i].payMode; //支付方式
          var payTypeValue = dataList[i].payType; //订单类型
          var orderMoneyValue = dataList[i].orderMoney; //交易金额
          var playValue = that.stateFilter(payStatusValue);
          var payMode = that.paymentFilter(payModeValue);
          var payType = that.typeFilter(payTypeValue);
          var orderMoney = that.dealMoney(orderMoneyValue);
          Vue.set(dataList[i], "payMode", payMode);
          Vue.set(dataList[i], "payStatus", playValue);
          Vue.set(dataList[i], "payType", payType);
          Vue.set(dataList[i], "orderMoney", orderMoney);
          load.push(1);
        }
        if (load.length == dataList.length) {
          log(dataList, "新返回的数据");
          that.tableData = dataList;
        }
      });
    },
    // 查询列表
    Order(information) {
      var that = this;
      log(information,'有什么数据')
      orderQuery(information)
      .then(response => {
        log(information, "请求数据");
        const data = response.data;
        console.log(data, "参数聚合");
        that.pages = data.data.total
        log(that.pages,'总条数')
        that.tableData = data.data.list;
        var dataList = that.tableData;
        log(dataList, "查询列表");
        var load = [];
        for (var i = 0; i < dataList.length; i++) {
            var payStatusValue = dataList[i].payStatus;//支付状态
            var payModeValue = dataList[i].payMode;//支付方式
            var payTypeValue = dataList[i].payType;//订单类型
            var orderMoneyValue = dataList[i].orderMoney;//交易金额
            var playValue = that.stateFilter(payStatusValue)
            var payMode = that.paymentFilter(payModeValue)
            var payType = that.typeFilter(payTypeValue)
            var orderMoney = that.dealMoney(orderMoneyValue)
            Vue.set(dataList[i], 'payMode', payMode)
            Vue.set(dataList[i], 'payStatus', playValue)
            Vue.set(dataList[i], 'payType', payType)
            Vue.set(dataList[i], 'orderMoney', orderMoney)
            load.push(1)
        }
        if (load.length == dataList.length) {
            log(dataList,'新返回的数据')
            that.tableData = dataList
        }
      });
    },
    //订单详情
    OrderDetails(row) {
        var that = this        
        var data = that.tableData[row]
        var orderNo = data.orderNo
        var obj = {orderNo: orderNo}
        log(obj,'订单号')
        localStorage.setItem('num',orderNo ) //本地保存订单
        that.$router.push({
            path: 'finance/orderDetails',
            query: {
                'paperId':'12'
            }
        })
    }
  }
};
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
        width: 1000px;
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
    // .user_name_list_case {
    //     margin-top: 20px;
    //     width: 1100px;
    //     height: 180px;
    //     border: 1px solid #DCDCDC;
    //     .user_name_list_case_top {
    //         width: 1000px;
    //         display: flex;
    //         margin-left: 10px;
    //         margin-top: 20px;
    //         justify-content: space-between;
    //     }
    //     .user_name_list_case_bottom {
    //         display: flex;
    //         justify-content: space-between;
    //         margin-top: 20px;
    //         margin-left: 10px;
    //         width: 1000px;
    //         .register_buttoon {
    //             font-size: 17px;
    //             margin-left: 30px;
    //             margin-top: 13px;
    //             width: 100px;
    //             // background: pink;
    //             text-align: center;
    //         }
    //         // .case_bottom_data {
    //         //   height: 40px;
    //         // }
    //     }
    // }
  }
  .order_number_money {
    width: 100%;
    height: auto;
    .order_number_money_case {
      // width: 1100px;
      // height: 40px;
      // border: 1px solid #DCDCDC;
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
    margin-top: 20px;
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
