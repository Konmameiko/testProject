import React, { Component } from 'react';

export default class message extends Component<any, any> {
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <ul>
          <li>test01-message</li>
          <li>test02-message</li>
          <li>test03-message</li>
        </ul>
      </div>
    );
  }
}
