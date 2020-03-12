import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.background.default}`,
    boxShadow: `0 0 35px 0  ${theme.palette.background.default}`,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    height: 60,
    zIndex: theme.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%',
    paddingLeft: 0
  },
  brandWrapper: {
    background: theme.palette.custom.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 271,
    height: 60,
    flexShrink: 0
  },
  logo: {
    width: 'calc(100% - 90px)',
    maxWidth: '100%',
    margin: 'auto',
    fontFamily: 'Montserrat,sans-serif',
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 3,
    color: theme.palette.custom.contrastText
  },
  title: {
    marginLeft: theme.spacing(5),
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: 14,
    color: theme.palette.contrastText
  },
  menuButton: {
    color: theme.palette.custom.contrastText,
    marginLeft: -4
  },
  themeToggler: {
    marginLeft: 'auto'
  },
  notificationsButton: {
    margin: theme.spacing(0, 1)
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  [theme.breakpoints.down('sm')]: {
    brandWrapper: { width: 75 },
    logo: { display: 'none' }
  }
}));
