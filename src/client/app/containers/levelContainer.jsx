import React from 'react';
import FooterItemComponent from '../FooterItemComponent.jsx';
import NavigationComponent from '../NavigationComponent.jsx';
import HeaderComponent from '../HeaderComponent.jsx';
import Counter from '../CounterComponent.jsx';
import InfoComponent from '../InfoComponent.jsx';



class levelContainer extends React.Component {

  render () {
    const routes = this.props.route;
            console.log("id"+this.props.params.id);
            console.log(routes.imgNumber);


    return (
      <div>
        <NavigationComponent />
        <HeaderComponent 
        imgNumber={this.props.params.id}
        puzzleLevel={"puzzleLevel"+[this.props.params.id]}
        puzzleClass={"puzzle_img"+[this.props.params.id]}
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


