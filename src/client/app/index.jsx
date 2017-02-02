import React from 'react';
import {render} from 'react-dom';
import CounterComponent from './CounterComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './Footer.jsx';
import NavigationComponent from './NavigationComponent.jsx';
import routes from './routes.js';
import WelcomeComponent from './WelcomeComponent.jsx';
import InfoComponent from './InfoComponent.jsx';


require('../sass/base-style.scss');
require('../sass/welcome.scss');
require('../sass/header-component.scss');
require('../sass/counter-component.scss');
require('../sass/footer.scss');
require('../sass/navigation.scss');
require('../sass/infobox.scss');


class App extends React.Component {
  render () {
    return (
      <div>
        {routes}
      <FooterComponent/>
      </div>
    );
  }
}

render(<App/>,
  document.getElementById('app')
);
