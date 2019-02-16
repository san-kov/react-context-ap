import React, { Component } from 'react'
import { TodoProvider } from './contexts/TodoContext'

import './App.css'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
class App extends Component {
  render() {
    return (
      <TodoProvider>
        <Todos />
        <AddTodo />
      </TodoProvider>
    )
  }
}

export default App
