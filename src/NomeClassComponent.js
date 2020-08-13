import React, { Component } from 'react';
//Pure Component or Class Component
class NomeClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const name = this.props.name;
    
    return(
      <div> Seu nome é: {name}</div>
    );
  }
}
export default NomeClassComponent;