import React, {useState, useEffect} from 'react';
import axios from 'axios';


const People = ({id, SearchFor}) => {

    const [people, setPeople] = useState("");
    const [person, setperson] = useState({
        name: "",
        gender: "",
        height: "",
        eye_color: "",
        birth_year: ""
    });

    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
    
        .then(response => {
            setPeople(response.data)
        })

        .catch(err => {
                console.log(err);})
            }, []);

    


    return (
        <div >

            {/* <input type="submit" onClick={fetch} /> */}
            
            
             <h1 >{people.name} </h1>
             <ul>
                 <li>Height :{people.height}</li>
                 <li>Mass :{people.mass}</li>
                 <li>Hair Color :{people.hair_color}</li>
                 <li>Skin Color :{people.skin_color}</li>
             </ul> 
            

         </div>
    )
}

export default People;
