import { useState } from 'react'
import './App.css'

function App() {
  
//ETAT
const[count,setCount] = useState(0)
const[person,setPerson] = useState({
  firstName: 'Morgan',
  lastName: 'Bleunven',
  age: 48
})

//COMPORTEMENT
const increment = () =>{
  setCount(count+1);
}

const incrementAge = () =>{
  setPerson({...person, age:person.age+1})
}


//AFFICHAGE
  return (
    <>
      <p>COMPTEUR : {count}</p>
      <button onClick={increment}>increment</button>
      <h2>AGE PERSON</h2>
      <p>Age de {person.firstName} : {person.age}</p>
      <button onClick={incrementAge}>Ajouter une annee</button>
    </>
  )
}

export default App
