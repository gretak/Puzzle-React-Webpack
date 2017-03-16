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
       pathname: '/leveltwo/'
       })
      }
      if (this.props.level == 30) {
       this.context.router.push({
       pathname: '/levelthree/'
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

    return (
      <div className='clickCounter'>
        <div className='clickCounter__button'>
          <button className='clickCounter__button--inner-green' onClick={this.onClickNextLevel}>{this.props.buttonText}</button>
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
