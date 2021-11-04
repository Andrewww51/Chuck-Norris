import './Categories.css'

function Categories(props) {

    function clicker(event) {
        fetchRandomJoke();
      }

    async function fetchRandomJoke() {
        const randomJokeUrl = `https://api.chucknorris.io/jokes/random?category=${props.category}`;
    
        const responseJSON = await fetch(randomJokeUrl)
            .then(response => response.json())
    
            await props.setJoke(responseJSON)
    }

    return(
        <div className="categoryWrapper">
        {props.category.map((cat,i)=> (
                      <div key={i} className="buttons" onClick={(e)=> clicker(e.target.textContent)}>{cat}</div>
                  ))}  
      </div>
    )
}

export default Categories