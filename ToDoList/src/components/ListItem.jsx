import '../style/ListItem.css'

export default function ListItem({itemData, deleteToDo}){
    return(
        <li>
            <span> {itemData.content}</span>
            <button onClick={() => deleteToDo(itemData.id)}> X </button>
        </li>
    )
}