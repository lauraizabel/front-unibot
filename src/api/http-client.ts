import axios from "axios";

const HttpClient = axios.create({ baseURL: process.env.REACT_APP_API });

export default HttpClient;
