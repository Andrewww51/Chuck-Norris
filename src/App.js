
import './App.css';
import {useState, useEffect } from 'react'
import chuckPicture from './pictures/chuck-norris.jpg'
import saloonPicture from './pictures/saloon.jpg'
import logo from './pictures/logo.png'

function App() {

  const[category, setCategory] = useState([])
  const[randomJoke, setRandomJoke] = useState("")

  function clicker(event) {
    // console.log(event)
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
      <div className="categoryWrapper">
        {category.map((cat,i)=> (
                      <div key={i} className="buttons" onClick={(e)=> clicker(e.target.textContent)}>{cat}</div>
                  ))}  
      </div>

      <div className="mainWrapper">
        <div id="left-picture">
          {/* <img className="pictures" src={chuckPicture} alt="chucknorris"/> */}
          </div>

        <div className="jokeWrapper">
          <div id="logoWrapper"><img id="logo" src={logo} alt="saloon"/></div>
          <div>
            <div id="joke">{randomJoke.value}</div>
          </div>
        </div>

        <div id="right-picture">
          {/* <img className="pictures" src={saloonPicture} alt="saloon"/> */}
          </div>
      </div>
    </div>
  );
}

export default App;
