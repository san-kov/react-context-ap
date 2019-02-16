import React from 'react'
import uuid from 'uuid'
export default class AddTodo extends React.Component {
  state = {
    todo: ''
  }

  handleChange = e => {
    this.setState({ todo: e.target.value })
  }

  addTodo = e => {
    e.preventDefault()
    const { todo } = this.state

    this.props.addTodo({ text: todo, id: uuid(), done: false })
    this.setState({ todo: '' })
  }

  render() {
    const { todo } = this.state

    return (
      <form onSubmit={this.addTodo}>
        <input type="text" value={todo} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    )
  }
}
