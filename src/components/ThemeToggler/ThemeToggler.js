import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PaletteIcon from '@material-ui/icons/Palette';
import ThemeContext from 'theme/ThemeContext';
import { Tooltip } from '@material-ui/core';

const themes = ['basil', 'crane', 'material', 'materialDark', 'pinky', 'rally', 'reply'];

export default function ThemeToggler({ className }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { theme, setTheme } = React.useContext(ThemeContext);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const onChangeTheme = theme => {
    setTheme(theme);
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <Tooltip title="Change Theme">
        <IconButton
          aria-label="theme-palette"
          aria-controls="theme-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <PaletteIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="theme-toggler"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => onChangeTheme(theme)}
      >
        {themes.map(option => (
          <MenuItem key={option} selected={option === theme} onClick={() => onChangeTheme(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

ThemeToggler.propTypes = {
  className: PropTypes.string
};
