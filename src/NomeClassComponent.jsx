import React, { Component } from 'react';
//Pure Component or Class Component
class NomeClassComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'Rafael',
    }
  }
  render() {
    const { name } = this.state;
    
    return(
      <div>
        <div> Seu nome é: {name}</div>
        <button onClick={this.changeName}>Mudar nome</button>
      </div>
    );
  }

  changeName = () => {
    this.setState({
      name: 'Fabio',
    })
  }
}
export default NomeClassComponent;