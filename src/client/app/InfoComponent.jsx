import React, {PropTypes} from 'react';


class InfoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.state = {
      display: true
    };
  }

  onClose () {
    this.setState({
        display : false
      })
    console.log(this.state.display);
  }

 

  render() {
    //console.log(this.props.imgNumber);


    return (
      <div className = { this.state.display? 'Infobox display' : 'Infobox no-display'}>
        <div className ="InfoBox-text">
          Click{' '+this.props.imgNumber+' '}squares to show a single image
        </div>
        <div className ="InfoBox-button" onClick={this.onClose}>
          <span>
          &#x274E;
          </span>
        </div>
      </div>
    );
  }
}

export default InfoComponent;
