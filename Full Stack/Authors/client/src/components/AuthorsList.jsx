
  
//Dependency imports
import React from 'react';

import {Link } from '@reach/router';
const AuthorsList = props => {
    const {authors, deleteHandler} = props;

    return (
        <div >
            <h3>We have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index) => {
                            return (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`/edit/${author._id}`}>Edit</Link>
                                        <button onClick={() => deleteHandler(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorsList;