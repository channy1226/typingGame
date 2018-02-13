import React, { Component } from 'react';
import Typing from './typing.js';
import Typing2 from './typing2.js';
import Typing3 from './typing3.js';
import './App.css';

class TypingApp extends Component {
  constructor() {
    super();
    this.state = {game: 'typing'};
  }
  loseGame() {
    this.setState({game: 'typing'});
  }
  resetGame() {
    this.setState({game: 'typing'});
  }
  changeGame() {
    // window.alert('change game1 to game2');
    this.setState({game: 'typing2'});
  }
  changeGame2() {
    // window.alert('change game2 to game3');
    this.setState({game: 'typing3'});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img className ="girl2" src={"./girl2.jpg"} style={{width:300}} />
          <h2>You are an average uWaterloo CS student without any special talent. One day,
          as you nonchalently walk towards your CS136 class, you spot the cutest asian girl you have ever
          seen. She smiles at you. THIS IS A ONCE IN A LIFETIME CHANCE.</h2>
        </div>
        <div>
        {this.state.game == 'typing' ? <Typing changeGame={this.changeGame.bind(this)} /> : null}
        {this.state.game == 'typing2' ? <Typing2 loseGame={this.loseGame.bind(this)} changeGame2={this.changeGame2.bind(this)} /> : null}
        {this.state.game == 'typing3' ? <Typing3 resetGame={this.resetGame.bind(this)} /> : null}
        </div>
      </div>
    );
  }
}


export default TypingApp;
