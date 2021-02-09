import React from 'react'
import axios from 'axios';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from '@material-ui/core';

import { FormControl } from '@material-ui/core';



const Form = () => {




    const createProduct = e =>{
        axios.post("http://localhost:8000/api/products/create", {
            title: e.target.title.value,
            price: e.target.price.value,
            desc: e.target.desc.value
        }, [])
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    
    

    return (
        <div className="row justify-content-center" >
    <form className="" onSubmit={createProduct}  >

    <div className="form-group"> 
        {/* <label htmlFor="title">Title</label> */}
        <input type="text" name = "title" id ="title" placeholder="title"/>
    
    </div>
 
      <div className="form-group"> 
        
        {/* <label htmlFor="price">Price</label> */}
        <input type="number" name = "price" id ="price" placeholder="price"/>
      </div>
  
    <div className="form-group">   
    
        {/* <label htmlFor="desc">Description</label> */}
       
        <input type="text" name = "desc" id ="desc" placeholder="description"/>
    </div>
  
    <div className="form-group"> 
        <button className="btn btn-primary">Create</button>
    </div>

    </form>    
        </div>
    );
}

export default Form;
