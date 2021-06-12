import React, {useEffect,useState} from 'react';
import axios from 'axios'
import { navigate } from '@reach/router';
import './style.css'


const List = () => {
  const [pirates, setPirates] = useState([]);
  const img={
    width: "70px",
    float: "left"
  }
  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => {
        console.log(res.data.pirates);
        setPirates(res.data.pirates);
      })
      .catch((err) => console.log(err));
  });

  const deleteFunc = (id) => {
      axios
        .delete(`http://localhost:8000/api/${id}`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err));
    }


  return (
    <div id="main">
      <h1>Pirates Crew</h1>
      <button id="view" onClick={() => navigate(`/add`)}>Add Pirate</button>
      {/* <Link to="/add">Add An Author</Link>  */}
            <>     
      {pirates.map((pirates, i) => {
          return ( 
            <div id="pirates" key={i}>
              <img src={pirates.img} alt={pirates.name} style={img}></img>
              <p id="name">{pirates.name}</p>
              <div id="button">
                <button id="view" 
                onClick={() => navigate(`/view/${pirates._id}`)}
                >View Pirate</button>
                <button id="walk" 
                onClick={() => deleteFunc(pirates._id)}
                >Walk the Plank</button>
              </div>
            </div>
          );
          })}
            </>
    </div>
  );
};

export default List;