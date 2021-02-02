import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ListComponent = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetch = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => setPokemon(response.data.results))
    };
    
    return (
        <div >

            <input type="submit" onClick={fetch} />
                {

                    pokemon.map( (current, index) => {
                        return <div key={index}>{current.name} </div>
                    })
                }
         </div>
    )
}

export default ListComponent;