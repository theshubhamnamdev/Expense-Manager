import { FaTrash } from "react-icons/fa"

const ListItem = ({todo , deletetodo}) => {
  return (
    <li className="list-item">
      
      <span>
        <h3 className= {todo.amount > 0 ? "income-transaction" : "expense-transaction"}>
          ₹{todo.amount}
        </h3>
        <h4>{todo.text}</h4>
      </span>
      <button
        className="delbtn" onClick={()=>deletetodo(todo.id)}>
        <FaTrash />
      </button>
    </li>

  ) 
}

export default ListItem