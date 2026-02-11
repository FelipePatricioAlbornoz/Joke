import apiNSFW from "../api/apiNSFW.js";
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelaPiadaNFSW() {
    const [joke, setJoke] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        api.get("Any").then((response) => setJoke(response.data.setup)).catch((err) => {console.error("ops! ocorreu um erro" + err);})
    }, []);

    return (
        <div>
            <h1>Piada</h1>
            <p>{joke}</p>
            <button onClick={() => navigate('/')} ></button>
        </div>
    );
};