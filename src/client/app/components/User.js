import React from 'react';

export default class User extends React.Component {
  render(){ 

    return (
      <div>
        {this.props.name} - {this.props.email}<br/>
        {this.props.username}<br/>
      </div>
    )
  }
}