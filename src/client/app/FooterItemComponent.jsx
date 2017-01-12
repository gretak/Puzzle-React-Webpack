//Component can be used as a link or plain text,
//has two properties linkDestination or linkDescription.
import React from 'react';

class FooterItemComponent extends React.Component {

  render () {
    //if is the link
    if (this.props.linkDestination) {
    return (
      <a href={this.props.linkDestination}><u>{this.props.linkDescription}</u></a>
      )
    } 
   //if no link only text
    else {
    return (
      <span>{this.props.linkDescription}</span>
      )
    }
  }
}

export default FooterItemComponent;

