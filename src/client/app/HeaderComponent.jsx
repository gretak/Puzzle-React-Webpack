import React from 'react';
import ImgComponent from './ImgComponent.jsx';


class HeaderComponent extends React.Component {

  render() {
    var puzzle = {
      1 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/01.jpg'],
      2 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/02.jpg'],
      3 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/03.jpg'],
      4 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/04.jpg'],
      5 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/05.jpg'],
      6 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/06.jpg'],
      7 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/07.jpg'],
      8 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/08.jpg'],
      9 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/09.jpg'],
      10 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/10.jpg'],
      11 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/11.jpg'],
      12 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/12.jpg'],
      13 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/13.jpg'],
      14 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/14.jpg'],
      15 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/15.jpg'],
      16 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/16.jpg'],
      17 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/17.jpg'],
      18 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/18.jpg'],
      19 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/19.jpg'],
      20 : [ '/src/client/public/img/image.giff', '/src/client/public/img/image.gif', '/src/client/public/img/20.jpg']

    };

var images = [];
for (var i = 1; i <= 20; i++) {
  images.push(<ImgComponent image={puzzle[i]} key={i}/>);
}

    return (
      <div className="puzzle">
        {images}
      </div>
    );
  }

}

export default HeaderComponent;
