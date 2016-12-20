import React from 'react';
import ImgComponent from './ImgComponent.jsx';

//var img = document.createElement('img');
//img.src = require('../assets/img/image.gif');

//var img = document.createElement('img');
//img.src = require('../assets/img/17.png');

class HeaderComponent extends React.Component {

  render() {
    var puzzle = {
      1 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      2 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      3 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      4 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      5 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      6 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      7 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      8 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      9 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      10 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      11 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      12 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      13 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      14 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      15 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      16 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.png'],
      17 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/17.png'],
      18 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/18.png'],
      19 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/19.png'],
      20 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/20.png']

    };

var images = [];
for (var i = 1; i <= 20; i++) {
  images.push(<ImgComponent image={puzzle[i]} />);
}
console.log(puzzle)

    return (
      <div className="puzzle">
        {images}
      </div>
    );
  }

}

export default HeaderComponent;
