import api from "../api/api.js";
import {useEffect, useState} from 'react';

export default function TelaPiada() {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        api.get("Any").then((response) => console.log(response.data.setup)).catch((err) => {console.error("ops! ocorreu um erro" + err);})
        while (setJoke === undefined){
            api.get("Any").then((response) => setJoke(response.data.setup)).catch((err) => {console.error("ops! ocorreu um erro" + err);})
            console.log("Tentando fazer a requisição da api");
            }
    }, []);

    return (
        <div>
            <h1>Piada</h1>
            <p>{joke}</p>
        </div>
    );
};