import React from 'react'
import {useState, useEffect} from 'react';


function BotCollection () {

    const [bots, setBots] = useState([]);
  
    
  useEffect (()=> {
    
    fetch('./db.json')
    .then(response => response.json())
    .then(data => {setBots(data.message)});
    console.log(bots)
  },[])

  return (
    <div>
        <p>Loading.....</p>
        {bots}
    </div>
  )
}

export default BotCollection