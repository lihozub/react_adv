import React, {Component} from 'react';
import TestComponent2 from './TestComponent2';
import  smallPic from './assets/images/small.svg';
import  bigPic from './assets/images/big.png';

export default class TestComp extends Component {
  render() {
    return (
      <div>
        hello!
        <img src={smallPic} alt=""/>
        <img src={bigPic} alt=""/>
        <TestComponent2 />
      </div>
    )
  }
}