import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { TopBar, Sidebar, Footer } from '../components';
import useStyles from './styles';

function Dashboard({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className={classes.root}>
      <TopBar openSidebar={openSidebar} onToggleSidebar={handleToggleSidebar} />
      <Sidebar
        onClose={handleToggleSidebar}
        open={openSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={clsx({ [classes.contentShift]: openSidebar, [classes.content]: true })}>
        {children}
        <Footer />
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node
};

export default Dashboard;
