import axios from 'axios';
import { useState, useEffect } from 'react'
// import './App.css'


function App() {
  const apikey = "2688550ee208f34afd6b3212ea8336cf";
  const getCharacters = async () => {
    await axios.get("https://gateway.marvel.com:443/v1/public/characters?apikey=" + apikey).then((rest)=>{
      const {data} = rest.data;
      console.log(data,rest);
    });
  }
  useEffect(() => {
    getCharacters();
  }, [])

  return (
    <>
    prueba
    </>
  )
};

export default App;
