import React from 'react';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';



class levelContainer extends React.Component {

  render () {
    let puzzleID = this.props.params.id;

    return (
      <div>
        <NavigationComponent />
        <HeaderComponent 
        imgNumber={puzzleID}
        puzzleLevel={'puzzleLevel'+[puzzleID]}
        puzzleClass={'puzzle_img'+[puzzleID]}
        />
      </div>
    )
  }
}

export default levelContainer;


