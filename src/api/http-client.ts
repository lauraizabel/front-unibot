import axios from "axios";
import { getAuthData } from "../services/auth";

const HttpClient = axios.create({ baseURL: process.env.REACT_APP_API });

HttpClient.interceptors.request.use(async (request) => {
  const token = getAuthData();
  if (!request.headers["x-access-token"] && token) {
    request.headers["x-access-token"] = token;
  }
  return request;
});

export default HttpClient;
