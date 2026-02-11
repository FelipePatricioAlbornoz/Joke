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
        <div
        style={{
            display: 'grid',
            placeItems: 'center',
            height: '100vh',
            gridTemplateRows: '170px 150px 150px 50px auto'
            }}>
            <div>
            <h1>Piada</h1>
            </div>
            <div>
            <p>{joke}</p>
            </div>
            <button onClick={() => PegarPiada()}>Nova Piada</button>
            <div>
            </div>
            <div>
            <button onClick={() => navigate('/')}>Voltar</button>
            </div>
        </div>
    );
};