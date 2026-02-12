import axios from 'axios';

const api = axios.create({ baseURL: "https://v2.jokeapi.dev/joke" });

export function getJoke(category) {
    return api.get(`/${category}?type=single`).then(r => r.data);
}

export default api;