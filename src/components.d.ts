/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface UiButton {
    'form': string;
    'isBlock': boolean;
    'isDisabled': boolean;
    'isGhost': boolean;
    'isLoading': boolean;
    'isOutlined': boolean;
    'isSelected': boolean;
    'tabIndex': number;
    'type': 'button' | 'reset' | 'submit';
    'view': 'success' | 'danger' | 'primary';
  }
}

declare global {


  interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {}
  var HTMLUiButtonElement: {
    prototype: HTMLUiButtonElement;
    new (): HTMLUiButtonElement;
  };
  interface HTMLElementTagNameMap {
    'ui-button': HTMLUiButtonElement;
  }
}

declare namespace LocalJSX {
  interface UiButton {
    'form'?: string;
    'isBlock'?: boolean;
    'isDisabled'?: boolean;
    'isGhost'?: boolean;
    'isLoading'?: boolean;
    'isOutlined'?: boolean;
    'isSelected'?: boolean;
    'onClicked'?: (event: CustomEvent<any>) => void;
    'onMouseDown'?: (event: CustomEvent<any>) => void;
    'onMouseUp'?: (event: CustomEvent<any>) => void;
    'tabIndex'?: number;
    'type'?: 'button' | 'reset' | 'submit';
    'view'?: 'success' | 'danger' | 'primary';
  }

  interface IntrinsicElements {
    'ui-button': UiButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ui-button': LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
    }
  }
}


