import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Post } from './models/post';               //import posts from the models folder
import DataTable from './components/DataTable';     //import the data table from components folder


function App() {

  //this holds the base url and the list of posts
  const [posts, setPosts] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon/';


  async function fetchPosts() {
    // fetch API
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    //want the results array from the data
    const results = data.results;

    console.log(results);

    let postData = await results.map((post) => {
      return post.name;
    });

    //now should have an array of names in the post data
    console.log(`the post data: ${postData}`);

    for (let i = 0; i < postData.length; i++){
      const url = 'https://pokeapi.co/api/v2/pokemon/' + postData[i];
      getPokeStats(postData[i], url);
    }
  }


  //once you get the name and specific url, pull character data from there
  async function getPokeStats(pokeName, url){
    // fetch API
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    let newPost = new Post(pokeName, data.base_experience, data.weight, data.height);
    setPosts(posts => [...posts, newPost]);
  }

  return (
    <div className='text-center'>
      <div>
        <h1 className='m-3'>Find Pokemon Data!</h1>
        <div>
            <h4 className='m-4'>Click below to see all data</h4>
            <button className='btn btn-dark' onClick={fetchPosts}>Fetch all data!</button>
        </div>
      </div>
      <DataTable posts={posts}></DataTable>
    </div>
  );
}

export default App;
