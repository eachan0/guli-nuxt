import request from "@/utils/request";
export default {
  submitLogin(user) {
    return request({
    //   baseURL: "http://localhost:8160",
      url: "/api/ucenter/member/login",
      method: "post",
      data: user
    });
  },

  getLoginInfo() {
    return request({
    //   baseURL: "http://localhost:8160",
      url: "/api/ucenter/member/get-login-info",
      method: "get"
      // 通过请求头发送token
      //   headers: { 'token': cookie.get('guli_jwt_token') }
    });
  }
};
