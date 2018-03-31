import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      luke_skywalker : ''
    }
  }

  componentDidMount(){
    axios.get("https://swapi.co/api/people/1").then(res => {
      this.setState({luke_skywalker: res.data})
    })
  }
  render() {
    const {name, birth_year, height, eye_color} = this.state.luke_skywalker;
    return (
      <div className="App">
          <h1>Name: {name}</h1>
          <h1>Birth Year: {birth_year}</h1>
          <h1>Height: {height}</h1>
          <h1>Eye Color: {eye_color}</h1>
      </div>
    );
  }
}

export default App;
