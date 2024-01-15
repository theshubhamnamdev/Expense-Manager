import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({ todos , deletetodo }) => {
  return (
    <ul className="list-group">

      {
        todos.map((todo) => {
          return <ListItem key={todo.id} todo={todo} deletetodo={deletetodo}/>
        })
      }
    </ul>
  )
}

export default ListGroup;