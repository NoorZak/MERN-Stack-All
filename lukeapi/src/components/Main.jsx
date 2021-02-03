import React, { useState } from 'react';
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';


const Main = (props) => {
    
    const [SearchFor, setSearchFor] = useState("people"); 
    const [id, setid] = useState("");

    const searchHandler = (e) => {
        setSearchFor(e.target.value);
    }

    const idHandler = (e) => {
        setid(e.target.value);
    }


    return(
        <div>
                <div>
                    <label>Search for: </label>
                    <select value={SearchFor} onChange={searchHandler}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    <input type="text" value={id} onChange={idHandler} />
                </div>
               
                <Link to ={`/${SearchFor}/${id}`}>Search</Link>
        </div>
    )
}

export default Main;