import React, {PropTypes} from 'react';
//import FacebookProvider, { Share } from 'react-facebook';
import { FacebookButton, FacebookCount } from "react-social";



class CounterComponent extends React.Component {

  constructor(props) {
    super(props);
    //this.state = {likesCount : 0};
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

        let url = "https://gretakava.6te.net/puzzle";
        //let url = window.location;
        let appId = 229484597460287;

    return (
      <div className="clickCounter">
        <div className="clickCounter__button">
          <button className="clickCounter__button--inner" onClick={this.onClickNextLevel}>Share</button>
        </div>


        <FacebookButton url={url} appId={appId}>
        <FacebookCount url={url} />
        {" Share " + url}
        </FacebookButton>


        <div className="clickCounter__button">
          <button className="clickCounter__button--inner" onClick={this.onClickNextLevel}>Move to next level</button>
        </div>
      </div>
    );
  }

}

module.exports = CounterComponent;
