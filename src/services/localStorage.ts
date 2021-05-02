export const setUserId = (data: any) => localStorage.setItem("userId", data);

export const getUserId = () => localStorage.getItem("userId");
