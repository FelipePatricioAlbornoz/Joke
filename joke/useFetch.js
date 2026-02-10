import axios from 'axios';

function useFetch() {
    const api = axios.create({
        baseURL: "https://sv443.net/jokeapi/v2/joke",
        headers: { "Content-Type": "application/json" }
    })
    return api;
}

export default useFetch;