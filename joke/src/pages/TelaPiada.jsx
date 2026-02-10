import useFetch from "./useFetch";
import useEffect from 'react';

export default function TelaPiada() {
    const api = useFetch();

    useEffect(() => {
        const data = await api.get(Any);
        const joke = data.json();
    }, []);

    return (
        <div>
            <h1>Piada</h1>
            <p>{joke.joke}</p>
        </div>
    );
};