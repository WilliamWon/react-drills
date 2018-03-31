import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image';

class App extends Component {
  constructor(){
    super();
    this.state = {
      image: 'https://68.media.tumblr.com/6c82fdbad4e33f2fb561ff8a8dea5500/tumblr_p2zs1eQnG81sfie3io1_1280.jpg'
    }
  }
  render() {
    const {image} = this.state;
    return (
      <div className="App">
          <Image
            image = {image}
          />
      </div>
    );
  }
}

export default App;
