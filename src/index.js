import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NomeClassComponent from './NomeClassComponent';
import EnderecoClassComponent from './EnderecoClassComponent';
import HobbiesClassComponent from './HobbiesClassComponent';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  
  <React.StrictMode>
    <NomeClassComponent name='Fábio'/>
    <EnderecoClassComponent address='Rua Doutor Alfredo Zacharias, 1510 Casa 93'/>
    <HobbiesClassComponent hobby1='Dormir' hobby2='Jogar' hobby3='Ver filme'/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();