import React, { Component } from 'react';
import background from './background.jpg';
import strasbourg2 from './starsbourg2.jpg';
import dubai1 from './dubai1.jpg';
import './App.css';
import Fade from 'react-reveal/Fade';
import {FaGithub, FaAt,FaLinkedinSquare} from 'react-icons/lib/fa'
import Model from './fashionchange.jpg';
import Dance from './dance.png';
import Chess from './chess.JPG';
import avi from './Avi.png';

var style = {
  backgroundImage: 'url(' + background + ')',
}

var introStyle = {
margin: 20,
}

class Contact extends React.Component {
  render() {
    return (
      <div className="Background" style={style}>
      <div className="Intro">
          <Fade top duration={3000}>
           <img src={avi} alt="hi" />
          </Fade>
          <Fade top duration={3000}>
          <div className="textWall">
            <h3> Let's keep in touch! Any inquiries, ideas or just to chat 😎</h3>
            <h5> <FaAt /> c3yun@edu.uwaterloo.ca </h5>
            <p>
              <a href="https://github.com/channy1226"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/channy1226/"><FaLinkedinSquare /></a>
            </p>
            </div>
          </Fade>
       </div>
      </div>
    );
  }
}

export default Contact;
