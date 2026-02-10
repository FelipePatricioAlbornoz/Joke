import axios from 'axios';

const api = axios.create({
    baseURL: "https://sv443.net/jokeapi/v2/joke/",
    headers: { "Content-Type": "application/json" }
})


export default api;