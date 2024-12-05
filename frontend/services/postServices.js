import axios from 'axios'

const baseURL = "hhtp://localhost:3001/"

export function getAllPosts() {
    const response = axios.get(`${baseURL/posts}`);
    return response;
}
