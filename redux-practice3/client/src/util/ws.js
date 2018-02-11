import { connectedNewUser } from "actions";
import store from 'store';

export default ((wsUrl) => {
  let ws;
  const { dispatch } = store;

  ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    console.log('WS Open!');
  };

  ws.onmessage = (message) => {
    const messageObj = JSON.parse(message.data);

    switch (messageObj.type) {
      case "connected_new_user":
        dispatch(connectedNewUser(messageObj.userName));
        break;
    }
  };

  let countReconnect = 0;
  const emit = (message) => {
    if (countReconnect > 5) return;

    if (ws.readyState === ws.CONNECTING) {
      setTimeout(() => {
        emit(message);
        countReconnect++;
      }, 500);
      return;
    }
    ws.send(message);
    countReconnect = 0;
  };

  return { emit };

  return ws;

})('ws://localhost:5000');