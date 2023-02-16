import client from "./client";
// const client = apiClient;

const endpoint = "/user";

const registerUser = (values) => {
  return client.post(`${endpoint}/register/`, values);
};

const signUp = (values) => {
  return client.post(`${endpoint}/register/`, values);
};

const loginUser = (values) => {
  return client.post(`${endpoint}/login`, values);
};

export default {
  registerUser,
  loginUser,
  signUp,
};
