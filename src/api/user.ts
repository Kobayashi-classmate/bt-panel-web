import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

export type UserResult = {
  success: boolean;
  codeimg: boolean;
  data: {
    /** 头像 */
    avatar: string;
    /** 用户名 */
    username: string;
    /** 昵称 */
    nickname: string;
    /** 当前登录用户的角色 */
    roles: Array<string>;
    /** 按钮级别权限 */
    permissions: Array<string>;
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type verifyCode = {
  success: boolean;
  data: {
    /** `验证码图片地址` */
    base64: string;
    /** key验证值 */
    key: string;
    /** md5加密值 */
    md5: string;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<any>("post", baseUrlApi("login"), { data });
};

/** 获取验证码 */
export const getVerifyCode = (data?: object) => {
  return http.request<verifyCode>("get", baseUrlApi("verifycode"), { data });
};

/** 刷新`token` */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", baseUrlApi("refresh-token"), {
    data
  });
};
