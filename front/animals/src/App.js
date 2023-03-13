import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './components/Card';


function App() {
  const [animals, setAnimals] = useState([]);

  useEffect( ()=>{
    axios.get("http://localhost:3003/animals/") 
    .then(response=>{
        setAnimals(response.data)
    })
    .catch(error=>console.log(error))
} )
  return (
    <div className="App">
     {animals.map(animal =>(
      <Card
      key = {animals.id}
      animal={animal}
       />
     ))}
    </div>
  );
}

export default App;
