import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop() view: 'success' | 'danger' | 'primary';

  @Event() clicked: EventEmitter;

  @Event() mouseDown: EventEmitter;

  @Event() mouseUp: EventEmitter;

  @Prop() tabIndex: number;

  @Prop() type: 'button' | 'reset' | 'submit';

  @Prop() isSelected: boolean;

  @Prop() isOutlined: boolean;

  @Prop() isGhost: boolean;

  @Prop() isBlock: boolean;

  @Prop() isDisabled: boolean;

  @Prop() form: string;

  @Prop() isLoading: boolean;

  private handleClick() {
    this.clicked.emit(Event);
  }

  /**Implement loading case... */
  render() {
    return (
      <button
        class={`${this.view}`}
        onClick={this.handleClick}
        type={this.type}
        disabled={this.isDisabled || this.isLoading}
      >
        <span>
          <slot />
        </span>
      </button>
    );
  }
}
