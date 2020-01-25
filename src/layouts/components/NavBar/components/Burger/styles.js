import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  navIcon: {
    height: '30px',
    width: '30px',
    position: 'relative',
    zIndex: 2,
    cursor: 'pointer',
    '&:hover $navIconLine__left, &:hover $navIconLine__right': {
      width: '30px'
    }
  },
  navIconLine: {
    height: '2px',
    width: '30px',
    display: 'block',
    backgroundColor: theme.palette.contrastText,
    marginBottom: '7px',
    transition: ' transform .2s ease, background-color .5s ease'
  },
  navIconLine__left: {
    width: '20px',
    transition: 'all 200ms linear'
  },
  navIconLine__right: {
    width: '20px',
    transition: 'all 200ms linear'
  }
}));
