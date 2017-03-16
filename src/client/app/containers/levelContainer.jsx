import React from 'react';
import FooterItemComponent from '../FooterItemComponent.jsx';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';
import Counter from '../CounterComponent.jsx';
import InfoComponent from '../InfoComponent.jsx';



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


