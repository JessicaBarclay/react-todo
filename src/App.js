import React, { Component } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      todos: []
     };
  }

  addTodo(todo) {  
    let todos = this.state.todos;  
    todos.push(todo)
    this.setState({todos: todos})
  }

  render() {
    return (
      <div className="App">
         <TodoList todos={this.state.todos} />
         <TodoForm onSubmitHandler={(todo) => this.addTodo(todo)} />
      </div>
    );
  }
}

export default App;
