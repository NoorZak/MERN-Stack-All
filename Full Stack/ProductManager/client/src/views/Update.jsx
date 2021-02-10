import React, {useState,useEffect} from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { navigate } from '@reach/router';
const Update = (props) => {


    const {id} =props;
    const [title , setTitle]= useState('');
    const [price, setPrice] = useState('');
    const[desc,setDesc]= useState('');


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
    
            })
    }, [])


    const updateProduct = e =>{

    e.preventDefault();
    axios.put('http://localhost:8000/api/products/'+id,
    {
        title,
        price,
        desc

    }
    ).then(res => console.log(res));
    navigate('/products/'+id)
        }
    
    
    



    



    return (
  <div className="row justify-content-center" >
        <form  onSubmit={updateProduct}  >

            <div className="form-group"> 
                {/* <label htmlFor="title">Title</label> */}
                <input type="text" name = "title"  value ={title} onChange ={(e) =>{setTitle(e.target.value)}    } />
            
            </div>
        
            <div className="form-group"> 
                
                {/* <label htmlFor="price">Price</label> */}
                <input type="number" name = "price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            </div>
        
            <div className="form-group">   
            
                {/* <label htmlFor="desc">Description</label> */}
            
                <input type="text" name = "desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
            </div>
        
            <div className="form-group"> 
                <button className="btn btn-primary">Update</button>
            </div>

        </form> 


    </div>
    )
}

export default Update;
