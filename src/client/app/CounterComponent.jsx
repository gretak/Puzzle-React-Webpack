import React from 'react';


class CounterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div className="clickCounter">
        <div className="clickCounter__numberOfLikes">
          <img src="http://www.louiseoneillauthor.com/wp-content/uploads/2014/05/Facebook_like_thumb.png"/>
          <span>{this.state.likesCount}</span>
        </div>
        <div className="clickCounter__button">
          <button className="clickCounter__button--inner" onClick={this.onLike}>Like Me</button>
        </div>
      </div>
    );
  }

}

module.exports = CounterComponent;
