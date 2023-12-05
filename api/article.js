const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
// const API_BASE_URL = "http://localhost:5000"

console.log(API_BASE_URL);
export const article_type = {
    GAMING: "gaming",
    MATH: "math",
    PHYSICS: "physics",
    PROGRAMMERS: "programmers"
}

export const search = (query) => fetch(`${API_BASE_URL}/search?query=${query}`)

export const getArticleById = (id) => fetch(`${API_BASE_URL}/doc/${id}`)