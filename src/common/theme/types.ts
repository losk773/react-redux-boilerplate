export interface ITheme {
  colors: Colors;
  indent: Indent;
}

export type Colors = {
  primary: string;
  secondary: string;
};

export type Indent = {
  s: string;
  m: string;
  l: string;
};
