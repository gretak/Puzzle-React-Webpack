import React from 'react';
import HeaderComponent from './HeaderComponent.jsx';



class ImgComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      if (this.state.index == this.props.image.length-1) {
        this.setState({
          index: 0
        }); 
        return;
      }
      let index = this.state.index+1;
      this.setState({
        index: index
      });
  }


  render() {
    //replacing index numbers in array
    this.props.handleResult(this.props.index-1, this.state.index);


    return (
        <img onClick={this.handleClick} src={this.props.image[this.state.index]} className={this.props.ImgClass} />
    )
  }
}

module.exports = ImgComponent;
