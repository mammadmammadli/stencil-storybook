import { Component, h } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {

  render() {
    return (
      <button>
        test
      </button>
    );
  }

}
