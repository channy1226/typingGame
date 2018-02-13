import React, { Component } from 'react';
import background from './background.jpg';
import avi from './Avi.png';
import './App.css';
import Fade from 'react-reveal/Fade';
import {FaGithub, FaAt,FaLinkedinSquare} from 'react-icons/lib/fa';
import Travel from './Travel.js';
import Projects from './Projects.js';
import Extra from './Extra.js';
import Contact from './Contact.js';

var style = {
  backgroundImage: 'url(' + background + ')',
}

var introStyle = {
margin: 0,
}

class App extends Component {

   constructor() {
     super();
     this.main = (<div className="Intro">
         <Fade top duration={3000}>
          <img src={avi} alt="hi" />
         </Fade>
         <Fade top duration={3000}>
         <div className="textWall">
           <h3> Hello there! </h3>
           <p> I am Channy, a French-Chinese Montreal born studying Math & Business Double Degree
            at UWaterloo and Wilfrid Laurier University.</p>
           <p> I have a wide range of interests, from <b> <a onClick={this.clickProjects.bind(this)}>developping things</a></b>, to
             <b> <a onClick={this.clickTravel.bind(this)}> traveling</a></b>, to
               <b> <a onClick={this.clickExtra.bind(this)}>helping people out</a></ b>.</p>
           <p> Thanks for stopping by! Feel free to check out
             my projects, explore my travel blog or <b>  <a onClick={this.clickContact.bind(this)}>say hi</a></b>. </p>
           <p>
             <a href="https://github.com/channy1226"><FaGithub /></a>
             <a href="https://www.linkedin.com/in/channy1226/"><FaLinkedinSquare /></a>
             <a onClick={this.clickContact.bind(this)}>
             <FaAt /> </a>
           </p>
           </div>
         </Fade>
      </div>);

      this.state = { nav: 'typing', content: this.main, activeMain: true};
   }

   clickAbout() {
     this.setState({
       content: this.main,
       activeTravel: false,
       activeMain: true,
       activeProjects:false,
       activeExtra:false,
       activeContact:false
     });
   }

  clickTravel() {
    this.setState({
      content: <Travel />,
      activeMain: false,
      activeTravel: true,
      activeProjects:false,
      activeExtra:false,
      activeContact:false
    });
  }

  clickProjects() {
    this.setState({
      content: <Projects />,
      activeMain: false,
      activeTravel: false,
      activeProjects:true,
      activeExtra:false,
      activeContact:false
    });
  }

  clickExtra() {
    this.setState({
      content: <Extra />,
      activeMain: false,
      activeTravel: false,
      activeProjects:false,
      activeExtra:true,
      activeContact:false
    });
  }

  clickContact() {
    this.setState({
      content: <Contact />,
      activeMain: false,
      activeTravel: false,
      activeProjects:false,
      activeExtra:false,
      activeContact:true
    });
  }

  render() {
    return (
    <div className="Background" style={style}>
      <header>
      <div className="topnav">
        <a className={this.state.activeContact ? "active" : null} onClick={this.clickContact.bind(this)}>Contact</a>
        <a className={this.state.activeTravel ? "active" : null} onClick={this.clickTravel.bind(this)}> Travel</a>
        <a className={this.state.activeExtra? "active" : null} onClick={this.clickExtra.bind(this)}>
        Volunteer & Extracurricular</a>
        <a className={this.state.activeProjects ? "active" : null} onClick={this.clickProjects.bind(this)}>Projects</a>
        <a className={this.state.activeMain ? "active" : null} onClick={this.clickAbout.bind(this)}>About</a>
      </div>
      </header>
      <div className="App">
      {this.state.content}
      </div>
      </div>
    );
  }
}
export default App;
