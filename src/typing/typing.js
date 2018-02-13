import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Typing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameStarted: false,
      activeWord: [],
      activeLetters: [],
      wordsMastered: 0,
      timer: 0,
      wordList: [],
      font: 'sans'
    }
    this.getWordList = this.getWordList.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.getWord = this.getWord.bind(this);
    this.checkEqual = this.checkEqual.bind(this);
    this.timer = this.timer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.rating = this.rating.bind(this);
    this.interval;
    this.win = 10;
  }

  componentWillMount(){

    document.addEventListener('keydown', function(e) {
      e.preventDefault();

      // handle backspace and delete
      if(e.which == 46 || e.which == 8){
        this.setState({
          activeLetters: this.state.activeLetters.slice(0,-1)
        })
        return true;
      }

      // otherwise add character to array
      let char = String.fromCharCode(e.which);
      let newActiveLetters = this.state.activeLetters;
      newActiveLetters.push(char);
      if(this.checkEqual(newActiveLetters, this.state.activeWord) ){
        this.setState({
          activeWord: this.getWord(),
          activeLetters: [],
          wordsMastered: this.state.wordsMastered + 1
        })
      }
      else{
        this.setState({
          activeLetters: newActiveLetters
        })
      }

    }.bind(this));
  }

  checkEqual(arr1, arr2) {
      if(arr1.length !== arr2.length)
          return false;
      for(var i = arr1.length; i--;) {
          if(arr1[i] !== arr2[i])
              return false;
      }

      return true;
  }

  getRandomInt(min=0, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  timer(){
    let newTime = this.state.timer - 1;
    this.setState({
      timer: newTime
    })
    if(newTime === 0){
      window.clearInterval(this.interval);
    }
  }

  rating(){
    if(this.state.wordsMastered < this.win){
      return 'She ran away 😫'
    }
    else if(this.state.wordsMastered < 15){
      return 'She says "I find you a bit creepy" 😐'
    }
    else if(this.state.wordsMastered < 35){
      return 'She says "Hum...You are nice" 😊'
    }
    else if(this.state.wordsMastered < 47){
      return 'She says "Aww...you so cute" 😃'
    }
    else{
      return 'She says "Do...Do you want to grab bubbletea?" 😎'
    }
  }

  startGame(){
      this.setState({
        wordList: this.getWordList()
      }, function(){
        let word = this.getWord();
        this.setState({
          activeLetters: [],
          activeWord: this.getWord(),
          gameStarted: true,
          wordsMastered: 0,
          timer: 15
        });
      });
      ReactDOM.findDOMNode(this).querySelector('.secret-input').focus();

      this.interval = setInterval(this.timer, 1000);
  }

  getWord(){
    let index = this.getRandomInt(0, this.state.wordList.length);
    let wordToUse = this.state.wordList[index];
    let newWordsList = this.state.wordList;
    newWordsList.splice(index, 1);
    this.setState({
      wordList: newWordsList
    });

    return wordToUse.split('');
  }


  getWordList(){
    const list = ['ADMIRABLE', 'ADORABLE', 'ALLURING', 'ANGELIC', 'APPEALING', 'BABE', 'BEAUTEOUS',
      'BEWITCHING', 'CAPTIVATING', 'CHARMING', 'CLASSY', 'COMELY', 'CUTE', 'DAZZLING', 'DELICATE',
      'DELIGHTFUL', 'DIVINE', 'ELEGANT', 'ENTHRALLING', 'ENTICING', 'EXCELLENT', 'EXQUISITE', 'FAIR',
      'FASCINATING', 'FETCHING', 'FINE', 'FIT','FOXY', 'GOODLOOKING', 'GORGEOUS', 'GRACEFUL', 'GRAND',
      'HOT', 'IDEAL', 'INVITING', 'LOVELY', 'MAGNETIC', 'MAGNIFICENT', 'MARVELOUS', 'MESMERIC', 'NICE',
      'PLEASING', 'PRETTY', 'RADIANT', 'RAVISHING', 'REFINED', 'RESPLENDENT',
      'SHAPELY', 'SLIGHTLY', 'STUNNING', 'SUBLIME', 'SEXY', 'SUPERB', 'SYMMETRICAL',
      'TAKING', 'TANTALIZING', 'TEASING', 'TEMPTING', 'WINNING', 'WONDERFUL'];
    return list;
  }

  render(){
    let letters = [];
    let board;
    this.state.activeWord.map((current, index) =>{
      let correct;
      if(this.state.activeLetters[index] === undefined){
        correct='undefined'
      }
      else if(this.state.activeLetters[index] === current){
        correct='true'
      }
      else{
        correct='false'
      }
      letters.push(<span className="game-letter" key={index} data-correct={correct}>{current}</span>)
    });
    if(!this.state.gameStarted){
      board=(
         <div className="game__board" key="start">
          <p>{'Compliment her as much as you can before time runs out.'}</p>
          <button className="button" onClick={this.startGame}>Girl, you are...</button>
         </div>);
    }
    else if(this.state.timer && this.state.gameStarted){
       board=(
         <div className="game__board" key="inprogress">
           <div className="game__score">{'SCORE: '+ this.state.wordsMastered}</div>
           <div className="game__words" key={this.state.activeWord}>{letters}</div>
           <div className="game__timer">{'TIMELEFT: ' + this.state.timer}</div>
         </div>);
    }
    else if(this.state.wordsMastered >= this.win) {
      board=(
        <div className="game__board" key="timesup">
          <div className="game__words">
            <p>{'She stares at you.'}</p>
            <p>{'FINAL SCORE: ' + this.state.wordsMastered}
            <br />
            <span className="emoji">{this.rating()}</span></p>
            <button className="button" onClick={this.props.changeGame}>{'Now, give her your best pickup line.'}</button>
          </div>
        </div>
      );
    }
    else{
      board=(
        <div className="game__board" key="timesup">
          <div className="game__words">
            <p>{'You failed to impress her...'}</p>
            <p>{'FINAL SCORE: ' + this.state.wordsMastered}
            <br />
            <span className="emoji">{this.rating()}</span></p>
            <button className="button" onClick={this.startGame}>{'Play Again'}</button>
          </div>
        </div>
      );
    }

    return(
      <div className="game">
        <ReactCSSTransitionGroup transitionName='scale' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {board}
        </ReactCSSTransitionGroup>
         <input className="secret-input" type="text"/>
      </div>
    );
  }
}

export default Typing;
