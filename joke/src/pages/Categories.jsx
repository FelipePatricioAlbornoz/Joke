import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import api from '../api/api'

export default function Categories() {
    const [joke, setJoke] = useState("");
    const [category, setCategory] =useState("Any");
    const navigate = useNavigate()

    function PegarPiada() {
            api.get(`/${category}`, {
                params: {
                    blacklistFlags: "nsfw,religious,political,racist,sexist,explicit",
                    type: "single"
                }
            })
            .then((response) => {
                setJoke(response.data.joke);
            })
            .catch((err) => console.error(err));     
    }

    useEffect(() => {
        PegarPiada();
    }, [category]);

    return(
        <div>
            <p>{joke}</p>
             <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Any">Todas</option>
                <option value="Programming">Programação</option>
                <option value="Misc">Diversos</option>
                <option value="Pun">Trocadilhos</option>
            </select>
             <button onClick={() => navigate('/')} >Voltar</button>
             <button onClick={() => PegarPiada()}>Nova Piada</button>
        </div>
    )
}