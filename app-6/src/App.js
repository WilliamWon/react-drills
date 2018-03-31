import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      input: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this) 
  }
  handleInputChange(val){
    this.setState({input: val})
  }
  handleAddTask() {
    this.setState({ 
      list: [...this.state.list, this.state.input ], 
      input: '' 
    });
  }


  render() {
    const {list} = this.state;
    let todoList = list.map((e,i) => {
      return(  
      <Todo 
        key={i} 
        task={e}
        />
      )
    })

    return (
      <div className="App">
          <h1>My to-do list:</h1>
          <input
            value={this.state.input}
            placeholder="Enter new task" 
            onChange={(e)=>this.handleInputChange(e.target.value)}/>
          <button onClick={this.handleAddTask}>Add</button>
          <br />

          {todoList}
      </div>
    );
  }
}

export default App;
