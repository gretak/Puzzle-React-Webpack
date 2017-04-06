import React, {PropTypes} from 'react';
import { FacebookButton, FacebookCount } from 'react-social';


class CounterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onClickNextLevel = this.onClickNextLevel.bind(this);
  }

  onClickNextLevel () {
    console.log('level 2');
    console.log(this.props.level);
      if (this.props.level == 20) {
       this.context.router.push({
       pathname: '/level/30'
       })
      }
      if (this.props.level == 30) {
       this.context.router.push({
       pathname: '/level/48'
       })
      }
      if (this.props.level == 48) {
       this.context.router.push({
       pathname: '/'
       })
      }
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }


  render() {

    let url = 'http://gretakava.6te.net/puzzle';
    let appId = 229484597460287;// get from facebook developers account
   let lastLevel = false;

    // //check if the last level
    // if (currentLevel == 48) {
    //   lastLevel = true;
    // }

    //{ lastLevel? 'Next level' : 'Start again!' 

    return (
      <div className='clickCounter'>
        <div className='clickCounter__button'>
          <button className='clickCounter__button--inner-green' onClick={this.onClickNextLevel}>button</button>
        </div>
        <div className='clickCounter__button'>
          <FacebookButton  className='clickCounter__button--inner' message='Check the puzzle game!' url={url} appId={appId}>
            {'Share'}
          </FacebookButton>
        </div>
      </div>
    );
  }
}

export default CounterComponent;
