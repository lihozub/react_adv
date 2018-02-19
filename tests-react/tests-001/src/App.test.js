import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Todo from './Todo';
import ReactTestRenderer from 'react-test-renderer/shallow';

describe('todo component tests', () => {
  const component = ReactTestUtils.renderIntoDocument(<Todo />);

  test('todo component must have form tag', () => {
    ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
  });

  test('test component must have 2 children', () => {
    const form = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
    expect(form.childElementCount).toBe(2);
  });
});

describe('alternative todo component testing', () => {
  test('init don`t have test', () => {
    const component = new ReactTestRenderer();
    component.render(<Todo />);
    const result = component.getRenderOutput();
    console.log(result.props.children[1]);
  });
});