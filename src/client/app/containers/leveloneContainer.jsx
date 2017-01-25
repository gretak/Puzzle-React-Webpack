import React from 'react';
import FooterItemComponent from '../FooterItemComponent.jsx';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';


class leveloneContainer extends React.Component {

  render () {

    return (
      <div>
        <NavigationComponent />
        <HeaderComponent imgNumber={20} puzzleLevel="puzzleLevelOne" puzzleClass="puzzle_img20" link="/"/>
      </div>
      )
    }
}

module.exports = leveloneContainer;


