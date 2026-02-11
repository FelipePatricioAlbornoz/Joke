import api from "../api/api.js";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelaPiadaNFSW() {
    const [joke, setJoke] = useState("");
    const [load, setLoad] =useState(false);
    const navigate = useNavigate()

    function PegarPiada() {
        api.get('Dark', {params: {
            type: "single"
        }})
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
            gridTemplateRows: '150px 120px 150px 300px auto'
            }}>
            <div>
            <h1>Piada +18</h1>
            </div>
            <div>
            <p>{joke}</p>
            </div>
            <button onClick={() => PegarPiada()} 
            style={{
                height: '70px',
                width: '200px'
        }}>Nova Piada</button>
            <button onClick={() => navigate('/')} >Voltar</button>
        </div>
    );
};