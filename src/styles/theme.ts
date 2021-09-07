import { DefaultTheme } from 'styled-components';
import theme from 'src/constants/theme';
import { createTheme } from '@material-ui/core';

export const defaultTheme: DefaultTheme = {
  typography: {
    htmlFontSize: theme.BASE_FONT_SIZE,
    fontFamily: '"Open Sans", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 300,
      fontSize: '2.625rem',
      lineHeight: 1.167,
      letterSpacing: '0.01562em',
    },
    h2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 300,
      fontSize: '1.375rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '1.0625rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.9375rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.9375rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    title: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '1.375rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    subtitle: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 300,
      fontSize: '0.9375rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    small: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 300,
      fontSize: '0.8125rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
  },
  pallete: {
    primary: theme.PRIMARY_COLOR,
    primaryMedium: theme.PRIMARY_MEDIUM_COLOR,
    primaryLight: theme.PRIMARY_LIGHT_COLOR,
    secondary: theme.SECONDARY_COLOR,
    secondaryMedium: theme.SECONDARY_MEDIUM_COLOR,
    secondaryLight: theme.SECONDARY_LIGHT_COLOR,
    textPrimary: '#ffffff',
    textSecondary: '#666666',
    success: theme.SUCCESS_COLOR,
    error: theme.ERROR_COLOR,
  },
  shape: {
    borderRadius: theme.BORDER_RADIUS,
  },
};

export const materialUiTheme = createTheme({
  typography: {
    htmlFontSize: parseInt(
      defaultTheme.typography.htmlFontSize.replace(/^\D+/g, '')
    ),
    fontFamily: defaultTheme.typography.fontFamily,
    fontWeightLight: defaultTheme.typography.fontWeightLight,
    fontWeightRegular: defaultTheme.typography.fontWeightRegular,
    fontWeightMedium: defaultTheme.typography.fontWeightMedium,
    fontWeightBold: defaultTheme.typography.fontWeightBold,
  },
  palette: {
    primary: {
      main: defaultTheme.pallete.primary,
      light: defaultTheme.pallete.primaryLight,
    },
    secondary: {
      main: defaultTheme.pallete.secondary,
      light: defaultTheme.pallete.secondaryLight,
    },
    text: {
      primary: defaultTheme.pallete.textSecondary,
      secondary: defaultTheme.pallete.textPrimary,
    },
  },
  shape: {
    borderRadius: parseInt(
      defaultTheme.shape.borderRadius.replace(/^\D+/g, '')
    ),
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        color: '#fff',
        '&$focused': {
          color: '#fff',
        },
        '& .MuiInputAdornment-root .MuiIconButton-root': {
          color: '#fff',
        },
        '& .MuiAutocomplete-clearIndicator': {
          color: '#fff',
        },
      },
      notchedOutline: {
        borderWidth: '1px !important',
        borderColor: '#fff !important',
      },
    },
    MuiSelect: {
      iconOutlined: {
        color: '#fff',
      },
      iconFilled: {
        color: '#333',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: '#fff',
        color: '#333',
        '&$focused': {
          color: '#333',
        },
        '& .MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
          transform: 'translateY(-9px)',
        },
        '& .MuiInputAdornment-root .MuiIconButton-root': {
          color: '#333',
        },
        '& .MuiAutocomplete-clearIndicator': {
          color: '#333',
        },
      },
    },
    MuiInputLabel: {
      root: {
        '&$outlined': {
          color: '#fff !important',
        },
        '&$filled': {
          color: '#333 !important',
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#fff',
        },
        '&$filled': {
          color: '#333 !important',
        },
      },
    },
  },
});
