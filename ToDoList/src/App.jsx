import {useState} from "react"
import {nanoid} from "nanoid"
import ListItem from "./components/ListItem"

function App() {
  const [toDoList, setToDoList] = useState ([
    {id: nanoid(8), content: "item 1"},
    {id: nanoid(8), content: "item 2"},
    {id: nanoid(8), content: "item 3"}, //nanoid() => donne numéro unique
  ])
  const [todo, setToDo] = useState("")
  const [showValidation, setShowValidation] = useState (false)
  function deleteToDo(id){ //on envoi un nouveau tableau sans l'id passé en paramètre
    setToDoList(toDoList.filter(todo => todo.id !== id)) 
  }

  function handleSubmit(e) {
    e.preventDefault()
    if( todo === ""){
      setShowValidation(true)
      return
    }
    setToDoList([...toDoList, {id: nanoid(), content: todo}]) //...state => ce qui est déjà présent dans le tableau
    setToDo("")
    setShowValidation(false)
  }
  return (
    <div>
      <h1> To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-item"> Ajouter une chose à faire</label>
        <input value = {todo} onChange={(e) => setToDo (e.target.value)} type="text" />
        {showValidation && (
          <p> Ajouter du contenu avant de valider </p>
        )}
        <button> Ajouter </button>
      </form>
      <ul>
        {toDoList.length === 0 && (
          <li> Pas d'items à afficher</li>
        )}
        {toDoList.length > 0 && 
        toDoList.map(item =>(
          <ListItem key={item.id} itemData={item} deleteToDo = {deleteToDo}/>
        ))}
      </ul>
    </div>
  )
}

export default App
