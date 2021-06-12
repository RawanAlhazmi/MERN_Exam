import React, { useState } from 'react';
import axios from 'axios'
import './style.css';
import { navigate, Link } from '@reach/router';


const List = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [author, setAuthor] = useState([]);
    const autuor_id = props.id

        axios
            .get(`http://localhost:8000/api/${autuor_id}`)
            .then((res) => {
                console.log(res.data._id)
                setAuthor(res.data.name)
            })
            .catch(err => {
                console.log("Not Equal")
                if(window.confirm(`We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?`)){
                        navigate("/add")
                    }else{
                        navigate("/")
                    }
            });

            
    const click = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/${autuor_id}`, { name })
            .then((res) => {
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    const cancel = e => {
        navigate("/")
    };

    return (
        <div id="div">
            <br></br>
            <Link to="/">Back To Home</Link>
            <br></br><br></br>
       Edit An Author:
            <form onSubmit={click}>
                <p>
                    Name: <input type="text" name="name" value={author} onChange={e => { setName(e.target.value) }} />
                </p>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
        <button type="submit">Edit</button>
        <button type="submit" onClick={cancel}>Cancel</button>
            </form>
        {/*  <button onClick={navigate("/")}>Cancel</button>*/}
        </div>
    );
};

export default List;