import axios from "axios";

const baseURL = "http://localhost:3001";

export function signup(data) {
    delete data.confirmPassword;
    const body = {...data,
        username: generateUserName(data.name), 
        avatar: "https://i.imgur.com/xmI2QAo", 
        background: "https://www.solidbackgrounds.com/images/950x350/950x350-dark-gray-solid-color-background.jpg"
        };
     
    const response = axios.post(`${baseURL}/user/create`, data);
    return response;
} 

export function signin(data) {
    const response = axios.post(`${baseURL}/user/login`, data);
    return response;
}

export function userLogged() {
    const response = axios.get(`${baseURL}/user/findById`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response;
}

function generateUserName(name){
    const withoutSpace = name.replace(/\s/g, "").tolowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${withoutSpace}${randomNumber}`;
}   


