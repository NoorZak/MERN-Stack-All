import React, {useState} from 'react';

const PlayerForm = props => {
    const {handleSubmit, errors} = props;
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        id="name"
          
                    />
                    <label id="name-helper">Must be at least 2 characters</label>
                </div>
                <br/>
                <div>
                    <label htmlFor="preferredPosition">Preferred Position</label>
                    <input
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        type="text"
                        id="preferredPosition"
                    />
                </div>
                <br/>
                <button
                    type="submit"
                >Add</button>
            </form>
            {
                errors.map(error =>{
                    return (
                        <p >{error}</p>
                    );
                })
            }
        </div>
    );
}

export default PlayerForm;