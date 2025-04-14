import { useEffect, useState } from "react"

import axios from "axios"

function App() {

  const [actresses, setActresses] = useState([])



  function getActresses() {
    axios.get('https://www.freetestapi.com/api/v1/actresses')
      .then(response => {
        console.log(response.data);
        setActresses(response.data)
      })
      .catch(error => console.log(error))
  }


  useEffect(() => getActresses(), [])


  return (
    <>
      <h1>Lista Hollywood</h1>

      <hr />

      <ul>
        {actresses.map(actress => <li>
          <h3>{actress.name}</h3>
          <img src={actress.image} alt={actress.name} />
          <p>Born in {actress.birth_year}</p>
          <p>{actress.nationality}</p>
          <p>{actress.biography}</p>
          <p>{actress.awards}</p>
        </li>)}
      </ul>
    </>
  )
}

export default App
