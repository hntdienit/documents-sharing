import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:3200/",
  withCredentials: true,
});

export default newRequest;
