import React, { Component } from 'react';
import hocLoader from './hocLoader';

class HocChild extends Component {
  render() {
    const { currency } = this.props;

    return (
      <div>
        As of: {currency.date}
        <br />
        1 USD = {currency.rates['EUR']} EUR
        <br />
        1 USD = {currency.rates['UAH']} UAH

        <br /><br />
        Time: {this.props.timeDiff}s
      </div>
    );
  }
}

export default hocLoader('currency')('https://68.media.tumblr.com/tumblr_mdkoyttBGV1rgpyeqo1_500.gif')(HocChild);