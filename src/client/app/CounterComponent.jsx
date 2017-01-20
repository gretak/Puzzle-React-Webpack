import React, {PropTypes} from 'react';

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
    return (
      <div className="clickCounter">
        <div className="clickCounter__button">
          <button className="clickCounter__button--inner" onClick={this.onClickNextLevel}>Share</button>
        </div>
        <div className="clickCounter__button">
          <button className="clickCounter__button--inner" onClick={this.onClickNextLevel}>Move to next level</button>
        </div>
      </div>
    );
  }

}

module.exports = CounterComponent;
