import axios from 'axios';

const apiNSFW = axios.create({
    baseURL: "https://v2.jokeapi.dev/joke/Dark?type=single",
    headers: { "Content-Type": "application/json" }
})


export default apiNSFW;