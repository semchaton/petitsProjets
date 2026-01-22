import {useState} from "react"
import {nanoid} from "nanoid"
import ListItem from "./components/ListItem"

function App() {
  const [toDoList, setToDoList] = useState ([
    {id: nanoid(8), content: "item 1"},
    {id: nanoid(8), content: "item 2"},
    {id: nanoid(8), content: "item 3"}, //nanoid() => donne numéro unique
  ])

  function deleteToDo(id){ //on envoi un nouveau tableau sans l'id passé en paramètre
    setToDoList(toDoList.filter(todo => todo.id !== id)) 
  }

  return (
    <div>
      <h1> To-Do List</h1>
      <form>
        <label htmlFor="todo-item"> Ajouter une chose à faire</label>
        <input type="text" />
        <button> Ajouter </button>
      </form>
      <ul>
        {toDoList.map(item =>(
          <ListItem key={item.id} itemData={item} deleteToDo = {deleteToDo}/>
        ))}
      </ul>
    </div>
  )
}

export default App
