import React from 'react';


class FooterComponent extends React.Component {

 constructor(props) {
   super(props);
   this.state = {link : 'http://www.linkedin.com' };
 }

render() {
  return (
    <div id='contact' className='footer'>
      <div className='footer__left'>
        <p>
        <a href={this.state.link}>Address</a>
        </p>
        <p>Phone number</p>
        <p>Phone number</p>
      </div>

      <div className='footer__right'>
        <p>
        <a href={this.state.link}>Find out more</a>
        </p>
        <p>
        <a href={this.state.link}>Find out more</a>
        </p>
      </div>
    </div>
    );
}

}

export default FooterComponent;