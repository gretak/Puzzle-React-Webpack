import React from 'react';

require('../sass/navigation.scss');


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



class NavigationComponent extends React.Component {

   constructor(props) {
     super(props);
     this.state = {link : "www.linkedin.com" };
   }

  render() {
    return (
      <ul className="topnav" id="myTopnav">
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li className="icon">
          <a href="javascript:void(0);" onClick={myFunction}>&#9776;</a>
        </li>
      </ul>
    );
  }

}

export default NavigationComponent;