import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Typing2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameStarted: false,
      activeWord: [],
      activeLetters: [],
      wordsMastered: 0,
      timer: 0,
      wordList: [],
      font: 'sans',
      word: 0,
    }
    this.getWordList = this.getWordList.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.getWord = this.getWord.bind(this);
    this.checkEqual = this.checkEqual.bind(this);
    this.timer = this.timer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.rating = this.rating.bind(this);
    this.interval;
    this.win = 20;
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
   if (this.state.wordsMastered == this.win){
      return '😊'
    }
    else if(this.state.wordsMastered < 45){
      return '😃'
    }
    else{
      return '😎'
    }
  }

  startGame(){
      this.setState({
        wordList: this.getWordList()
      }, function(){
        let word = this.getWord();
        this.setState({
          activeWord: this.getWord(),
          activeLetters: [],
          gameStarted: true,
          wordsMastered: 0,
          timer: 20
        });
      });
      ReactDOM.findDOMNode(this).querySelector('.secret-input').focus();

      this.interval = setInterval(this.timer, 1000);
  }

  getWord(){
    let index = this.state.word;
    let wordToUse = this.state.wordList[index];
    let newWordsList = this.state.wordList;
    newWordsList.splice(index, 0);
    this.setState({
      wordList: newWordsList,
      word: this.state.word + 1,
    });

    return wordToUse.split('');
  }


  getWordList(){
    const list = ['HELLO', 'GIRL', 'MY', 'NAME', 'IS', 'CHAD', 'WHAT',
      'IS', 'A', 'YOUNG', 'SMART', 'AND', 'ATTRACTIVE', 'MAN', 'LIKE',
      'MYSELF', 'DOING', 'WITHOUT', 'YOUR', 'NUMBER', 'NULL'];
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

    if (this.state.wordsMastered >= this.win) {
     board=(
       <div className="game__board" key="timesup">
         <div className="game__words">
           <p>{'She blushed and turned her head away. You are still on the right track!'}</p>
           <p>{'FINAL SCORE: ' + this.state.wordsMastered}<span className="emoji">{this.rating()}</span></p>
         <button className="button" onClick={this.props.changeGame2}>{'Next, ask her some questions!'}</button>
         </div>
       </div>
     )
    } else if(!this.state.gameStarted){
      board=(
         <div className="game__board" key="start">
          <p>{'Say your best pickup line before time runs out.'}</p>
          <button className="button" onClick={this.startGame}>You have 15 seconds!</button>
         </div>);
    }
    else if(this.state.timer && this.state.gameStarted && this.state.wordsMastered < this.win){
       board=(
         <div className="game__board" key="inprogress">
           <div className="game__score">{'SCORE: '+ this.state.wordsMastered}</div>
           <div className="game__words" key={this.state.activeWord}>{letters}</div>
           <div className="game__timer">{'TIMELEFT: ' + this.state.timer}</div>
         </div>);
    } else{
      board=(
        <div className="game__board" key="timesup">
          <div className="game__words">
            <p>{'She walked away. It was not meant to be after all 😫'}</p>
            <p>{'FINAL SCORE: ' + this.state.wordsMastered}</p>
            <button className="button" onClick={this.props.loseGame}>{'Play Again'}</button>
          </div>
        </div>
      )
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
//changeGame and changeGame2 not working; when typing2 finishes it doesnt go to typing1 nor typing3.
//logic: if failed typing2 ( didnt say the whole pickup line) go back to typing1, if succeed go to typing3
//if typing3 succeeded then say congratulation u got a date, if failed go back to typing1 or say gg
export default Typing2;
