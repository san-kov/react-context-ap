import React, { Fragment } from 'react'

export default ({ todos, complete }) => (
  <div>
    <ul>
      {todos.map(({ text, id, done }) => (
        <Fragment key={id}>
          <li style={{ textDecoration: done && 'line-through' }}>
            {text}
            {!done && <button onClick={() => complete(id)}>done</button>}
          </li>
        </Fragment>
      ))}
    </ul>
  </div>
)
