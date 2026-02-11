import axios from 'axios';

const apiNSFW = axios.create({
    baseURL: "https://sv443.net/jokeapi/v2/joke/Any?type=single",
    headers: { "Content-Type": "application/json" }
})


export default apiNSFW;