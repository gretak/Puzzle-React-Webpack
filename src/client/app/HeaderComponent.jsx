import React from 'react';

var img = document.createElement('img');
img.src = require('../assets/img/image.gif');



class HeaderComponent extends React.Component {

  render() {
    return (
      <div className="header">
        <img className="header-img" src="./public/img/image.gif" />
      </div>
    );
  }

}

export default HeaderComponent;