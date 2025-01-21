import { type Recruitment } from "@/types";
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

const options: AxiosRequestConfig = {
  url: "http://localhost:4000/recruitments",
  method: "GET",
};
export const fetchRecruitmentList = async (): Promise<Recruitment[]> => {
  const response = await axios(options).then(
    (res: AxiosResponse<Recruitment[]>) => {
      console.log(res.data);
      return res.data;
    }
  );
  return response;
};
