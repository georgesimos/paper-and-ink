import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Badge, Toolbar, IconButton, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

// Component styles
import useStyles from './styles';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';

function Topbar(props) {
  const { className, children, openSidebar, onToggleSidebar } = props;
  const classes = useStyles(props);
  const [notifications] = useState([{ message: 'A Message', status: 'success' }]);
  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.brandWrapper}>
          <div className={classes.logo}>Paper & Ink</div>
          <IconButton className={classes.menuButton} aria-label="Menu" onClick={onToggleSidebar}>
            {openSidebar ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <ThemeToggler className={classes.themeToggler} />
        <IconButton className={classes.notificationsButton}>
          <Badge badgeContent={notifications.length} color="primary" variant="dot">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton className={classes.signOutButton}>
          <InputIcon />
        </IconButton>
      </Toolbar>
      {children}
    </AppBar>
  );
}

Topbar.propTypes = {
  className: PropTypes.string,
  onToggleSidebar: PropTypes.func,
  openSidebar: PropTypes.bool,
  children: PropTypes.node
};

export default Topbar;
