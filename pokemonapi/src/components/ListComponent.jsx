import React,{useState,useEffect} from 'react'

const ListComponent = () => {
    
    const [people,setPeople]=useState([]);
    const [state,setState]= useState(false)

    const onClickHandler = ()=>{ 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.json())
    .then(response=>setPeople(response.results))
        
    };

    // const changeState = ()=>{
    // setState(!state)

    // } 


    return (
        <div>
            
            <input type="submit" value="Fetch" onClick={onClickHandler}/>
            {
                
            people.length>0 && people.map((person,index)=>
            
             (<div key={index}>{person.name}</div>)
        
            
            
            )
            
            } 
           
             </div>
    )
}

export default ListComponent
