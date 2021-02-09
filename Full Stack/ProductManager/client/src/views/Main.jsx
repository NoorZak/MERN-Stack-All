import React, { useEffect, useState } from 'react'
import Form from '../components/Form';
import ProdList from '../components/ProdList';
import axios from 'axios';
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
    return (
        <div>
           <Form/>
           <hr/>
           {loaded && <ProdList products={products}/>}
        </div>
    )
}