import React from 'react'
import axios from 'axios' // in order to get this url we need this. 

const URL = 'http://localhost:9000/api/todos' // so we don't have to repeat this all over the code

export default class App extends React.Component {
  constructor() {
  super();
  this.state = {
    todos: [], 
  }
}
  fetchAllTodos = () => {
  axios.get(URL) // this returns a promise
  .then(res => {
    this.setState({...this.state, todos: res.data.data})
  })
  .catch(err => {
    
  })
  } // arrow function bounds method to class 
  componentDidMount() {
    this.fetchAllTodos()
    // fetch all todos from server
  
}
  render() {
    return (
      <div>
        <div id="error">Error: No error here</div>
        <div id="todos">
          <h2>Todos:</h2>
          {
            this.state.todos.map(td => {
              return <div key={td.id}>{td.name}</div>
            })
          }
        </div>
        <form id="todoForm">
          <input type="text" placeholder="Type todo"></input>
          <input type="submit"></input>
          <button>Clear completed</button>
        </form>
      </div>
    )
  }
}
