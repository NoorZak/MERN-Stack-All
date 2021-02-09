import React from 'react'

import { Router, Link, navigate } from '@reach/router';
const ProdList = props => {
    return (
        <div>
                {
                    props.products.map((prod,idx)=>
                    {
                    return<p><Link key={idx} to ={`/products/${prod._id}`}>{prod.title}</Link></p>
                                    
                    })}

                

        </div>
    )
}

export default ProdList

