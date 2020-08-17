import React, { Component } from 'react';
//Pure Component or Class Component
class Calculator extends Component {

  constructor(props){
    super(props);

    this.state = {
      number1: '',
      number2: '',
      operation: ''
    }
  }

  render() {
    const { number1, number2, result } = this.state;
    
    return(
      <>
        <div align="center">
          <input type="text" onChange={this.setFirstNumber} value={number1}/>
          <input type="text" onChange={this.setSecondNumber} value={number2}/>
        </div>
        <br/>
        <div align="center">
          <button onClick={this.calculate} value="+">+</button>
          <button onClick={this.calculate} value="-">-</button>
          <button onClick={this.calculate} value="/">/</button>
          <button onClick={this.calculate} value="*">*</button>
          <button onClick={this.clear}>C</button>
        </div>
        <div align="center">
          <p>Resultado: {result}</p>
        </div>
      </>
    );
  }

  setFirstNumber = (arg) => {  
    const number1 = arg.target.value;

    this.setState({
      number1
    });
  }

  setSecondNumber = (arg) => {
    const number2 = arg.target.value;

    this.setState({
      number2
    })
  }

  calculate = (arg) => {
    const { number1, number2 } = this.state;
    const operation = arg.target.value;

    const result = eval(number1 + operation + number2);

    this.setState({
      result
    })

    console.log(number1 + operation + number2);
  }

  clear = () =>{

    this.setState({
      number1: '',
      number2: '',
      result: '',
    })
  }
  
}
export default Calculator;