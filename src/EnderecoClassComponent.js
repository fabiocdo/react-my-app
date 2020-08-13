import React, { Component } from 'react';
//Pure Component or Class Component
class EnderecoClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const address = this.props.address;
    
    return(
      <div> Seu endereço é: {address}</div>
    );
  }
}
export default EnderecoClassComponent;