import { create } from "apisauce";

import authStorage from "./authStorage";

const apiClient = create({
  baseURL: "https://api.getbambi.com/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  // console.log(authToken);
  if (!authToken) return;
  // console.log(authToken);
  request.headers["Authorization"] = `Bearer ${authToken}`;
  request.headers["Accept"] = `application/json`;
});

export default apiClient;
