import { useNavigate } from 'react-router-dom';

export default function Categories() {

    const navigate = useNavigate()

    return(
        <div>
             <h1>oi</h1>
             <button onClick={() => navigate('/categories')} ></button>
        </div>
    )
}