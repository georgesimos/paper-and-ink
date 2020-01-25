import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  nav: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    paddingLeft: 0,
    marginBottom: 0,
    transform: 'translateX(0%) translateY(-100%)',
    transition: 'transform 1s ease',
    '&:before, &:after': {
      content: '""',
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      zIndex: '2',
      transition: 'transform cubic-bezier(0.77, 0, 0.175, 1) 1s',
      transform: 'translateX(0%) translateY(-100%)'
    },
    '&:before': {
      background: theme.palette.background.default,
      transitionDelay: '0s'
    },
    '&:after': {
      background: theme.palette.background.paper,
      opacity: 0.1,
      transitionDelay: '.1s'
    }
  },
  navActive: {
    visibility: 'visible',
    transform: 'translateX(0%) translateY(0%)',
    transition: 'transform .1s ease',
    '&:before': {
      transitionDelay: '0s',
      transform: 'translateX(0%) translateY(0%)'
    },
    '&:after': {
      transitionDelay: '.1s',
      transform: 'translateX(0%) translateY(0%)'
    },
    '& $navContent': {
      visibility: 'visible'
    },
    '& $closeMenu': { opacity: 1 },
    '& $navContent $currentPageShadow': {
      transitionDelay: '.5s',
      opacity: 0.03,
      marginTop: '0'
    },
    '& $navContent $innerNavListItem': {
      transitionDelay: '.5s',
      opacity: 1,
      transform: 'translateX(0%)',
      transition: 'opacity .3s ease, transform .3s ease, color .3s ease'
    }
  },
  closeMenu: {
    zIndex: 1200,
    opacity: 0,
    color: theme.palette.contrastText,
    position: 'absolute',
    right: theme.spacing(4),
    top: theme.spacing(4),
    transition: 'opacity 2s ease'
  },
  navContent: {
    zIndex: 1200,
    position: 'fixed',
    visibility: 'hidden',
    top: '50%',
    transform: 'translate(0%, -50%)',
    width: '100%'
  },
  currentPageShadow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'sans-serif',
    fontSize: '10rem',
    fontWeight: 800,
    marginTop: '25px',
    color: theme.palette.contrastText,
    opacity: 0,
    transition: 'all 300ms linear'
  },
  innerNav: {
    position: 'relative',
    padding: 0,
    margin: 0,
    zIndex: 2
  },
  innerNavListItem: {
    opacity: 0,
    position: 'relative',
    display: 'block',
    textAlign: 'center',
    fontSize: '4rem',
    lineHeight: '1.05',
    letterSpacing: '3px',
    transform: 'translate(0%, 100%)',
    transition: 'opacity .2s ease, transform .3s ease'
  },
  innerNavLink: {
    position: 'relative',
    color: theme.palette.contrastText,
    padding: '0 .5rem',
    margin: '0 1rem',
    fontSize: '2rem',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    zIndex: 2,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      opacity: 0,
      height: 0,
      marginTop: '3px',
      backgroundColor: theme.palette.contrastText,
      transition: 'all 200ms linear',
      zIndex: 1
    },
    '&:hover:after': {
      opacity: 0.4,
      height: 15
    }
  }
}));
