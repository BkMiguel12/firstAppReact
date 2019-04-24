import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: todos
    };
  }
  render(){
    const taskCard = this.state.todos.map((todo, i) => {

      if(todo.priority.toLowerCase() == 'low'){
        todo.color = 'danger';
      }else if(todo.priority.toLowerCase() == 'medium'){
        todo.color = 'warning';
      }else{
        todo.color = 'success';
      }
      
      return(
        <div className="col-md-4">
          <div className="card bg-dark text-light">
            <div className="card-header bg-dark"><h5>{todo.title}</h5></div>
            <div className="card-body">
              <h5 className="card-title mb-2">{todo.responsible}</h5>
  
              <p className="card-text">{todo.description}</p>
              <span className={"badge badge-" + todo.color}>{todo.priority}</span>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <header className="App-header">

        <nav className="navbar navbar-dark bg-dark">
          <h5 className="text-light">Tasks List</h5>
        </nav>

          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* Content */}
        <div className="container">
          <div className="row">
            {taskCard}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
