import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './styles';

export default function Burger({ onClick }) {
  const classes = useStyles();
  return (
    <div className={classes.navIcon} onClick={onClick}>
      <div className={clsx(classes.navIconLine, classes.navIconLine__left)} />
      <div className={classes.navIconLine} />
      <div className={clsx(classes.navIconLine, classes.navIconLine__right)} />
    </div>
  );
}

Burger.propTypes = { onClick: PropTypes.func };
