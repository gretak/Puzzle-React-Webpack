import React from 'react';

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
          <a href="{this.state.link}">link 1</a>
          <a href="{this.state.link}">link 2</a>
        </div>
        <div className="footer__right">
          <a href="{this.state.link}">link 3</a>
          <a href="{this.state.link}">link 4</a>
          <img className="footer__logo" src="./assets/img/donot.jpg"/>
        </div>
      </div>
    );
  }

}

export default FooterComponent;