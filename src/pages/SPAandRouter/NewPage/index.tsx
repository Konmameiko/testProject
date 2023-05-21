import React, { Component } from 'react';

class newPage extends Component<any, any> {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <p>{this.props.location.state}</p> */}
        <p>123123121</p>
        <h1>age:{this.props.match.params.age}</h1>
        <h1>name:{this.props.match.params.name}</h1>
      </div>
    );
  }
}

export default newPage;
