import React from 'react';
import FooterItemComponent from './FooterItemComponent.jsx';


class FooterComponent extends React.Component {

 constructor(props) {
   super(props);
 }

  render() {
    return (
      <div>
          <div id='Contact' className='footer'>
            <div className='footer__left'>
            <FooterItemComponent linkDestination="http://www.cohaesus.co.uk" linkDescription="I am the link"/>
            <FooterItemComponent linkDescription="I am text"/>
            <p className='footer-item'>Phone number {this.props.number}</p>
            </div>

            <div className='footer__right'>
            <FooterItemComponent linkDestination="http://www.cohaesus.co.uk" linkDescription="I am the link"/>
            <FooterItemComponent linkDestination="http://www.cohaesus.co.uk" linkDescription="I am the link 2"/>
            </div>
          </div>
      </div>
    );
  }

}

export default FooterComponent;
