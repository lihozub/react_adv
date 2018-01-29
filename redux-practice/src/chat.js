import React, {Component} from 'react';
import { connect } from 'react-redux';
import Messages from './messages';
import Users from './users';
import { bindActionCreators } from 'redux';
import { addNewUser, newMessage } from "./actions";
import './assets/styles/style.scss';

class Chat extends Component {
  render() {
    return (
      <main className="main-wrapper">
        <Messages newMessage={this.props.newMessage} messages={this.props.messages} />
        <Users users={this.props.users} addNewUser={this.props.addNewUser} />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer,
    messages: state.messagesReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: bindActionCreators(addNewUser, dispatch),
    newMessage: bindActionCreators(newMessage, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
