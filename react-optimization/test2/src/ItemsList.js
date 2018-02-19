import React, { Component } from 'react';
import { whyDidYouUpdate } from 'why-did-you-update';

whyDidYouUpdate(React);

export default class ItemsList extends Component {
  render() {
    console.log('list re-rendered');
    return (
      <ul>
        {this.props.items.map(i => <li key={i.id}>{i.value}</li>)}
      </ul>
    );
  }
}