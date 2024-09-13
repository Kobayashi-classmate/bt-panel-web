import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";
import Cookies from "js-cookie";

const data = Cookies.get("admin_token");
console.log(data);

export type getStatisticsResult = {
  success: boolean;
  data: {
    stat: {
      total: number;
      free: number;
      pro: number;
      ltd: number;
      third: number;
      runyn: boolean;
      runtime: string;
      record_total: number;
      record_isuse: number;
    };
    info: {
      framework_version: number;
      php_version: number;
      mysql_version: number;
      software: number;
      os: number;
      date: boolean;
    };
  };
};
/** 获取首页统计数据 */
export const getStatistics = (data?: object) => {
  return http.request<getStatisticsResult>(
    "get",
    baseUrlApi("statistics"),
    { data },
    // 添加 Cookie 参数
    {
      headers: {
        Cookie: "data"
      }
    }
  );
};
