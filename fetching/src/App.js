import { useState, useEffect } from 'react';
import { getPosts } from "./api";
import './App.css';
import Products from "./components/Products";
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        {data ? data.map((e, idx) => (<Products key={idx} title={e.title} body={e.body}/> )): <p>No Data</p>
        } </div>
          </div> 
          );
}
export default App;
