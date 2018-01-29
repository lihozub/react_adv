import React from 'react';
import {render} from 'react-dom';
import Chat from 'components/Chat';
import 'assets/styles/style.scss';

render(
  <Chat />,
  document.querySelector('#mount_place')
);