import React, { Component } from 'react';
import PeopleList from 'containers/PeopleList'
import MessagesList from 'containers/MessagesList'

export default class Chat extends Component {
  render() {
    return (
      <Provider>
        <div class="container clearfix">
          <PeopleList />
          <MessagesList />
        </div>
      </Provider>
    );
  }
}