import React, {PropTypes} from 'react';
import WelcomeItemComponent from './WelcomeItemComponent.jsx';


class WelcomeComponent extends React.Component {

 constructor(props) {
   super(props);
   this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
   this.state = {
      number: 22
   };
 }


 handleStartButtonClick() {
   //console.log(this.state.number);

  this.context.router.push({
    pathname: '/level/20',
    state: { number: 23 }
  })
 }

 static contextTypes = {
  router: PropTypes.object.isRequired
 }


  render() {
    return (
      <div className='welcome'>
        <p className='welcome-heading' >Select your puzzle</p>
        <button className='welcome-button' onClick={this.handleStartButtonClick}>Start the game</button>
        <WelcomeItemComponent puzzleNumber={20} puzzleDestination="#/level20" puzzleImage='./img/puzzle-20.png'/>
        <WelcomeItemComponent puzzleNumber={30} puzzleImage='./img/puzzle-30.png'/>
        <WelcomeItemComponent puzzleNumber={48} puzzleImage='./img/puzzle-48.png'/>
      </div>
    );
  }

}

export default WelcomeComponent;
