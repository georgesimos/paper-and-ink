import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Typography, Hidden } from '@material-ui/core';
import Burger from './components/Burger/Burger';
import MobileNav from './components/MobileNav/MobileNav';
import pages from './pages';
import useStyles from './styles';

export default function NavBar() {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    // initiate the event handler
    window.addEventListener('scroll', handleScroll);
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className={classes.header}>
      <nav className={clsx({ [classes.navbar]: true, [classes.navbarColor]: scrollPosition > 90 })}>
        <Link className={classes.logoLink} to="/">
          <Typography className={classes.logo} variant="h2">
            Paper & Ink
          </Typography>
        </Link>
        <Hidden smDown>
          <div className={classes.navLinks}>
            {pages.map(({ title, href }) => (
              <Link key={title} className={classes.navLink} to={href}>
                {title}
              </Link>
            ))}
          </div>
        </Hidden>
        <div className={classes.navMobile}>
          <Burger onClick={() => setShowMenu(!showMenu)} />
        </div>
      </nav>
      <MobileNav pages={pages} showMenu={showMenu} onToogleMenu={() => setShowMenu(!showMenu)} />
    </header>
  );
}
