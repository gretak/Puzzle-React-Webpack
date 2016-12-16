import React from 'react';

var img = document.createElement('img');
img.src = require('../assets/img/donot.jpg');

require('../sass/footer.scss');


class FooterComponent extends React.Component {

 constructor(props) {
   super(props);
   this.state = {link : 'http://www.linkedin.com' };
 }

render() {
  return (
    <div id='contact' className='footer'>
      <div className='footer__left'>
        <p>Address</p>
        <p>Phone number</p>
      </div>

      <div className='footer__right'>
        <a href={this.state.link}>Find out more</a>
        <img className='footer__logo' src='/src/client/public/img/donot.jpg'/>
      </div>
    </div>
    );
}

}

export default FooterComponent;