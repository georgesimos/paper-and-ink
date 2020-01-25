import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import createTheme from './theme';
import ThemeContext from './ThemeContext';

export default function ThemeProvider(props) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  return <MuiThemeProvider theme={createTheme(theme)}>{children}</MuiThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node
};
