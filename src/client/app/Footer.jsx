import React from 'react';
import FooterItemComponent from './FooterItemComponent.jsx';


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
          <FooterItemComponent linkDestination="http://www.cohaesus.co.uk" linkDescription="I am the link"/>
        </p>
        <p>
          <FooterItemComponent linkDescription="I am the text"/>
        </p>
        <p>Phone number {this.props.number}</p>
      </div>

      <div className='footer__right'>
        <p>
          <FooterItemComponent linkDestination="http://www.cohaesus.co.uk" linkDescription="I am the link"/>
        </p>
        <p>
          <FooterItemComponent linkDestination="http://www.cohaesus.co.uk" linkDescription="I am the link 2"/>
        </p>
        <p>
          <FooterItemComponent linkDestination="http://www.cohaesus.co.uk" linkDescription="I am the link 3"/>
        </p>
      </div>
    </div>
    );
}

}

export default FooterComponent;