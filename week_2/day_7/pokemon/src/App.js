import './App.css';
import { useState } from 'react';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import the Post class from models
import { Post } from './models/post';

//import the input area from the components folder
import DataTable from './components/DataTable';


function App() {

  const [posts, setPosts] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon/';


  //STUB: i kind of know whats going on but not really
  async function fetchPosts() {
    // fetch API
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);

    //data comes in an array, and the results array is what we're looking for

    let postData = data.results.map((post) => {
      return new Post(post.name, post.baseExp, post.weight, post.height);
    });
    console.log(postData);
    console.log(`post data has a length of ${postData.length}`);

    setPosts(postData);
  }


  /*this is random, but im trying it to see if I can understand this
  //STUB: still not entirely sure what is going on in this function
  async function fetchOnePost(pokemon) {
    // fetch API
    const res = await fetch(url + pokemon, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    // console.log(data);
    let postData = data.map((post) => {
      return new Post(post.name, post.baseExp, post.weight, post.type);
    });
    // console.log(postData);

    setPosts(postData);
  }
  */


  return (
    <div className='text-center'>
      <div>
        <h1 className='m-3'>Find Pokemon Data!</h1>
        <div>
            <h4>Quick links:</h4>
            
        </div>
        <div>
            <h4 className='m-4'>...or see all data</h4>
            <button className='btn btn-dark' onClick={fetchPosts}>Fetch all data!</button>
        </div>
      </div>
      <DataTable posts={posts}></DataTable>
    </div>
  );
}

export default App;
