import { useState, useEffect } from 'react'
import { getPosts } from "./api";
import './App.css';
import Products from "./components/Products";
import Recipies from "./components/Recipies";

function App(){
  const [data, setData] = useState(null);
useEffect(()=>{
getPosts().then(posts => setData(posts));
}, []);
  return (
    <div className= "App">
      {data ? data.map((e)=><Products />): <p>No Data</p>}
      {data ? data.map((e)=><Recipies />): <p>No Data</p>}
    </div>
  );
};


export default App;
