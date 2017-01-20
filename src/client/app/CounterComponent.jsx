import React, {PropTypes} from 'react';
import { FacebookButton, FacebookCount } from "react-social";



class CounterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onClickNextLevel = this.onClickNextLevel.bind(this);
  }

    //const router = this.context.router;


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
    //let newLikesCount = this.state.likesCount + 1;
    //this.setState({likesCount: newLikesCount});
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {

    let url = "http://gretakava.6te.net/puzzle";
    let appId = 229484597460287;// get from facebook developers

    return (
      <div className="clickCounter">
        <div className="clickCounter__button">
          <button className="clickCounter__button--inner" onClick={this.onClickNextLevel}>Move next</button>
        </div>
        <div className="clickCounter__button">
          <FacebookButton  className="clickCounter__button--inner" message="Check the puzzle game!" url={url} appId={appId}>
            {"Share"}
          </FacebookButton>
        </div>
      </div>
    );
  }

}

module.exports = CounterComponent;
