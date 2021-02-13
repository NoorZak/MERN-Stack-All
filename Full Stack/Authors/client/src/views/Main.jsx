
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Router, navigate,Link} from '@reach/router';

//Component imports
import AuthorList from "../components/AuthorsList.jsx";
import CreateForm from "../components/CreateForm.jsx";
import EditForm from "../components/EditForm.jsx";

const Main = props => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((response) => {
                setAuthors(response.data);
            })
            .catch(error => console.log("There was an error:", error));
    }, [updated]);

    const handleCreate = event => {
        event.preventDefault();
        const author = {name: event.target.name.value};
        axios.post("http://localhost:8000/api/authors/new", author)
            .then(res => {
                setAuthors([...authors, res.data]);
                navigate("/");
            }).catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key in errorResponse){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors([errorArr]);
            });
    }

    const handleUpdate = (id, author) => {
        axios.put("http://localhost:8000/api/authors/" + id, {name: author})
            .then(res => {
                setUpdated(!updated);
                navigate("/");
            }).catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key in errorResponse){
                    errorArr.push(errorResponse[key].message);
                }
                setErrors([errorArr]);
            });
    }

    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then(setAuthors(authors.filter(author => author._id !== id)))
            .catch(err => console.log(err));
    }
    
    return(
        <div >
            <div >
                <Link
                    color="primary"
                    to="/"
                >Home</Link>
                <Link
                
                to="/new"
                >Add an author</Link>
            </div>
            <Router>
                <AuthorList 
                    default 
                    authors = {authors}
                    deleteHandler = {handleDelete}
                />
                <CreateForm 
                    path="/new"
                    handleSubmit={handleCreate}
                    initialName = ""
                    headerText = "Add a new author:"
                    errors={errors}
                />
                <EditForm path="/edit/:id" errors={errors} handleUpdate={handleUpdate}/>
            </Router>
        </div>
    );
}

export default Main;