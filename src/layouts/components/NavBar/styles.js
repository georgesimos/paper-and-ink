import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  header: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: theme.zIndex.appBar
  },
  navbar: {
    padding: theme.spacing(2, 5),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: 'translate3d(0,0,0)',
    backfaceVisibility: 'hidden',
    transition: 'all 300ms ease-in'
  },
  navbarColor: {
    background: theme.palette.background.paper,
    color: theme.palette.contrastText,
    transition: 'all 200ms ease-out'
  },
  logoLink: {
    display: 'inline-block',
    textDecoration: 'none'
  },
  logo: {
    width: 'auto',
    fontSize: '2rem',
    letterSpacing: '2px',
    color: theme.palette.contrastText
  },
  navLinks: {
    marginLeft: 'auto',
    display: 'flex'
  },
  navLink: {
    position: 'relative',
    color: theme.palette.contrastText,
    padding: '0 .5rem',
    margin: '0 1rem',
    fontSize: '1.1rem',
    fontWeight: '600',
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
      backgroundColor: theme.palette.contrastText,
      transition: 'all 200ms linear',
      zIndex: 1
    },
    '&:hover:after': {
      opacity: 0.4,
      height: 9
    }
  },
  navMobile: { marginLeft: 'auto', marginRight: theme.spacing(1) }
}));
