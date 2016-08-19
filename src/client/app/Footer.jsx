import React from 'react';

var img = document.createElement('img');
img.src = require('../assets/img/donot.jpg');

require('../sass/footer.scss');


class FooterComponent extends React.Component {

   constructor(props) {
     super(props);
     this.state = {link : "www.linkedin.com" };
  //   this.onLike = this.onLike.bind(this);
   }

  // onLike () {
  //   let newLikesCount = this.state.likesCount + 1;
  //   this.setState({likesCount: newLikesCount});
  // }

  render() {
    return (
      <div className="footer">
        <div className="footer__left">
                <div className="footer__left">

          <a href="{this.state.link}">link 11</a>
          <a href="{this.state.link}">link 112</a>
        </div>
                </div>

        <div className="footer__right">
          <a href="{this.state.link}">link 3</a>
          <a href="{this.state.link}">link 4</a>
          <img className="footer__logo" src="./public/img/donot.jpg"/>
        </div>
      </div>
    );
  }

}

export default FooterComponent;