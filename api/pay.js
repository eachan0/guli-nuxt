import request from "@/utils/request";

export default {
  createNative(orderNo) {
    return request({
      url: `/api/trade/weixin-pay/create-native/${orderNo}`,
      method: "get"
    });
  },
  queryPayStatus(orderNo) {
    return request({
      url: `/api/trade/order/query-pay-status/${orderNo}`,
      method: "get"
    });
  }
};
