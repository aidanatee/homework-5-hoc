import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/
class AddDisplayName extends Component {

  render() {
    return withDisplayName(WrappedComponent)
  }
}

export default AddDisplayName;

export const withDisplayName = (WrappedComponent) => {
  return class HOCComponent extends Component {
    
    static displayName = `HOC${WrappedComponent.displayName ? getDisplayName(WrappedComponent) : 'Component'}`;

    render() {
      return <WrappedComponent/>
    }
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}


