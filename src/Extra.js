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

var style = {
  backgroundImage: 'url(' + background + ')',
}

var introStyle = {
margin: 20,
}

class Extra extends React.Component {
  render() {
    return (
      <div className="Background" style={style}>
      <Fade duration={2000} clear>
      <div className="projectsWall">
      <p> <img src={Model} alt="hi"
      width='400'style={introStyle}/> </p>
        <p>
        <h2> Fundraising Model </h2>

<h4> <a href="http://www.fashionforchange.ca/"> Fashion for Change </a>
</h4>(2017-2018) Modeling in the Waterloo Annual Charity Fashion Show where all profit goes to war torn villages.
        </p>
        </div>
      </Fade>

      <Fade duration={2000} clear>
      <div className="projectsWall">
      <p> <img src={Dance} alt="hi"
      width='400' style={introStyle}/> </p>
      <p>
      <h2> Theater Actress  </h2>

    <h4> <a href="http://joedi21.wixsite.com/thespiantheatre" > Thespian Production </a>
    </h4>
(2016-2017) Acted in the theatrical adaptation of modern movie Ex-Machina.
Thespian is a new venture project by students of Collège Jean-de-Brébeuf.    </p>        </div>
      </Fade>

      <Fade duration={2000} clear>
      <div className="projectsWall">
      <p> <img src={Chess} alt="hi"
      width='400' style={introStyle}/> </p>
      <p>
      <h2> Canadian Chess Champion </h2>
      <h4> Coach and Hobby
      </h4>
(2008-Present) Represented Canada in World Youth Chess Championship 2011, in Brazil. Competed in major North American tournaments, peaked at 2052 Elo.
Volunteering as chess coach in college clubs.
     </p>        </div>
      </Fade>

      </div>
    );
  }
}

export default Extra;
