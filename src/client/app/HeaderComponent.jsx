import React from 'react';
import ImgComponent from './ImgComponent.jsx';

var img = document.createElement('img');
img.src = require('../assets/img/image.gif');

require('../sass/header-component.scss');

class HeaderComponent extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {favourite : false};
  }

  render() {
    var puzzle = {
      1 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      2 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      3 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      4 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      5 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      6 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      7 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      8 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      9 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif'],
      10 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif']
    };

var images = [];
for (var i = 1; i <= 10; i++) {
  images.push(<ImgComponent image={puzzle[i]} />);
}
console.log(puzzle)

    return (
      <div className="header">
        {images}
      </div>
    );
  }

}

export default HeaderComponent;
