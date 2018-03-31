import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(add){
    this.setState({list:[...this.state.list,add]})
  }

  render() {
    return (
      <div className="App">
        <h2>My to-do list:</h2>
        <NewTask
          add={this.handleAddTask}
        />
        <List 
        tasks={this.state.list}
        />
      </div>
    );
  }
}

export default App;
