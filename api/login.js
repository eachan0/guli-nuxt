import request from "@/utils/request";
import qs from 'qs';
export default {
  //登录的方法
  submitLoginUser(data) {
    return request({
      url: `/educenter/member/login`,
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:qs.stringify(data)
    });
  },

  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/educenter/member/getMemberInfo`,
      method: "get"
    });
  }
};
