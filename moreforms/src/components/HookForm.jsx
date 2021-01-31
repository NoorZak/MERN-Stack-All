import React, {useState} from 'react';

const HookForm = props => {
    const {inputs, setInputs} = props;
    const [valid, setValid] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        passConfirmation: false
    });
    
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        



        if(e.target.name === "password"){
            if(e.target.value.length >= 8){
                setValid({
                    ...valid,
                    [e.target.name]: true
                });
            } else{
                setValid({
                    ...valid,
                    [e.target.name]: false
                });
            }

        }
        
        
        
        
        else if(e.target.name === "passConfirmation"){
            if(e.target.value === inputs.password){
                setValid({
                    ...valid,
                    [e.target.name]: true
                });
            } else{
                setValid({
                    ...valid,
                    [e.target.name]: false
                });
            }
        }
        
        
        if(e.target.name === "email"){
            if(e.target.value.length >= 5){
                setValid({
                    ...valid,
                    [e.target.name]: true
                });
            } else{
                setValid({
                    ...valid,
                    [e.target.name]: false
                });
            }
        }
        if(e.target.name === "firstName"){
            if(e.target.value.length >= 2){
                setValid({
                    ...valid,
                    [e.target.name]: true
                });
            } else{
                setValid({
                    ...valid,
                    [e.target.name]: false
                });
            }
        }
        


        if(e.target.name === "lastName"){
            if(e.target.value.length >= 2){
                setValid({
                    ...valid,
                    [e.target.name]: true
                });
            } else{
                setValid({
                    ...valid,
                    [e.target.name]: false
                });
            }
        }
        
    }
    const createUser = e =>{
        e.preventDefault();
        console.log("User created!");
    }

    return (
        <>
            <form onSubmit={createUser} >
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="firstName">First Name:</label></td>
                            <td>
                                <input type="text" name="firstName" id="firstName" onChange={onChange}/>
                            </td>
                        </tr>
                        {
                        inputs.firstName.length > 0 ?
                        <tr>
                            <td></td>
                            {
                                valid.firstName ?
                                <td ></td> :
                                <td >First Name must be at least 2 characters</td>
                            }
                        </tr> :
                        ''
                        }
                        <tr>
                            <td><label htmlFor="lastName">Last Name:</label></td>
                            <td><input type="text" name="lastName" id="lastName" onChange={onChange}/></td>
                        </tr>
                        {
                        inputs.lastName.length > 0 ?
                        <tr>
                            <td></td>
                            {
                                valid.lastName ?
                                <td ></td> :
                                <td >Last Name must be at least 2 characters</td>
                            }
                        </tr> :
                        ''
                        }
                        <tr>
                            <td><label htmlFor="email">Email Address:</label></td>
                            <td><input type="email" name="email" id="email" onChange={onChange}/></td>
                        </tr>
                        {
                        inputs.email.length > 0 ?
                        <tr>
                            <td></td>
                            {
                                valid.email ?
                                <td ></td> :
                                <td >Email Address must be at least 5 characters</td>
                            }
                        </tr> :
                        ''
                        }
                        <tr>
                            <td><label htmlFor="password">Password:</label></td>
                            <td><input type="password" name="password" id="password" onChange={onChange}/></td>
                        </tr>
                        {
                        inputs.password.length > 0 ?
                        <tr>
                            <td></td>
                            {
                                valid.password ?
                                <td ></td> :
                                <td >Password must be at least 8 characters</td>
                            }
                        </tr> :
                        ''
                        }
                        <tr>
                            <td><label htmlFor="passConfirmation">Confirm Password:</label></td>
                            <td><input type="password" name="passConfirmation" id="passConfirmation" onChange={onChange}/></td>
                        </tr>
                        {
                        inputs.passConfirmation.length > 0 ?
                        <tr>
                            <td></td>
                            {
                                valid.passConfirmation ?
                                <td ></td> :
                                <td >Passwords must match</td>
                            }
                        </tr> :
                        ''
                        }
                    </tbody>
                </table>
                
                <button>Submit</button>
            </form>
            <br/>
            
        </>
    );
}
export default HookForm;