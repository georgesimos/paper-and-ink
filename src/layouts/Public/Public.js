import React from 'react';
import PropTypes from 'prop-types';
import { NavBar, Footer } from '../components';
import useStyles from './styles';

function Minimal({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
}

Minimal.propTypes = {
  children: PropTypes.node
};

export default Minimal;
