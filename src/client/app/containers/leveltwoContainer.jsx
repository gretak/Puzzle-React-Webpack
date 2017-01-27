import React from 'react';
import FooterItemComponent from '../FooterItemComponent.jsx';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';


class leveltwoContainer extends React.Component {

  render () {

    return (
      <div>
        <NavigationComponent />
        <HeaderComponent imgNumber={30} puzzleLevel="puzzleLevelTwo" puzzleClass="puzzle_img30" link="/"/>
      </div>
      )
  }
}

export default leveltwoContainer;

