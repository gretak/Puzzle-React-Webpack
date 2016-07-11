import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';

require('./style.scss');


class App extends React.Component {
  render () {
    return (
      <div>
        <HeaderComponent />
        <p> Hello React test test!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
