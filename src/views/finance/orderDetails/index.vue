<template>
<div class="order_detalist_flex">
    <div class="order_detalist" v-for="(item,index) in list" :key="index">
        <div class="order_detalist_case">
            <div class="detalist_case_top">
                <div class="detalist_case_top_top">
                    <div class="case_top_top_number">订单编号: <span>{{item.orderNo}}</span></div>
                </div>
                <div class="detalist_case_top_bottom">
                    <div>下单用户信息 <span>{{item.userName}}</span></div>
                    <div>用户UID <span>{{item.userId}}</span></div>
                    <div>手机号: <span>{{item.phone}}</span></div>
                </div>
            </div>
            <div class="order_message">
                <div class="order_message_top">
                    订单信息:
                </div>
                <div class="order_message_many" v-for="(em,index) in orderList" :key="index">
                    <div>产品: {{item.payType}}</div>
                    <div>产品单价： {{em.itemPrice}}元</div>
                    <div>优惠: {{em.couponMoney}}</div>
                    <div>应付金额: {{item.totalMoney}}元</div>
                    <div>支付金额: {{item.payMoney}}元</div>
                </div>
            </div>
            <div class="order_stase">
                <div class="order_stase_message">
                    订单状态:
                </div>
                <div class="order_stase_place">
                    <div>创建时间: {{item.createTime}}</div>
                    
                </div>
                <div class="order_stase_place">
                    <div>付款时间: {{item.paySuctime}}</div>
                   
                </div>
                <div class="order_stase_payment">支付方式: {{item.payMode}}</div>
                <div class="order_stase_payment">支付状态: {{item.payStatus}}</div>
            </div>   
            <!-- <div class="order_agency">所属代理: 长沙市代理</div>
            <div class="order_agency">代理分成: 1.8元</div>   -->
            <div class="back_button" @click="backList">
                  <el-button type="primary" plain>返回列表</el-button>
            </div>
        </div>
    </div>
    <div class="air_secc"></div>
    </div>
</template>

<script>
import * as delt from "@/api/finance";
const log = console.log.bind(console)
import Vue from "vue";
export default {
      data() {
        return {
            nickName: '',//用户名
            phone: '', // 手机号
            userId: '',// 用户id
            itemName: '', // 产品名称
            itemPrice: '', // 产品单价
            orderNo: '', //订单号
            payMode: '', // 支付方式
            payMoney: '',  //支付金额
            couponMoney: '', //优惠金额
            paySuctime: '', //支付成功时间
            payStatus: '', //支付状态
            list: [],
            orderList: [],
        }
      },
      created: function() {
        this.pickUp();
    },
      methods: {
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
    //交易金额
    dealMoney(value) {
      var newValue = value / 10 / 10;
      return newValue;
    },
          pickUp() {
            var that = this
            var num = localStorage.getItem('num')
            var obj = {orderNo:num}
            log(num,'本地的订单号')
            delt.OrderDetails(obj)
            .then(response => {
                const data = response.data.data;
                log(data,'订单详情s')
                let obj = data.orderDetVoList[0]
                log(obj,'小数组')
                that.orderList.push(obj)
                    log(that.orderList,'产品数据')
                var payStatusValue = data.payStatus; //支付状态
                var payModeValue = data.payMode; //支付方式
                var payTypeValue = data.payType; //订单类型
                var totalMoneyValue = data.totalMoney; //交易金额
                var payMoneyValue = data.payMoney; //付款金额
                var itemPriceValue = obj.itemPrice; //产品单价                                var playValue = that.stateFilter(payStatusValue);
                var payStatus = that.stateFilter(payStatusValue);
                var payMode = that.paymentFilter(payModeValue);
                var payType = that.typeFilter(payTypeValue);
                var totalMoney = that.dealMoney(totalMoneyValue);
                var itemPrice = that.dealMoney(itemPriceValue);
                var payMoney = that.dealMoney(payMoneyValue);
                Vue.set(data, "payMoney", payMoney);
                Vue.set(data, "payMode", payMode);
                Vue.set(data, "payStatus", payStatus);
                Vue.set(data, "payType", payType);
                Vue.set(data, "totalMoney", totalMoney);
                Vue.set(obj, "itemPrice", itemPrice);
                    that.list.push(data)
                    log(that.list,'订单详情')
                    

            })
          },
          backList() {
              var that = this
               that.$router.push({
            path: '/order'
        })
          }
      }
};
</script>

<style lang="scss" scoped>
.order_detalist_flex {
    margin-top: 200px;
  width: 100%;
  height: auto;
  .air_secc {
      width: 100%;
      height: 300px;
  }
.order_detalist {
  margin-top: 200px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  .order_detalist_case {
    width: 1100px;
    height: 600px;
    margin-top: 30px;
    border: 1px solid #dcdcdc;
    .back_button {
        margin-left: 900px;
        margin-top: 30px;
    }
    .detalist_case_top {
      height: 100px;
      border-bottom: 1px solid #dcdcdc;
      .detalist_case_top_top {
        width: 1000px;
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        margin-left: 30px;
        .case_top_top_number {
          font-size: 20px;
          margin-right: 30px;
        }
        .case_top_top_date {
          font-size: 20px;
        }
      }
      .detalist_case_top_bottom {
        margin-top: 30px;
        margin-left: 30px;
        width: 1000px;
        display: flex;
        font-size: 20px;
        justify-content: space-between;
        span {
          color: #ff7a29;
        }
      }
    }
    .order_message {
      width: 1050px;
      margin-top: 20px;
      margin-left: 25px;
      height: 100px;
      border: 1px solid #dcdcdc;
      .order_message_top {
        font-size: 20px;
        margin-top: 20px;
        margin-left: 20px;
      }
      .order_message_many {
        margin-top: 15px;
        margin-left: 20px;
        width: 950px;
        display: flex;
        justify-content: space-between;
      }
    }
    .order_stase {
      width: 1050px;
      margin-top: 20px;
      margin-left: 25px;
      height: 230px;
      border: 1px solid #dcdcdc;
      .order_stase_message {
        margin-top: 20px;
        margin-left: 20px;
        font-size: 20px;
      }
      .order_stase_place {
        width: 950px;
        margin-left: 20px;
        margin-top: 20px;
        display: flex;
        font-size: 15px;
        justify-content: space-between;
      }
      .order_stase_payment {
        margin-top: 20px;
        margin-left: 20px;
      }
    }
    .order_agency {
      margin-top: 20px;
      margin-left: 20px;
      font-size: 18px;
    }
  }
}
}
</style>
