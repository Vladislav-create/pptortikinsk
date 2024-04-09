import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'

export function TestSetComp () {
    const [count, setCount] = useState(100);
    const [films, setFilms] = useState(['Film1']);

    const addFilm = () => {
        const film = 'new film'

        setFilms([...films, film])
    }

    useEffect(()=>{
            console.log('Hello');
    },[count])

    return (
        <div>
            <h1>FunctionComponent</h1>

            <div>
                <h1>
                    Count: <span>{count}</span>
                </h1>

                <button onClick={() => setCount(count+1)}>increment</button>
                <button onClick={() => setCount(count-1)}>decrement</button>
            </div>

            <h1>Films</h1>
                <button onClick={addFilm}>Add film</button>
            <div>
                {films.map((film) => (
                    <div key={nanoid()}>
                        <p>{film}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}