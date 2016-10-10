import React from 'react';

require('../sass/navigation.scss');


function navFunction() {
    var x = document.getElementById("myTopnav");
    console.log(screen.width)
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
        <li className="topnav_item"><a className="topnav_link" href="#home">Home</a></li>
        <li className="topnav_item"><a className="topnav_link" href="#news">News</a></li>
        <li className="topnav_item"><a className="topnav_link" href="#contact">Contact</a></li>
        <li className="topnav_item"><a className="topnav_link" href="#about">About</a></li>
        <li className="topnav_icon">
          <a className="topnav_link" href="javascript:void(0);" onClick={navFunction}>&#9776;</a>
        </li>
      </ul>
    );
  }

}

export default NavigationComponent;