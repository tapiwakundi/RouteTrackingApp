import { AsyncStorage } from "react-native";
import axios from "axios";
import { useContext } from "react";

const instance = axios.create({
  baseURL: "http://3339f74046ba.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
