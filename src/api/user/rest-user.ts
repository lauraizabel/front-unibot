import HttpClient from "../http-client";

export const postUser = async (data: any) =>
  await HttpClient.post("/users/create", data);

export const authUser = async (data: any) =>
  await HttpClient.post("/users/login", data);
