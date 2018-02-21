import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';

describe('todo testing with enzyme', () => {
  test('should be h6 tag on init app', () => {
    const component = shallow(<Todo />);
    expect(component.find('h6')).toHaveLength(1);
  });
});