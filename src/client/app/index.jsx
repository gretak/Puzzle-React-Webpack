import React from 'react';
import {render} from 'react-dom';
import CounterComponent from './CounterComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './Footer.jsx';
import NavigationComponent from './NavigationComponent.jsx';


require('../sass/base-style.scss');
require('../sass/header-component.scss');
require('../sass/counter-component.scss');
require('../sass/footer.scss');
require('../sass/navigation.scss');


class App extends React.Component {
  render () {


    return (
      <div>
        <NavigationComponent />
        <HeaderComponent />
        <CounterComponent defaultProperty="Likes"/>
        <FooterComponent number="03308098788" />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
