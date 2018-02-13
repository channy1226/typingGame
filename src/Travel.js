import React, { Component } from 'react';
import background from './background.jpg';
import './App.css';
import Fade from 'react-reveal/Fade';
import Gallery from 'react-photo-gallery';

 const photoSet = [
  { src: 'https://i.imgur.com/hLiqtRG.jpg', width: 3, height: 4, alt:"Venice 2017"},
{ src: 'https://i.imgur.com/PopVdLC.jpg', width: 3, height: 4, alt:"Strasbourg 2017"},
{src: 'https://i.imgur.com/nwBnJu3.jpg',width: 4,height: 3, alt:"Dubai 2017"},
{ src: 'https://i.imgur.com/qPTTTSt.jpg', width: 4, height: 3 },
{src: 'https://i.imgur.com/5qjQ3Z3.jpg',width: 3,height: 4, alt:"Dubai 2017"},
{src: 'https://i.imgur.com/EEhzLVP.jpg',width: 3,height: 4, alt:"Abu Dhabi 2017"},
{src: 'https://i.imgur.com/wIpthVG.jpg',width: 3,height: 4, alt:"Havana 2015"},
{src: 'https://i.imgur.com/wWmQhKS.jpg',width: 3,height: 4 },
{ src: 'https://i.imgur.com/jtSVenD.jpg', width: 3, height: 4 },
  { src: 'https://i.imgur.com/39j8Gda.jpg', width: 4, height: 3 },
  {
  src: 'https://i.imgur.com/ARIguOg.jpg',width: 1,height: 1,
  },
  { src: 'https://i.imgur.com/kW235lC.jpg', width: 3, height: 4 },
  { src: 'https://i.imgur.com/7SuWzDq.jpg', width: 3, height: 4 },
    { src: 'https://i.imgur.com/Idmmudt.jpg', width: 3, height: 4 },
    { src: 'https://i.imgur.com/t1fa0p3.jpg', width: 3, height: 4 },
    {src: 'https://i.imgur.com/ImPmafz.jpg',width: 1,height: 1 },
    {src: 'https://i.imgur.com/DvfTRuV.jpg',width: 4,height:3 },
];

var style = {
  backgroundImage: 'url(' + background + ')',
}

var introStyle = {
margin: 0,
}

class Travel extends React.Component {
  render() {
    return (
       <Fade clear duration={2000}>
     <div className="Pictures" >
      <Gallery className="Pictures" photos={photoSet} />  */
   </div>
      </Fade>
    );
  }
}

export default Travel;
