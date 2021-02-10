import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import ProdList from '../components/ProdList';
import axios from 'axios';

import { Paper } from '@material-ui/core';
   
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])



    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }


    return (
        <Paper elevation={3}>
        <Form/>
           <hr/>
           {loaded && <ProdList products={products} removeFromDom={removeFromDom}/>}
           </Paper>    )
}

