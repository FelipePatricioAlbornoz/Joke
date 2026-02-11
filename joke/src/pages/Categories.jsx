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
        <div
        style={{
            display: 'grid',
            placeItems: 'center',
            height: '100vh',
            gridTemplateRows: '170px 150px 150px  auto',
            gridTemplateColumns: '4fr 1fr' 
            }}> 
            <div>
            <h2>Escolha um tipo de Piada da sua Escolha</h2>
            </div>
            <div style={{marginLeft: '-650px',}}>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Any">Todas</option>
                <option value="Programming">Programação</option>
                <option value="Misc">Diversos</option>
                <option value="Pun">Trocadilhos</option>
            </select>
            </div>
            <div>
            <p style={{marginRight: '300px', marginLeft: '300px'}}>{joke}</p>
            </div>
            <button onClick={() => PegarPiada()} style={{marginLeft: '-650px',}}>Nova Piada </button>
            <button onClick={() => navigate('/')} style={{marginLeft: '260px', marginTop: '400px'}}>Voltar</button>
        </div>
    )
}