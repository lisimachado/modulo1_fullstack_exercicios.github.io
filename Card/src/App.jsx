import './App.css'
import Card from "./components/Card"

function App() {

  const usuario = {
    nome: "Lisiane Machado Martins",
    idade: 31,
    foto: "https://avatars.githubusercontent.com/u/106331874?s=400&u=1288aceefc38b41610b4a79c6b04f44eb9be44d3&v=4",
    github: "https://github.com/lisimachado",
    linkedin: "https://www.linkedin.com/in/lisiane-machado-martins-353273191/",
  }

  return (
    <div className="App">
      <Card usuario={usuario}/>      
    </div>
  )
}

export default App