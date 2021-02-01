import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';
 
const BoxForm = (props) => {
const [color , setColor]=useState("");




const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewColor( color );

};



return (

    <form onSubmit={ handleSubmit }>
        <h1>Set Color</h1>
        <textarea 
            rows="4"
            cols="50"
            placeholder="Enter your color here"
            onChange={ (e) => setColor(e.target.value) }
            value={ color }
        >


        </textarea>
        <Button as="input" type="submit" value="Add" />{' '}
  
    </form>
);






}


export default BoxForm;