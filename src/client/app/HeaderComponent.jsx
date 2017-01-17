import React, {PropTypes} from 'react';
import ImgComponent from './ImgComponent.jsx';
//import routes from './routes.js';


class HeaderComponent extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      preloader: true
    };
    this.handleResult = this.handleResult.bind(this);
    this.arr = [];
    this.puzzleLevelOne = {
      1 : [ './img/iceberg/iceberg_01.jpg', './img/snow/snow_01.jpg', './img/01.jpg'],
      2 : [ './img/snow/snow_02.jpg', './img/iceberg/iceberg_02.jpg', './img/02.jpg'],
      3 : [ './img/iceberg/iceberg_03.jpg', './img/03.jpg', './img/snow/snow_03.jpg'],
      4 : [ './img/snow/snow_04.jpg', './img/iceberg/iceberg_04.jpg', './img/04.jpg'],
      5 : [ './img/05.jpg', './img/snow/snow_05.jpg', './img/iceberg/iceberg_05.jpg'],
      6 : [ './img/06.jpg', './img/iceberg/iceberg_06.jpg', './img/snow/snow_06.jpg'],
      7 : [ './img/iceberg/iceberg_07.jpg', './img/07.jpg', './img/snow/snow_07.jpg'],
      8 : [ './img/08.jpg', './img/snow/snow_08.jpg', './img/iceberg/iceberg_08.jpg'],
      9 : [ './img/iceberg/iceberg_09.jpg', './img/snow/snow_09.jpg', './img/09.jpg'],
      10 : [ './img/snow/snow_10.jpg', './img/10.jpg', './img/iceberg/iceberg_10.jpg'],
      11 : [ './img/iceberg/iceberg_11.jpg', './img/snow/snow_11.jpg', './img/11.jpg'],
      12 : [ './img/12.jpg', './img/snow/snow_12.jpg', './img/iceberg/iceberg_12.jpg'],
      13 : [ './img/iceberg/iceberg_13.jpg', './img/snow/snow_13.jpg', './img/13.jpg'],
      14 : [ './img/snow/snow_14.jpg', './img/14.jpg', './img/iceberg/iceberg_14.jpg'],
      15 : [ './img/15.jpg','./img/iceberg/iceberg_15.jpg', './img/snow/snow_15.jpg'],
      16 : [ './img/snow/snow_16.jpg', './img/iceberg/iceberg_16.jpg', './img/16.jpg'],
      17 : [  './img/17.jpg', './img/iceberg/iceberg_17.jpg', './img/snow/snow_17.jpg'],
      18 : [ './img/iceberg/iceberg_18.jpg', './img/snow/snow_18.jpg', './img/18.jpg'],
      19 : [ './img/19.jpg', './img/iceberg/iceberg_19.jpg', './img/snow/snow_19.jpg'],
      20 : [ './img/snow/snow_20.jpg', './img/iceberg/iceberg_20.jpg', './img/20.jpg']
    };

    this.puzzleLevelTwo = {
      1 : [ './img/opt/opt_01.jpg', './img/panda/panda_01.jpg', './img/kitty/kitty_01.jpg'],
      2 : [ './img/panda/panda_02.jpg', './img/opt/opt_02.jpg', './img/kitty/kitty_02.jpg'],
      3 : [ './img/kitty/kitty_03.jpg', './img/panda/panda_03.jpg', './img/opt/opt_03.jpg'],
      4 : [ './img/opt/opt_04.jpg', './img/panda/panda_04.jpg', './img/kitty/kitty_04.jpg'],
      5 : [ './img/panda/panda_05.jpg', './img/opt/opt_05.jpg', './img/kitty/kitty_05.jpg'],
      6 : [ './img/kitty/kitty_06.jpg', './img/panda/panda_06.jpg', './img/opt/opt_06.jpg'],
      7 : [ './img/opt/opt_07.jpg', './img/panda/panda_07.jpg', './img/kitty/kitty_07.jpg'],
      8 : [ './img/kitty/kitty_08.jpg', './img/opt/opt_08.jpg', './img/panda/panda_08.jpg'],
      9 : [ './img/panda/panda_09.jpg', './img/opt/opt_09.jpg', './img/kitty/kitty_09.jpg'],
      10 : [ './img/kitty/kitty_10.jpg', './img/opt/opt_10.jpg', './img/panda/panda_10.jpg'],
      11 : [ './img/opt/opt_11.jpg', './img/panda/panda_11.jpg', './img/kitty/kitty_11.jpg'],
      12 : [ './img/panda/panda_12.jpg', './img/kitty/kitty_12.jpg', './img/opt/opt_12.jpg'],
      13 : [ './img/kitty/kitty_13.jpg', './img/opt/opt_13.jpg', './img/panda/panda_13.jpg'],
      14 : [ './img/opt/opt_14.jpg', './img/panda/panda_14.jpg', './img/kitty/kitty_14.jpg'],
      15 : [ './img/kitty/kitty_15.jpg','./img/opt/opt_15.jpg', './img/panda/panda_15.jpg'],
      16 : [ './img/panda/panda_16.jpg', './img/kitty/kitty_16.jpg', './img/opt/opt_16.jpg'],
      17 : [  './img/opt/opt_17.jpg', './img/panda/panda_17.jpg', './img/kitty/kitty_17.jpg'],
      18 : [ './img/kitty/kitty_18.jpg', './img/opt/opt_18.jpg', './img/panda/panda_18.jpg'],
      19 : [ './img/panda/panda_19.jpg', './img/kitty/kitty_19.jpg', './img/opt/opt_19.jpg'],
      20 : [ './img/opt/opt_20.jpg', './img/kitty/kitty_20.jpg', './img/panda/panda_20.jpg'],
      21 : [ './img/panda/panda_21.jpg', './img/opt/opt_21.jpg', './img/kitty/kitty_21.jpg'],
      22 : [ './img/kitty/kitty_22.jpg', './img/panda/panda_22.jpg', './img/opt/opt_22.jpg'],
      23 : [ './img/opt/opt_23.jpg', './img/kitty/kitty_23.jpg', './img/panda/panda_23.jpg'],
      24 : [ './img/panda/panda_24.jpg', './img/opt/opt_24.jpg', './img/kitty/kitty_24.jpg'],
      25 : [ './img/kitty/kitty_25.jpg', './img/panda/panda_25.jpg', './img/opt/opt_25.jpg'],
      26 : [ './img/kitty/kitty_26.jpg', './img/opt/opt_26.jpg', './img/panda/panda_26.jpg'],
      27 : [ './img/opt/opt_27.jpg', './img/panda/panda_27.jpg', './img/kitty/kitty_27.jpg'],
      28 : [ './img/panda/panda_28.jpg', './img/opt/opt_28.jpg', './img/kitty/kitty_28.jpg'],
      29 : [ './img/kitty/kitty_29.jpg', './img/panda/panda_29.jpg', './img/opt/opt_29.jpg'],
      30 : [ './img/opt/opt_30.jpg', './img/kitty/kitty_30.jpg', './img/panda/panda_30.jpg'],
      31 : [ './img/panda/panda_31.jpg', './img/opt/opt_31.jpg', './img/kitty/kitty_31.jpg'],
      32 : [ './img/opt/opt_32.jpg', './img/panda/panda_32.jpg', './img/kitty/kitty_32.jpg'],
      33 : [ './img/panda/panda_33.jpg', './img/kitty/kitty_33.jpg', './img/opt/opt_33.jpg'],
      34 : [ './img/kitty/kitty_34.jpg', './img/opt/opt_34.jpg', './img/panda/panda_34.jpg'],
      35 : [ './img/opt/opt_35.jpg', './img/panda/panda_35.jpg', './img/kitty/kitty_35.jpg'],
      36 : [ './img/panda/panda_36.jpg', './img/kitty/kitty_36.jpg', './img/opt/opt_36.jpg'],
      37 : [ './img/kitty/kitty_37.jpg', './img/opt/opt_37.jpg', './img/panda/panda_37.jpg'],
      38 : [ './img/opt/opt_38.jpg', './img/panda/panda_38.jpg', './img/kitty/kitty_38.jpg'],
      39 : [ './img/kitty/kitty_39.jpg', './img/opt/opt_39.jpg', './img/panda/panda_39.jpg'],
      40 : [ './img/panda/panda_40.jpg', './img/kitty/kitty_40.jpg', './img/opt/opt_40.jpg'],
      41 : [ './img/opt/opt_41.jpg', './img/panda/panda_41.jpg', './img/kitty/kitty_41.jpg'],
      42 : [ './img/kitty/kitty_42.jpg', './img/opt/opt_42.jpg', './img/panda/panda_42.jpg'],
      43 : [ './img/panda/panda_43.jpg', './img/kitty/kitty_43.jpg', './img/opt/opt_43.jpg'],
      44 : [ './img/opt/opt_44.jpg', './img/kitty/kitty_44.jpg', './img/panda/panda_44.jpg'],
      45 : [ './img/panda/panda_45.jpg', './img/opt/opt_45.jpg', './img/kitty/kitty_45.jpg'],
      46 : [ './img/kitty/kitty_46.jpg', './img/panda/panda_46.jpg', './img/opt/opt_46.jpg'],
      47 : [ './img/opt/opt_47.jpg', './img/panda/panda_47.jpg', './img/kitty/kitty_47.jpg'],
      48 : [ './img/panda/panda_48.jpg', './img/opt/opt_48.jpg', './img/kitty/kitty_48.jpg']
    };
  }

  componentWillMount () {
    setTimeout( () => {
      this.setState({
        preloader: false
      })
    }, 600);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }


  //   handleSubmitUser () {
  //   this.context.router.push({
  //     pathname: '/news'
  //   });
  // }

  handleResult(key, val) {

    this.arr[key] = val;

//level 1
    const icebergArray = [0,1,0,1,2,1,0,2,0,2,0,2,0,2,1,1,1,0,1,1];
    const christmasArray = [2,2,1,2,0,0,1,0,2,1,2,0,2,1,0,2,0,2,0,2];
    const snowArray = [1,0,2,0,1,2,2,1,1,0,1,1,1,0,2,0,2,1,2,0];

//level 2
    const kitty = [2, 2, 0, 2, 2, 0, 2, 0, 2, 0, 2, 1, 0, 2, 0, 1, 2, 0, 1, 1, 2, 0, 1, 2, 0, 0, 2, 2, 0, 1, 2, 2, 1, 0, 2, 1, 0, 2, 0, 1, 2, 0, 1, 1, 2, 0, 2, 2];
    const opt = [0, 1, 2, 0, 1, 2, 0, 0, 1, 1, 0, 2, 1, 0, 1, 1, 0, 1, 2, 0, 1, 2, 0, 1, 2, 1, 0, 1, 2, 0, 1, 0, 2, 1, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1];
    const panda = [1, 0, 1, 1, 0, 1, 1, 2, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 0, 2, 0, 1, 2, 0, 1, 2, 1, 0, 1, 2, 0, 1, 0, 2, 1, 0, 2, 1, 2, 0, 1, 2, 0, 2, 0, 1, 1, 0];

    const Iceberg = arraysEqual(icebergArray,this.arr);
    const Christmas = arraysEqual(christmasArray,this.arr);
    const Snow = arraysEqual(snowArray,this.arr);

    const Kitty = arraysEqual(kitty,this.arr);
    const Opt = arraysEqual(opt,this.arr);
    const Panda = arraysEqual(panda,this.arr);


    console.log(this.arr)

    if (Iceberg || Snow || Christmas) {
       setTimeout( function () 
         {
          alert( 'You unlocked level 2' );
         }, 300 );
      console.log('unlock the next level');
       this.context.router.push({
       pathname: '/news'
       })
    }
    if (Kitty || Opt || Panda) {
      setTimeout( function () 
         {
          alert( 'You finished the game' );
         }, 300 );
    }

    //helper arraysEqual function
    function arraysEqual(a1, a2) {
      for (var i = a1.length; i--;) {
        if (a1[i] !== a2[i])
          return false;
      }
      return true;
    }
  }


  render() {
  const router = this.context.router;

  const preloader= this.state.preloader;

  const images = [];

  for (var i = 1; i <= this.props.imgNumber; i++) {
    images.push(<ImgComponent handleResult={this.handleResult} image={this[this.props.puzzleLevel][i]} index={i} key={i} ImgClass={this.props.puzzleClass}/>);
  console.log()
  }

    return ( 
      <div>
      <div className="puzzle" className = { preloader? 'puzzle' : 'puzzle_fading'}>
        {images}
      </div>
      </div>
    );
  }

}

module.exports = HeaderComponent;
