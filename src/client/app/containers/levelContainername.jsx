import React from 'react';
import FooterItemComponent from '../FooterItemComponent.jsx';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';
import Counter from '../CounterComponent.jsx';


class levelContainer extends React.Component {

  render () {
    const routes = this.props.route;

    return (
      <div>
        <NavigationComponent />
        <HeaderComponent 
        imgNumber={routes.imgNumber}
        puzzleLevel={routes.puzzleLevel}
        puzzleClass={routes.puzzleClass}
        link={routes.link}
        congratsText={routes.congratsText}
        />
        {routes.level &&
        <Counter 
        level={routes.level}
        buttonText={routes.buttonText}
        />
        }
      </div>
    )
  }
}

export default levelContainer;


