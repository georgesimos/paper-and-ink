import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    height: '100%'
  },
  difference: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  differenceValue: {
    color: props =>
      props.positiveDifference ? theme.palette.success.main : theme.palette.error.main,
    marginRight: theme.spacing(1)
  }
}));
