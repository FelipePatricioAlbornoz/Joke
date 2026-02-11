import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate()

    return(
        <div>
             <h1>Seu site de piadas preferido!!!</h1>
             <div>
                 <h3>Selecione seu tipo de Piada Preferido e se divirta!</h3>
             <button onClick={() => navigate('/categories')} >Categorias</button>
             </div>
             <div>
                <h3>Piadas de qualquer tipo para Você</h3>
             <button onClick={() => navigate('/piadasAleatorias')} >Piadas Aleatórias</button>
             </div>
             <div>
                 <h3>Apenas Piadas pra Maiores</h3>
             <button onClick={() => navigate('/piadaNFSW')} >Piadas +18</button>
            </div>
        </div>
    )
}