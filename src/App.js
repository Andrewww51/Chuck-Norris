
import './App.css';
import {useState, useEffect } from 'react'

function App() {

  const[category, setCategory] = useState([])
  const[randomJoke, setRandomJoke] = useState("")

  async function clicker(event) {
    console.log(event)
    fetchRandomJoke();
  }

  async function fetchCategory() {
    const categoryUrl = "https://api.chucknorris.io/jokes/categories";

    const responseJSON = await fetch(categoryUrl)
        .then(response => response.json())

        await setCategory(responseJSON)
  }

  async function fetchRandomJoke() {
    const randomJokeUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;

    const responseJSON = await fetch(randomJokeUrl)
        .then(response => response.json())

        await setRandomJoke(responseJSON)
  }

  useEffect(()=> {
    fetchCategory();
  }, []);

  return (
    <div className="App">
      <ul>
        {category.map((cat,i)=> (
                      <li key={i} onClick={(e)=> clicker(e.target.textContent)}>{cat}</li>
                  ))}  
      </ul>
      <div>{randomJoke.value}</div>
    </div>
  );
}

export default App;
