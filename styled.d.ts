import 'styled-components';

declare module 'styled-components' {
  export interface PalleteColors {
    primary?: string;
    primaryMedium?: string;
    primaryLight?: string;
    secondary?: string;
    secondaryMedium?: string;
    secondaryLight?: string;
    textPrimary?: string;
    textSecondary?: string;
    success?: string;
    error?: string;
  }

  export interface FontProperties {
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: string;
    lineHeight?: number;
    letterSpacing?: string;
  }

  export type PalleteColorUnion =
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'success'
    | 'error';

  export interface DefaultTheme {
    typography?: {
      htmlFontSize?: string;
      fontFamily?: string;
      fontWeightLight?: number;
      fontWeightRegular?: number;
      fontWeightMedium?: number;
      fontWeightBold?: number;
      h1?: FontProperties;
      h2?: FontProperties;
      h3?: FontProperties;
      h4?: FontProperties;
      body1?: FontProperties;
      body2?: FontProperties;
      title?: FontProperties;
      subtitle?: FontProperties;
      small?: FontProperties;
    };
    pallete?: PalleteColors;
    shape?: {
      borderRadius: string;
    };
  }
}
