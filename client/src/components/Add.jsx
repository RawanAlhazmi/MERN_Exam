import React, {useState} from 'react';
import axios from 'axios'
import './style.css';
import { navigate,Link } from '@reach/router';


const Add = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [phrase, setPhrase] = useState("");
  const [treasures, setTreasures] = useState(0);
  const [leg, setLeg] = useState(true);
  const [eye, setEye] = useState(true);
  const [hand, setHand] = useState(true);
  const [errors, setErrors] = useState([]);
  const [c_err, setC_err] = useState("");
  
  const Add = e => {
    e.preventDefault();
    var position = document.getElementById("position").value;
    // console.log(name,img,position,phrase,treasures,leg,eye,hand,)
    if(position == "Captain"){
      setC_err("Sorry, there can't be more than one captain")
      alert("Sorry, there can't be more than one captain")
    }else{
      axios
        .post("http://localhost:8000/api" , {name,
        img,
        position,
        phrase,
        treasures,
        leg,
        eye,
        hand})
        .then((res) => {
          console.log(res)
          navigate("/")
        })
        .catch(  err => {
          console.log("Here",err)
          const errorResponse = err.response.data.errors; 
          const errorArr = []; 
          for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message);
          }
          setErrors(errorArr);
        });
    }    
};

  return (
    <div>
    <br></br>
    <Link to="/">Crew Board</Link> 

    <div id ="main">
    <h1>Add Page</h1>
    </div>

    <div id="pirate">
    <form onSubmit={Add}>
      <p>Pirate Name:</p><input type="text" name="name" onChange={(e) => setName(e.target.value)}></input>
      <p>Image Url:</p><input type="text" name="img"onChange={(e) => setImg(e.target.value)}></input>
      <p># of Treasures Chests:</p><input type="number" name="treasures" onChange={(e) => setTreasures(e.target.value)}></input>
      <p>Pirate Catch Phrase:</p><input type="text" name="img" onChange={(e) => setPhrase(e.target.value)}></input>
      <p>Crew Position:</p>
      <p id="error">{c_err}</p>
      <select id="position">
        <option>Captain</option>
        <option>First Mate</option>
        <option>Quarter Master</option>
        <option>Boatswain</option>
        <option>Powder Monkey</option>
      </select>
      <p>
          <input
            type="checkbox"
            name="leg"
            checked={leg}
            onChange={(e) => {setLeg(e.target.checked)}}
          />
          Peg Leg
        </p>
        <p>
          <input
            type="checkbox"
            name="eye"
            checked={eye}
            onChange={(e) => setEye(e.target.checked)}
          />
          Eye Patch
        </p>
        <p>
          <input
            type="checkbox"
            name="hand"
            checked={hand}
            onChange={(e) => setHand(e.target.checked)}
          />
          Hook Hand
        </p>
        <p id="error">
            {errors.map((err, index) => (
              <p key={index}>*{err}</p>
            ))}
        </p>
        <button type="submit"> Add </button>
    </form>
    </div>
    </div>
  );
};

export default Add;