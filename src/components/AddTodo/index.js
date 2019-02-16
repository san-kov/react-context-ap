import React from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import AddTodo from './AddTodo'

export default () => (
  <TodoContext.Consumer>
    {({ addTodo, complete }) => (
      <AddTodo addTodo={addTodo} complete={complete} />
    )}
  </TodoContext.Consumer>
)
