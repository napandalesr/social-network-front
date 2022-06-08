import httpClient from "../";

const post = async (data: any): Promise<void> => {
  return await httpClient.post("/auth", data);
};

const authHttp = {
  post
};

export {
  authHttp
};
