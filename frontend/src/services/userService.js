import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-noticias-e7vr.onrender.com";

export function signup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar: "https://i.imgur.com/xmI2QAo.jpg",
    background: "https://i.imgur.com/XbRg9D7.png",
  };
  const response = axios.post(`${baseURL}/user`, body);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseURL}/user`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    }
  });
  return response;
}

function generateUserName(name) {
  const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}