import axios from 'axios';

const api = axios.create({
    baseURL: "https://v2.jokeapi.dev/joke/Any?type=single",
    headers: { "Content-Type": "application/json" }
})


export default api;