import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/gbcc_api", // URL base para suas requisições
});

export default api;
