import 'styled-components';

export type Colors = {
  primary: string;
  secondary: string;
};

export type Indent = {
  s: string;
  m: string;
  l: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    indent: Indent;
  }
}
