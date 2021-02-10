import React from 'react'
import axios from 'axios';

import { Router, Link, navigate } from '@reach/router';
const ProdList = props => {
    
    
    
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId);
                navigate("/products/");           
            })
    }
    return (
        <div>
            <h1>All Products</h1>
                {
                    props.products.map((prod,idx)=>
                    {
                    return<p>
                            <Link key={idx} to ={`/products/${prod._id}`}>{prod.title}</Link>|
                            <button onClick={(e)=>{deleteProduct(prod._id)}}>
                            Delete
                            </button>
                    
                        </p>
                                    
                    })}

                

        </div>
    )
}

export default ProdList

