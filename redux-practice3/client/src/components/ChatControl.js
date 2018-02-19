import React, {Component} from 'react';

export default class ChatControl extends Component {
  render() {
    return (
      <div class="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
        <button>Send</button>
      </div>
    );
  }
}