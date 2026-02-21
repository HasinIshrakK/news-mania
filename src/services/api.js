import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getNews = (params) => API.get("/news", { params });
export const getSingleNews = (id) => API.get(`/news/${id}`);