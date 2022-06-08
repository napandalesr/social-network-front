import httpClient from "../";

const post = (data: any): any => {
  return httpClient.post("/users", data);
};

const userHttp = {
  post
};

export {
  userHttp
};
