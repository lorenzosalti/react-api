import { useEffect, useState } from "react"

import axios from "axios"

function App() {



  function getActresses() {
    axios.get('https://www.freetestapi.com/api/v1/actresses')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error))
  }


  useEffect(() => getActresses(), [])


  return (
    <>
      <h1>Lista Hollywood</h1>
    </>
  )
}

export default App
