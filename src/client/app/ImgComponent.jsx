import React from 'react';

var img = document.createElement('img');
img.src = require('../assets/img/image.gif');

require('../sass/header-component.scss');

class ImgComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      if (this.state.index === this.props.image.length - 1) {
        this.setState({
          index: 0
        }); 
        return;
      }
      let index = this.state.index + 1;
      this.setState({
        index: index
      });
  }

  render() {

    return (
      <div>
        <img onClick={this.handleClick} src={this.props.image[this.state.index]} className="header_img"/>
      </div>
    )
  }
}


export default ImgComponent;
