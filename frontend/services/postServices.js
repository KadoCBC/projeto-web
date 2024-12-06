import axios from 'axios'

const baseURL = "http://localhost:3001/"

export function getAllPosts() {
    const response = axios.get(`${baseURL/posts}`);
    return response;
}

export function getTopPost() {
    const response = axios.get(`${baseURL/posts/top}`);
    return response;
}
