import React from 'react';

require('../sass/header-component.scss');


class HeaderComponent extends React.Component {

  render() {
    return (
      <div className="header">
        <img className="header-img" src="./assets/img/image.gif" />
      </div>
    );
  }

}

export default HeaderComponent;