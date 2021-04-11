import HttpClient from "../http-client";

const postQA = async (data: any) => {
  return HttpClient.post(`questions`, data);
};

const putQA = async (id: any, data: any) => {
  return HttpClient.put(`questions/${id}`, data);
};

const fetchQA = async () => HttpClient.get("questions");

const fetchOneQA = async (id: string) => HttpClient.get(`questions/${id}`);

const deleteQA = async (id: string) => HttpClient.delete(`questions/${id}`);

export default {
  postQA,
  putQA,
  fetchQA,
  fetchOneQA,
  deleteQA,
};
