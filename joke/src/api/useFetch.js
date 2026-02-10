import axios from 'axios';

function useFetch() {
    const api = axios.create({
        baseURL: "https://sv443.net/jokeapi/v2/joke",
        headers: { "Content-Type": "application/json" }
    })
    const apiNSFW = axios.create({
        baseURL: "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,racist"
    })
    return [api, apiNSFW];
}

export default useFetch;