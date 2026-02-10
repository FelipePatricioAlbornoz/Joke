import useFetch from "../api/useFetch";
import {useEffect, useState} from 'react';

export default function TelaPiada() {
    const [joke, setJoke] = useState("");
    const [api, apiNSFW] = useFetch();

    useEffect(() => {
        apiNSFW.get().then((response) => setJoke(response.joke)).catch((err) => {console.error("ops! ocorreu um erro" + err);})
    }, []);

    return (
        <div>
            <h1>Piada NSFW</h1>
            <p>{joke}</p>
        </div>
    );
};