import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import api from '../api/api'

export default function Categories() {
    const [joke, setJoke] = useState("");
    const [category, setCategory] =useState("Any");
    const navigate = useNavigate()

    useEffect(() => {
        api.get(category)
        .then((response) => setJoke(response.data.joke))
        .catch((err) => {console.error("ops! ocorreu um erro" + err);})
    }, [category]);

    return(
        <div>
            <p>{joke}</p>
             <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Programming">Programação</option>
                <option value="Misc">Diversos</option>
                <option value="Dark">Sombrio</option>
                <option value="Pun">Trocadilhos</option>
                <option value="Spooky">Assustador</option>
                <option value="Christmas">Natal</option>
            </select>
             <button onClick={() => navigate('/')} >Voltar</button>
        </div>
    )
}