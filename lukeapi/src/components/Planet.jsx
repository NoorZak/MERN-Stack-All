import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Planet = ({id, SearchFor}) => {

    const [planet, setPlanet] = useState("");
    
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
    
        .then(response => {
            setPlanet(response.data);
            console.log(response.data);
        })

        .catch(err => {
                console.log(err);})
            }, []);

    


    return (

        <div >

            
            
             <h1 >{planet.name} </h1>
             <ul>
                 <li>Climate :{planet.climate}</li>
                 <li>Terran :{planet.terrain}</li>
                 <li>Surface Water :{planet.surface_water}</li>
                 <li>Population :{planet.population}</li>
             </ul> 
            

         </div>
    )
}

export default Planet;
