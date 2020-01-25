import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    height: '100%',
    background: theme.palette.background.default,
    color: theme.palette.contrastText
  },
  content: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    marginLeft: '270px'
  },
  [theme.breakpoints.down('sm')]: {
    content: {
      padding: 0,
      paddingTop: theme.spacing(9)
    }
  }
}));
