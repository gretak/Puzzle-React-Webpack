import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';

require('../sass/base-style.scss');


class App extends React.Component {
  render () {
    return (
      <div>
        <HeaderComponent />
        <AwesomeComponent defaultProperty="Likes"/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
