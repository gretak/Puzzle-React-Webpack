import React from 'react';


class ImgComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.handleClick = this.handleClick.bind(this);
    //this.handleResult = this.handleResult.bind(this);
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
       console.log(this.props.index, this.state.index);
      this.props.handleResult(this.props.index, this.state.index);

  }


  render() {
//       var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// //should be key
//       arr[this.props.index] = this.state.index;

//       console.log(arr);

      //icebergCorrectArray = [0,1,2,2,1,0,1,2,2,1,0,1,2,2,1,0,1,2,2,1];
      //if(arr == icebergCorrectArray) {
      //console.log("its an image")
      //}


    return (
        <img onClick={this.handleClick}  src={this.props.image[this.state.index]} className='puzzle_img'/>
    )
  }
}


export default ImgComponent;
