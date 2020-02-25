import { Component, h } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }

}
