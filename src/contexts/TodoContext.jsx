import React from 'react'

export const TodoContext = React.createContext()

export class TodoProvider extends React.Component {
  state = {
    todos: []
  }

  addTodo = todo => {
    this.setState(({ todos }) => ({
      todos: [...todos, todo]
    }))
  }

  complete = id => {
    this.setState(
      ({ todos }) => ({
        todos: todos.map(todo =>
          todo.id === id ? { ...todo, done: true } : todo
        )
      }),
      () => console.log(this.state)
    )
  }

  render() {
    const { addTodo, complete } = this
    const { todos } = this.state

    const value = {
      addTodo,
      todos,
      complete
    }
    return (
      <TodoContext.Provider value={value}>
        {this.props.children}
      </TodoContext.Provider>
    )
  }
}
