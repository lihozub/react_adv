import React, { Component } from 'react';

export default (propName) => (loaderPath) => (ChildComponent) => {
  return class hocLoader extends Component {
    componentDidMount() {
      this.startTime = Date.now();
    }

    componentWillReceiveProps() {
      this.endTime = Date.now();
    }

    propIsEmpty() {
      const prop = this.props[propName];

      return (!prop ||
              (prop.hasOwnProperty('length') && !prop.length) ||
              (!Object.keys(prop).length)
      );
    }

    loaderComponent() {
      return <div><img src={loaderPath}/></div>
    }

    render() {
      const newProp = {
        timeDiff: ((this.endTime - this.startTime) / 1000).toFixed(2)
      };
      return this.propIsEmpty() ? this.loaderComponent() : <ChildComponent {...this.props} {...newProp} />;
    }
  }
}