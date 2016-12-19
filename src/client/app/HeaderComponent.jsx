import React from 'react';

var img = document.createElement('img');
img.src = require('../assets/img/image.gif');

require('../sass/header-component.scss');




class HeaderComponent extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {favourite1 : false};
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
    this.handleClick8 = this.handleClick8.bind(this);
    this.handleClick9 = this.handleClick9.bind(this);
    this.handleClick10 = this.handleClick10.bind(this);
  }


  handleClick1 () {
    this.setState({favourite1: !this.state.favourite1});
  }
  handleClick2 () {
    this.setState({favourite2: !this.state.favourite2});
  }
  handleClick3 () {
    this.setState({favourite3: !this.state.favourite3});
  }
  handleClick4 () {
    this.setState({favourite4: !this.state.favourite4});
  }
  handleClick5 () {
    this.setState({favourite5: !this.state.favourite5});
  }
  handleClick6 () {
    this.setState({favourite6: !this.state.favourite6});
  }
  handleClick7 () {
    this.setState({favourite7: !this.state.favourite7});
  }
  handleClick8 () {
    this.setState({favourite8: !this.state.favourite8});
  }
  handleClick9 () {
    this.setState({favourite9: !this.state.favourite9});
  }
  handleClick10 () {
    this.setState({favourite10: !this.state.favourite10});
  }

  render() {
    var puzzle1 = this.state.favourite1 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle2 = this.state.favourite2 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle3 = this.state.favourite3 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle4 = this.state.favourite4 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle5 = this.state.favourite5 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle6 = this.state.favourite6 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle7 = this.state.favourite7 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle8 = this.state.favourite8 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle9 = this.state.favourite9 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';
    var puzzle10 = this.state.favourite10 ? '/src/client/public/img/image.giff' : '/src/client/public/img/image.gif';

var images = [];
for (var i = 0; i < 10; i++) {
  images.push(<img onClick={this.handleClick1} src={puzzle1} className="header_img"/>);
}
console.log(images)

    return (
      <div className="header">
      {images}
      </div>
    );
  }

}

export default HeaderComponent;
