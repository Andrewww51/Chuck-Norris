
import './App.css';
import {useState, useEffect } from 'react'
import chuckPicture from './pictures/chuck-norris.jpg'
import saloonPicture from './pictures/saloon.jpg'
import logo from './pictures/logo.png'
import Categories from './categories/Categories';

function App() {

  const[category, setCategory] = useState([])
  const[randomJoke, setRandomJoke] = useState("")



  async function fetchCategory() {
    const categoryUrl = "https://api.chucknorris.io/jokes/categories";

    const responseJSON = await fetch(categoryUrl)
        .then(response => response.json())

        await setCategory(responseJSON)
  }



  useEffect(()=> {
    fetchCategory();
  }, []);

  return (
    <div className="App">
      <Categories category={category} setJoke={setRandomJoke}/>

      <div className="mainWrapper">
        <div id="left-picture">
          </div>

        <div className="jokeWrapper">
          <div id="logoWrapper"><img id="logo" src={logo} alt="saloon"/></div>
          <div>
            <div id="joke">{randomJoke.value}</div>
          </div>
        </div>

        <div id="right-picture">
          </div>
      </div>
    </div>
  );
}

export default App;
