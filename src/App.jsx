import { useEffect, useState } from "react"

import axios from "axios"

import Card from "./components/Card"

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
        {actresses.map(actress => <Card person={actress} key={actress.id} />)}
      </ul >

    </>
  )
}

export default App
