import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/Routes.js';

export default function Home() {

    const navigate = useNavigate()

    return(
        <div
        style={{
            display: 'grid',
            placeItems: 'center',
            height: '100vh',
            gridTemplateRows: '170px 150px 150px 150px auto'
            }}>
             <h1>Seu site de piadas preferido!!!</h1>
             <div style={{textAlign: 'center'}}>
                 <h3>Selecione seu tipo de Piada Preferido e se divirta!</h3>
             <button onClick={() => navigate(ROUTES.CATEGORIES)} >Categorias</button>
             </div>
             <div style={{textAlign: 'center'}}>
                <h3>Piadas de qualquer tipo para Você</h3>
             <button onClick={() => navigate(ROUTES.RANDOM)} >Piadas Aleatorias</button>
             </div>
             <div style={{textAlign: 'center'}}>
                 <h3>Apenas Piadas pra Maiores</h3>
                 <button onClick={() => navigate(ROUTES.NSFW)}>Piadas +18</button>
             </div>
        </div>
    )
}