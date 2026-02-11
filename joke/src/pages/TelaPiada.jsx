import api from "../api/api.js";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelaPiada() {
    const [joke, setJoke] = useState("");
    const [load, setLoad] =useState(false);
    const navigate = useNavigate()

    function PegarPiada() {
        api.get('Any', {
            params: {
                blacklistFlags: "nsfw,religious,political,racist,sexist,explicit",
                type: "single"
            }
        })
        .then((response) => setJoke(response.data.joke))
        .catch((err) => {console.error("ops! ocorreu um erro" + err);});
    }

    useEffect(() => {
        if (load) return;

        setLoad(true);

        PegarPiada();
    }, [load]);

    return (
        <div>
            <h1>Piada</h1>
            <p>{joke}</p>
            <button onClick={() => navigate('/')}>Voltar</button>
            <button onClick={() => PegarPiada()}>Nova Piada</button>
        </div>
    );
};