import React, { Component } from 'react';
import { render } from '@testing-library/react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

/* 
  Обёртка лейаута

  Иногда хоки используются для того, чтобы обернуть компонент в какой-то лейаут.

  Внимание! это проще сделать при помощи паттерна RenderProps
*/

export const wrapWithAbsolutePosition = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div style = {{position: 'absolute'}}>
          <WrappedComponent />
        </div>
      )
    }
  }
}

