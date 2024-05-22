
const liste = [
  "Tache 1",
  "Tache 2",
  "Tache 3",
]

function App() {
 
 return <>
    <Title color="blue">Mon Composant</Title>
    <input type="text"/>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nulla, ea iure dolor accusamus,
      animi, autem aspernatur dolore debitis natus placeat doloribus aut!
      Adipisci vel obcaecati asperiores facere iste fuga maxime!
    </p>
    <ul>
      {liste.map(e => (<li key={e}>{e}</li>))}
    </ul>
  </>
}

function Title({color,children}) {
  return <h1 style={{color:color}}{...props}>{children}</h1>
}

const props = {
  id:'monid',
  classname:'maclass'
}

export default App
