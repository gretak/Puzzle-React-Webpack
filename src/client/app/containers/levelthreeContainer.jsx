import React from 'react';
import FooterItemComponent from '../FooterItemComponent.jsx';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';


class levelthreeContainer extends React.Component {

  render () {

    return (
      <div>
        <NavigationComponent />
        <HeaderComponent imgNumber={48} puzzleLevel="puzzleLevelThree" puzzleClass="puzzle_img48" link="/"/>
      </div>
      )
    }
}

module.exports = levelthreeContainer;


