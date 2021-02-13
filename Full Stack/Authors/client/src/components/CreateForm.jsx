 
import React, {useState} from 'react';

import { Router, Link, navigate } from '@reach/router';
const CreateForm = props => {
    const {handleSubmit, initialName, headerText, errors} = props;
    const [name, setName] = useState(initialName);
    
    return (
        <div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <h3>{headerText}</h3>
            <form onSubmit={handleSubmit}>
        
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        id="name"
                        aria-describedby="helper-text"
                    />
                    <label id="helper-text">Minimum of 3 characters</label>
            
                    </div>
                <div >
                    <button type="submit">Submit</button>
                    <Link to="/">Cancel</Link>
                </div>
            </form>
        </div>
    )
}
export default CreateForm;