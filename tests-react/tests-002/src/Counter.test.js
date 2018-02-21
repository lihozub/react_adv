import React from 'react'
import { mount, shallow } from 'enzyme';
import Counter, { CounterApp } from "./Counter";
import store from "./store";
import { Provider } from "react-redux";

describe('testing counter component', () => {
  test('test with Provider', () => {
    const component = mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    component.find('#inc').simulate('click');
    component.find('#inc').simulate('click');
    component.find('#inc').simulate('click');
  
    expect(component.find('span').text()).toBe('3');
  });
  
  test('shallow testing', () => {
    const props = {
      counter: 22,
      inc() {
        console.log('i\'m clicked');
      },
      dec: jest.fn()
    };
    const component = shallow(<CounterApp {...props} />);
    console.log(component.find('span').text());
    component.find('#inc').simulate('click');
    component.find('#dec').simulate('click', 'some_env_data');
    // console.log(props.dec.mock.calls);
    
    expect(component.find('span').text()).toBe(String(props.counter));
  });
});

