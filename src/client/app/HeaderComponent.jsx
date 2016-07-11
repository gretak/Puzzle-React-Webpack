import React from 'react';

class HeaderComponent extends React.Component {

  // onLike () {
  //   let newLikesCount = this.state.likesCount + 1;
  //   this.setState({likesCount: newLikesCount});
  // }

  render() {
    return (
      <div className="header">
        <img className="header-img" src="http://grfx.cstv.com/schools/conn/graphics/conn-09-btm-logo-img.gif" />
      </div>
    );
  }

}

export default HeaderComponent;