//Component can be used as a link or plain text,
//has two properties linkDestination or linkDescription.
import React from 'react';

class FooterItemComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: 1
      };
    this._addByOne = this._addByOne.bind(this);
    }

    _addByOne() {
      this.setState ({
        value : this.state.value + 1
      });
    }


  render () {
    // if is the link
    if (this.props.linkDestination) {
    return (
      <p className='footer-item'>
      <a href={this.props.linkDestination}><u>{this.props.linkDescription}</u></a>
      </p>
      )
    } 
    // if no link only text
    else {
    return (
      <div>
      <p>{this.state.value}</p>
      <p className='footer-item'>
      {this.props.linkDescription}
      </p>
      <button onClick={this._addByOne}>Click me</button>
      </div>
      )
    }
  }
}

export default FooterItemComponent;

