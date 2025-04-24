import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Card = ({ title }) => {
    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect( () => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);

    useEffect(() => {
        console.log('CARD RENDERED');
    }, []);


    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            <h2>{title} <br /> {count || null}</h2>

            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? '🧡' : '🤍'}
            </button>
        </div>
    )

}

const App = () => {




    return (
        <div className="card-container">

            <Card title="Star Wars" rating={5} isCool={true} />
            <Card title="Interstellar"/>
            <Card title="Deadpool"/>
        </div>
    )
}



export default App
