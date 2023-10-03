import React, {useState, useEffect} from 'react';

const BuscadorComponent = () => {
//asignar los hooks
 const [user, setuser ] = useState([])
 const [buscador, setBuscador ] = useState("")

//Traer los datos de la api 
const URL = 'https://api-colombia.com/api/v1/NativeCommunity'

const showDato = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
}

showDato()

  return (
    <div>BuscadorComponent</div>
  )
}

export default BuscadorComponent