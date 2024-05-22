
import { useState } from 'react'
import './App.css'
function App() {
 
//ETAT
const [firstname,setFirstname] = useState('Morgan Bleunven')
const [checked,setChecked] = useState(false)
const [value, setValue] = useState('')

//COMPORTEMENT
const handleChange = (e) => {
  setFirstname(e.target.value)
}

const reset = () => {
  setFirstname('')
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(new FormData(e.target))
}

const toggleCheck =() => {
  setChecked(!checked)
}

const handleChangeTextArea = (e) =>{
    setValue(e.target.value)
}

//AFFICHAGE
  return (
    //Formulaire à champs controlé
    // <form action="">
    //   <input type="text" name='firstname' value={firstname} onChange={handleChange} />
    //   {firstname}
    //   <button onClick={reset} type='button'>Reset</button>
    // </form>

    //Formulaire à champs non controlé (moins de code est executé)
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name='firstname' defaultValue='firstname' />
      <textarea value={value} onChange={handleChangeTextArea}/>
      <input type="checkbox" checked = {checked} onChange={toggleCheck} />
      <button disabled={!checked} >Envoyer</button>
    </form>
    )
    
      
    
  
}

export default App
