import client from "./client";
// const client = apiClient;

const endpoint = "/user";

const registerUser = (values) => {
  return client.put(`${endpoint}/register/`, values);
};

const loginUser = (values) => {
  return client.post(`${endpoint}/login`, values);
};

export default {
  registerUser,
  loginUser,
};
