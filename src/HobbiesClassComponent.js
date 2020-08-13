import React, { Component } from 'react';
//Pure Component or Class Component
class NomeClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const hobbies = this.props = {
        hobbie1: this.props.hobby1,
        hobbie2: this.props.hobby2,
        hobbie3: this.props.hobby3,
    }
    
    return(        
      <div> Seus hobbies são: {Object.values(hobbies) + "."}</div>
    );
  }
}
export default NomeClassComponent;