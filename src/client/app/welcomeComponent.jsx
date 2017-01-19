import React from 'react';
import WelcomeItemComponent from './WelcomeItemComponent.jsx';


class WelcomeComponent extends React.Component {

 constructor(props) {
   super(props);
   //this.state = {link : 'http://www.linkedin.com' };
 }

render() {
  return (
    <div className='welcome'>
      <p className='welcome-heading' >Select your puzzle</p>
      <WelcomeItemComponent puzzleNumber={20} puzzleDestination="#/levelone" puzzleImage='./img/puzzle-20.png'/>
      <WelcomeItemComponent puzzleNumber={30} puzzleDestination="#/leveltwo" puzzleImage='./img/puzzle-30.png'/>
      <WelcomeItemComponent puzzleNumber={48} puzzleDestination="#/levelthree" puzzleImage='./img/puzzle-48.png'/>
    </div>
  );
}

}

module.exports = WelcomeComponent;
