import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate()

    return(
        <div>
             <h1>Seu site de piadas preferido!!!</h1>

             <button onClick={() => navigate('/categories')} ></button>
             <button onClick={() => navigate('/piadasAleatorias')} ></button>
             <button onClick={() => navigate('/piadasNFSW')} ></button>
        </div>
    )
}