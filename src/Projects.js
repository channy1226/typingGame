import React, { Component } from 'react';
import background from './background.jpg';
import strasbourg2 from './starsbourg2.jpg';
import dubai1 from './dubai1.jpg';
import './App.css';
import Fade from 'react-reveal/Fade';
import {FaGithub, FaAt,FaLinkedinSquare} from 'react-icons/lib/fa'
import website from './YogaGem.png';
import RateMyPic from './RateMyPic1.jpg';
import TypingSS from './Typinggame.png';

var style = {
  backgroundImage: 'url(' + background + ')',
}

var introStyle = {
margin: 20,
}

class Projects extends React.Component {
  render() {
    return (
      <div className="Background" style={style}>

      <Fade duration={2000} clear>
      <div className="projectsWall">
      <p> <img src={RateMyPic} alt="hi"
      width='400'style={introStyle}/> </p>
        <p>
        <h2> Rate My Pic (before I post)</h2>
An iOs app made using React Native. Connected to Mongodb database and Heroku server to let people anonymoustly upload their pictures so others can
"rate". Helps the user decide the best picture to post.
        </p>
        </div>
      </Fade>

      <Fade duration={2000} clear>
      <div className="projectsWall">
      <p> <img src={TypingSS} alt="hi"
      width='400'style={introStyle}/> </p>
        <p>
        <h2> Typing Game: a study date </h2>
<h4> <a href="http://channyxchanny.com/?page=typing"> http://channyxchanny.com/?page=typing </a>
</h4>
Simple game with funny story mode made using ReactJs for students and programmers to practice
 fast typing while picking up a few tricks on impressing girls
        </p>
        </div>
      </Fade>

      <Fade duration={2000} clear>
      <div className="projectsWall">
      <p> <img src={website} alt="hi"
      width='400' style={introStyle}/> </p>
      <p>
      <h2> Online fashion store </h2>

    <h4><a href="https://www.myyogagem.com"> https://www.myyogagem.com </a>
    </h4>
Made using JavaScript for Nathalie Jewelry International Inc., a Montreal-based fashion retail store. Hosted on Shopify platform.
      </p>        </div>
      </Fade>

      </div>
    );
  }
}

export default Projects;
