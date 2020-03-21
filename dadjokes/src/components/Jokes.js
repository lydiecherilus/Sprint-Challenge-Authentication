import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import '../App.css';

const JokesCard = props => {
    console.log(props)
    return (
        <div className="jokescard">
            <h3>id: {props.joke.id}</h3>
            <h3>joke: {props.joke.joke}</h3>
        </div>
    )
}

const Jokes = function () {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/api/jokes')
            .then(response => {
                console.log(response.data);
                setJokes(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className="jokes">
            {jokes.map((joke, key) => {
                return (
                    <JokesCard
                        joke={joke}
                        key={key} />
                );
            })};
        </div>
    )
}
export default Jokes;