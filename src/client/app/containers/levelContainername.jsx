import React from 'react';
import FooterItemComponent from '../FooterItemComponent.jsx';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';
import Counter from '../CounterComponent.jsx';
import InfoComponent from '../InfoComponent.jsx';


class levelContainer extends React.Component {

  render () {
    //const routes = this.props.route;
    let puzzleID = this.props.params.id;

    return (
      <div>
        <NavigationComponent />
        <HeaderComponent 
        imgNumber={puzzleID}
        puzzleLevel={'puzzleLevel'+[puzzleID]}
        puzzleClass={'puzzle_img'+[puzzleID]}
        //link={routes.link}
        //congratsText={routes.congratsText}
        />
        <Counter 
        level={puzzleID}
        //buttonText={routes.buttonText}
        />
      </div>
    )
  }
}

export default levelContainer;


