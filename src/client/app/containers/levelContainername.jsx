import React from 'react';
import FooterItemComponent from '../FooterItemComponent.jsx';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';
import Counter from '../CounterComponent.jsx';
import InfoComponent from '../InfoComponent.jsx';


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
        <Counter 
        level={puzzleID}
        />
      </div>
    )
  }
}

export default levelContainer;


