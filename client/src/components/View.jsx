import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';

import './view_style.css'


const View = (props) => {
    const [pirate, setPirate] = useState([]);
    const id = props.id;
    const img = {
        width: "200px",
        float: "none"
    }
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/${id}`)
            .then((res) => {
                // console.log("res",res.data);
                setPirate(res.data);
            })
            .catch((err) => console.log(err));
    });

    const click = (catagory, check) => {
        console.log(check)
        console.log(catagory)
        console.log(pirate)
        if (catagory == "leg") {
            pirate.leg = check
        } else if (catagory == "eye") {
            pirate.eye = check
        } else if (catagory == "hand") {
            pirate.hand = check
        }
        axios
            .put(`http://localhost:8000/api/${id}`,
                {
                    name: pirate.name,
                    img: pirate.img,
                    position: pirate.position,
                    phrase: pirate.phrase,
                    treasures: pirate.treasures,
                    leg: pirate.leg,
                    eye: pirate.eye,
                    hand: pirate.hand
                })
            .then((res) => {
                console.log(res)
                // navigate("/")
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <>
            <br></br>
            <Link to="/">Crew Board</Link>
            <div id="main">
            <h1>{pirate.name}</h1>   
            </div>
            
            <div id="pirate">
            <div id="left">
                <img src={pirate.img} alt={pirate.name} style={img}></img>
                <h2>{pirate.phrase}</h2>
            </div>

            
            <div id="right">
                <h3>About</h3>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.treasures}</p>

                {pirate.leg == true ? <p>Peg Leg: Yes</p>
                    : <p>Peg Leg: No</p>
                }
                {pirate.leg == true ? <button type="submit" onClick={() => click("leg", false)}> No </button>
                    : <button type="submit" onClick={() => click("leg", true)}> Yes </button>
                }
                {pirate.eye == true ? <p>Eye Patch: Yes</p>
                    : <p>Eye Patch: No</p>
                }
                {pirate.eye == true ? <button type="submit" onClick={() => click("eye", false)}> No </button>
                    : <button type="submit" onClick={() => click("eye", true)}> Yes </button>
                }

                {pirate.hand == true ? <p>Hook Hand: Yes</p>
                    : <p>Hook Hand: No</p>
                }
                {pirate.hand == true ? <button type="submit" onClick={() => click("hand", false)}> No </button>
                    : <button type="submit" onClick={() => click("hand", true)}> Yes </button>
                }
            </div>
                
            </div>
        </>
    );
};

export default View;