import React from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import Todos from './Todos'

export default () => (
  <TodoContext.Consumer>
    {({ todos, complete }) => <Todos todos={todos} complete={complete} />}
  </TodoContext.Consumer>
)
