import React, {useEffect, useState} from 'react';
//import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//import GifCard from './components/GifCard';
import SearchField from './SearchField';

console.log(process.env.REACT_APP_ASSIGNMENT_6_API_KEY) //gets api using the api key given to us
function App() {

  let apikey = "4M5bJT8StuiI6Ut3Nz8PZgaRIcwNQP44";
  
  const [data, setData] = useState([])

  const getData = async () =>{
    await axios.get()
    .then(res=>{
      setData(res.data)
    })
  }





  useEffect(() => {


  }, [])

  return(
    
    
    <div className = "App">
      <header className='app-header'>{process.env.REACT_APP_ASSIGNMENT_6_API_KEY} </header>
      <h1>Welcome to gif search, type in any search key word to see a gif pop up!</h1>
      
      <SearchField/>
      
      
    </div>
  );

  
}



export default App;
