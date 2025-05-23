import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-noticias-e7vr.onrender.com";

export function getAllPosts() {
  const response = axios.get(`${baseURL}/news`);
  return response;
}

export function getTopPost() {
  const response = axios.get(`${baseURL}/news/top`);
  return response;
}

export function searchPosts(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}

export function getAllPostsByUser() {
  const response = axios.get(`${baseURL}/news/byUser`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function createNews(body) {
  const response = axios.post(`${baseURL}/news`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function getNewsById(id) {
  const response = axios.get(`${baseURL}/news/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function editNews(body, id) {
  const response = axios.patch(`${baseURL}/news/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteNews (id) {
  const response = axios.delete(`${baseURL}/news/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}