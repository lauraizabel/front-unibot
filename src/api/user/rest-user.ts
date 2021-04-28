import HttpClient from "../http-client";

export const postUser = async (data: any) =>
  await HttpClient.post("/users/create", data);

export const authUser = async (data: any) =>
  await HttpClient.post("/users/login", data);

export const fetchUsers = async () => await HttpClient.get("/users");

export const deleteUser = async (id: string) =>
  await HttpClient.delete(`/users/${id}`);

export const fetchOneUser = async (id: string) =>
  await HttpClient.get(`/users/${id}`);

export const putUser = async (id: string, data: any) =>
  await HttpClient.put(`/users/${id}`, data);
