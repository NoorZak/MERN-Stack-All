import React from 'react'
import axios from 'axios';






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
        <div>
    <form onSubmit={createProduct}  >

     <p>   
        <label htmlFor="title">Title</label>
        <input type="text" name = "title" id ="title"/>
    </p>

    <p>   
        
        <label htmlFor="price">Price</label>
        <input type="number" name = "price" id ="price"/>
    </p>
  
    <p>   
    
        <label htmlFor="desc">Description</label>
        <input type="text" name = "desc" id ="desc"/>
    </p>
  
    <p>   
        <button>Create</button>
    </p>

    </form>    
        </div>
    );
}

export default Form;
