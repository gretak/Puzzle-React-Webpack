//Component can be used as a link or plain text,
//has two properties linkDestination or linkDescription.
import React from 'react';

class FooterItemComponent extends React.Component {

  render () {
    //if is the link
    if (this.props.linkDestination) {
    return (
      <p className='footer-item'>
      <a href={this.props.linkDestination}><u>{this.props.linkDescription}</u></a>
      </p>
      )
    } 
   //if no link only text
    else {
    return (
      <p className='footer-item'>
      {this.props.linkDescription}
      </p>
      )
    }
  }
}

export default FooterItemComponent;

