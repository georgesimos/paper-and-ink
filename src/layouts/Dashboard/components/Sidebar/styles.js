import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  drawer: {
    borderRight: 0,
    zIndex: 1200,
    width: 271,
    top: 60
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    right: 5
  },
  profile: {
    marginBottom: theme.spacing(5)
  },

  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.custom.secondary,
      borderLeft: `4px solid ${theme.palette.custom.primary}`,
      borderRadius: '4px',
      '& $listItemIcon': {
        marginLeft: '-4px'
      }
    },
    '& + &': {
      marginTop: theme.spacing(1)
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.custom.primary}`,
    borderRadius: '4px',
    backgroundColor: theme.palette.custom.secondary,
    '& $listItemText': {
      color: theme.palette.contrastText
    },
    '& $listItemIcon': {
      marginLeft: '-4px'
    }
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.contrastText
  },

  [theme.breakpoints.down('sm')]: {
    drawer: { top: 0 },
    menuButton: { dispaly: 'none' },
    profile: { marginTop: theme.spacing(5) }
  }
}));
