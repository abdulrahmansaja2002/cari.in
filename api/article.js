import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
// const API_BASE_URL = "http://localhost:5000"

console.log(API_BASE_URL);
export const article_type = {
    GAMING: "gaming",
    MATH: "math",
    PHYSICS: "physics",
    PROGRAMMERS: "programmers"
}

axios.defaults.baseURL = API_BASE_URL;

export const search = (query) => axios.get(`/search?query=${query}`)

export const getArticleById = (id) => axios.get(`/doc/${id}`)