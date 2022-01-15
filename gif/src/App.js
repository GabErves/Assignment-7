import React, {useEffect, useState} from 'react';
//import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import GifCard from './components/GifCard';
import SearchField from './components/SearchField';

//console.log(process.env.REACT_APP_ASSIGNMENT_6_API_KEY) //gets api using the api key given to us
function App() {

  let apikey = "4M5bJT8StuiI6Ut3Nz8PZgaRIcwNQP44";

  const posts = [
    { id: '1', name: 'Funny Gifs' },
    { id: '2', name: 'New Gifs' },
    { id: '3', name: 'Cat Gifs' },
    { id: '4', name: 'Reaction Gifs' },
];

const { search } = window.location;
const query = new URLSearchParams(search).get('s');
//const filteredPosts = filterPosts(posts, query);

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }
  
  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};
const filteredPosts = filterPosts(posts, query);
  const [data, setData] = useState([])

  const getData = async () =>{
    await axios.get("https://api.giphy.com/v1/gifs/trending?api_key=4M5bJT8StuiI6Ut3Nz8PZgaRIcwNQP44")
    .then(res=>{
      setData(res.data.data)
      console.log(res.data)
    })
  }





  useEffect(() => {
    getData()


  }, [data]) // continous listen for api, no data, would only run once




  
  return(
    
    
    <div className = "App">
      <header className='app-header'>{process.env.REACT_APP_ASSIGNMENT_6_API_KEY} </header>
      <h1>Welcome to gif search, type in any search key word to see a gif pop up!</h1>
      
      
      <SearchField/>
      <h3>possible search terms</h3>
      
      <div>
        <GifCard datafromparent = {data}/>

                {filteredPosts.map((post) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </div>
      
      
    </div>
  );

  
}



export default App;
