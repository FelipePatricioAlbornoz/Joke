import axios from 'axios';

const api = axios.create({
    baseURL: "https://v2.jokeapi.dev/joke",
    headers: { "Content-Type": "application/json" }
})


export default api;