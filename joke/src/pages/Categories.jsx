import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()

export default function Categories() {
    return(
        <div>
             <h1>oi</h1>
             <button onClick={navigate('/home')} ></button>
        </div>
    )
}