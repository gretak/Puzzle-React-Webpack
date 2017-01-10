import React from 'react';
import ImgComponent from './ImgComponent.jsx';

class HeaderComponent extends React.Component {

constructor(props) {
    super(props);
    this.state = { preloader: true};
    this.handleResult = this.handleResult.bind(this);
    this.arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    this.puzzle = {
      1 : [ '/src/client/public/img/iceberg/iceberg_01.jpg', '/src/client/public/img/snow/snow_01.jpg', '/src/client/public/img/01.jpg'],
      2 : [ '/src/client/public/img/snow/snow_02.jpg', '/src/client/public/img/iceberg/iceberg_02.jpg', '/src/client/public/img/02.jpg'],
      3 : [ '/src/client/public/img/iceberg/iceberg_03.jpg', '/src/client/public/img/03.jpg', '/src/client/public/img/snow/snow_03.jpg'],
      4 : [ '/src/client/public/img/snow/snow_04.jpg', '/src/client/public/img/iceberg/iceberg_04.jpg', '/src/client/public/img/04.jpg'],
      5 : [ '/src/client/public/img/05.jpg', '/src/client/public/img/snow/snow_05.jpg', '/src/client/public/img/iceberg/iceberg_05.jpg'],
      6 : [ '/src/client/public/img/06.jpg', '/src/client/public/img/iceberg/iceberg_06.jpg', '/src/client/public/img/snow/snow_06.jpg'],
      7 : [ '/src/client/public/img/iceberg/iceberg_07.jpg', '/src/client/public/img/07.jpg', '/src/client/public/img/snow/snow_07.jpg'],
      8 : [ '/src/client/public/img/08.jpg', '/src/client/public/img/snow/snow_08.jpg', '/src/client/public/img/iceberg/iceberg_08.jpg'],
      9 : [ '/src/client/public/img/iceberg/iceberg_09.jpg', '/src/client/public/img/snow/snow_09.jpg', '/src/client/public/img/09.jpg'],
      10 : [ '/src/client/public/img/snow/snow_10.jpg', '/src/client/public/img/10.jpg', '/src/client/public/img/iceberg/iceberg_10.jpg'],
      11 : [ '/src/client/public/img/iceberg/iceberg_11.jpg', '/src/client/public/img/snow/snow_11.jpg', '/src/client/public/img/11.jpg'],
      12 : [ '/src/client/public/img/12.jpg', '/src/client/public/img/snow/snow_12.jpg', '/src/client/public/img/iceberg/iceberg_12.jpg'],
      13 : [ '/src/client/public/img/iceberg/iceberg_13.jpg', '/src/client/public/img/snow/snow_13.jpg', '/src/client/public/img/13.jpg'],
      14 : [ '/src/client/public/img/snow/snow_14.jpg', '/src/client/public/img/14.jpg', '/src/client/public/img/iceberg/iceberg_14.jpg'],
      15 : [ '/src/client/public/img/15.jpg','/src/client/public/img/iceberg/iceberg_15.jpg', '/src/client/public/img/snow/snow_15.jpg'],
      16 : [ '/src/client/public/img/snow/snow_16.jpg', '/src/client/public/img/iceberg/iceberg_16.jpg', '/src/client/public/img/16.jpg'],
      17 : [  '/src/client/public/img/17.jpg', '/src/client/public/img/iceberg/iceberg_17.jpg', '/src/client/public/img/snow/snow_17.jpg'],
      18 : [ '/src/client/public/img/iceberg/iceberg_18.jpg', '/src/client/public/img/snow/snow_18.jpg', '/src/client/public/img/18.jpg'],
      19 : [ '/src/client/public/img/19.jpg', '/src/client/public/img/iceberg/iceberg_19.jpg', '/src/client/public/img/snow/snow_19.jpg'],
      20 : [ '/src/client/public/img/snow/snow_20.jpg', '/src/client/public/img/iceberg/iceberg_20.jpg', '/src/client/public/img/20.jpg']
    };
  }

  componentDidMount () {
    setTimeout( () => {
            this.setState({
                preloader: false
            })
        }, 800);
  }

    handleResult(key, val) {

//should be key
      this.arr[key] = val;
      console.log(key, val, this.arr);
      //let greta = Object.values(this.puzzle)[0][0];
      //let greta1 = Object.values(this.puzzle)[1][1];
      //let greta2 = Object.values(this.puzzle)[2][0];
      //console.log(this.props.image[this.state.index])

      //if (greta && greta1 && greta2) {
      //  console.log('success')
        //alert('Success')
        // loop throw indexes and compare if they are matching the required ones
      //}
      //console.log(this.i);
    }


  render() {

  const preloader= this.state.preloader;


  var images = [];

  for (var i = 1; i <= 20; i++) {
    images.push(<ImgComponent handleResult={this.handleResult} image={this.puzzle[i]} index={i} key={i}/>);
  }
  console.log(images)


//console.log(Object.values(images));
// var Objectt = [];
// for (var i=0; i<images.length; i++) {
//   console.log(images.length)
//   Object.values(images)
//   Objectt.push(Object.values(images[0]))
//   console.log(Object.values(images[i]))
   // console.log(Objectt)
//}

    return (
      <div onClick={this.handleResult} className="puzzle" className = { preloader? 'puzzle' : 'puzzle_fading'}>
        {images}
      </div>
    );
  }

}

export default HeaderComponent;
