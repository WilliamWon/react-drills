import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      people: [
        'George',
        'Arnold',
        'Hope',
        'Jackie',
        'Juice'
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val){
    this.setState({userInput:val})
  }

  render() {
    let peopleToDisplay = this.state.people.filter((element,index) => {
      return element.includes( this.state.userInput );
    }).map((element,index) => {
      return <h2 key={ index }>{ element }</h2>
    })
    return (
      <div className="App">
        <input onChange={(e)=>this.handleChange(e.target.value)} type="text"/>
        { peopleToDisplay }           
      </div>
    );
  }
}

export default App;
