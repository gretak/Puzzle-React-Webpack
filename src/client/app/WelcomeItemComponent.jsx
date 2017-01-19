import React from 'react';


class WelcomeItemComponent extends React.Component {

 constructor(props) {
   super(props);
 }

render() {
  return (
      <div className="welcome-item">
        <p>{this.props.puzzleNumber}
          <img className ='welcome-item_icon' src='./img/puzzle-icon.png'/>
        </p>
        <a href={this.props.puzzleDestination}>
          <img className='welcome-img' src={this.props.puzzleImage}/>
        </a>
      </div>
  );
}

}

module.exports = WelcomeItemComponent;
