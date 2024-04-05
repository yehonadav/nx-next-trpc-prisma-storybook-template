import { CSSProp } from 'styled-components';
import 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
