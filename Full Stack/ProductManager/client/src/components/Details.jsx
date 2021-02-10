import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, navigate } from '@reach/router';

const Details = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>


            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
    
        </div>


    )
}

export default Details


