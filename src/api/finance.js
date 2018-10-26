import request from '@/utils/request'
import Qs from 'qs'
//列表数据
export function orderList(information) {
  return request({
    url: 'cms/order/getOrderList.shtml',
    method: 'post',
    data: Qs.stringify(information)
  })
}

//查询列表
export function orderQuery(information) {
  return request({
    url: 'cms/order/getOrderList.shtml',
    method: 'post',
    data: Qs.stringify(information)
  })
}

//订单详情
export function OrderDetails(orderNo) {
  return request({
    url: 'cms/order/getOrderDetail.shtml',
    method: 'post',
    data: Qs.stringify(orderNo)
  })
}
