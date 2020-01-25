//Look at https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/material-icons/SearchIcons.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import * as icons from '@material-ui/icons';
import { Box, Typography } from '@material-ui/core';
import { PageTitle } from 'components';

function selectNode(node) {
  // Clear any current selection
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Select code
  const range = document.createRange();
  range.selectNodeContents(node);
  selection.addRange(range);
}

let Icons = props => {
  const { icons, classes, handleClickOpen } = props;

  const handleClick = event => {
    selectNode(event.currentTarget);
  };

  return (
    <div>
      {icons.map(icon => {
        return (
          <span key={icon.key} className={clsx('markdown-body', classes.icon)}>
            <icon.Icon
              tabIndex={-1}
              onClick={handleClickOpen}
              title={icon.key}
              className={classes.iconSvg}
            />
            <p onClick={handleClick}>{icon.key}</p>
          </span>
        );
      })}
    </div>
  );
};

Icons.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  icons: PropTypes.array.isRequired
};
Icons = React.memo(Icons);

const useDialogStyles = makeStyles(theme => ({
  markdown: {
    background: 'rgb(39, 44, 52)',
    color: '#fff',
    padding: theme.spacing(3)
  },
  import: {
    textAlign: 'right',
    padding: theme.spacing(0.5, 1)
  },
  container: {
    marginBottom: theme.spacing(5)
  },
  canvas: {
    fontSize: 210,
    marginTop: theme.spacing(2),
    color: theme.palette.primary.dark,
    backgroundSize: '30px 30px',
    backgroundColor: '#fff',
    backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px',
    backgroundImage:
      'linear-gradient(45deg, #f4f4f4 25%, transparent 25%), linear-gradient(-45deg, #f4f4f4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f4f4f4 75%), linear-gradient(-45deg, transparent 75%, #f4f4f4 75%)'
  },
  fontSize: {
    margin: theme.spacing(2)
  },
  context: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    boxSizing: 'content-box'
  },
  contextPrimary: {
    color: theme.palette.primary.main
  },
  contextPrimaryInverse: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  contextTextPrimary: {
    color: theme.palette.text.primary
  },
  contextTextPrimaryInverse: {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.primary
  },
  contextTextSecondary: {
    color: theme.palette.text.secondary
  },
  contextTextSecondaryInverse: {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.secondary
  }
}));

let DialogDetails = props => {
  const classes = useDialogStyles();
  const { open, selectedIcon, handleClose } = props;

  const handleClick = event => {
    selectNode(event.currentTarget);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      aria-labelledby="icon-dialog-title"
    >
      {selectedIcon ? (
        <React.Fragment>
          <DialogTitle id="icon-dialog-title" onClick={handleClick}>
            {selectedIcon.key}
          </DialogTitle>
          <Box className={classes.markdown} onClick={handleClick}>
            <Typography color="inherit" variant="subtitle2">
              {`import ${selectedIcon.key}Icon from '@material-ui/icons/${selectedIcon.key};`}
            </Typography>
          </Box>
          <DialogContent>
            <Grid container className={classes.container}>
              <Grid item xs={12} sm="auto">
                <Grid container justify="center">
                  <selectedIcon.Icon className={classes.canvas} />
                </Grid>
              </Grid>
              <Grid item xs>
                <Grid container alignItems="flex-end" justify="center">
                  <Grid item>
                    <Tooltip title="fontSize small">
                      <selectedIcon.Icon className={classes.fontSize} fontSize="small" />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="fontSize medium">
                      <selectedIcon.Icon className={classes.fontSize} />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="fontSize large">
                      <selectedIcon.Icon className={classes.fontSize} fontSize="large" />
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <selectedIcon.Icon className={clsx(classes.context, classes.contextPrimary)} />
                  <selectedIcon.Icon
                    className={clsx(classes.context, classes.contextPrimaryInverse)}
                  />
                </Grid>
                <Grid container justify="center">
                  <selectedIcon.Icon
                    className={clsx(classes.context, classes.contextTextPrimary)}
                  />
                  <selectedIcon.Icon
                    className={clsx(classes.context, classes.contextTextPrimaryInverse)}
                  />
                </Grid>
                <Grid container justify="center">
                  <selectedIcon.Icon
                    className={clsx(classes.context, classes.contextTextSecondary)}
                  />
                  <selectedIcon.Icon
                    className={clsx(classes.context, classes.contextTextSecondaryInverse)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </React.Fragment>
      ) : (
        <div />
      )}
    </Dialog>
  );
};

DialogDetails.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedIcon: PropTypes.object
};
DialogDetails = React.memo(DialogDetails);

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(4) },
  form: {
    margin: theme.spacing(2, 0)
  },
  paper: {
    padding: theme.spacing(2, 4),
    margin: theme.spacing(4, 0)
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  icon: {
    display: 'inline-block',
    width: 86,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '0 4px',
    fontSize: 12,
    '& p': {
      margin: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  },
  iconSvg: {
    boxSizing: 'content-box',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
      duration: theme.transitions.duration.shortest
    }),
    fontSize: 40,
    padding: theme.spacing(2),
    margin: theme.spacing(0.5, 0),
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1]
    }
  },
  results: {
    marginBottom: theme.spacing(1)
  }
}));

const allIconsMap = {};
const allIcons = Object.keys(icons)
  .sort()
  .map(key => {
    const icon = {
      key,
      Icon: icons[key]
    };
    allIconsMap[key] = icon;
    return icon;
  });

export default function SearchIcons() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState(null);

  const handleClickOpen = React.useCallback(event => {
    setSelectedIcon(allIconsMap[event.currentTarget.getAttribute('title')]);
    setOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className={classes.root}>
      <PageTitle title="Icons" />
      <Paper className={classes.paper} elevation={0}>
        <Icons icons={allIcons} classes={classes} handleClickOpen={handleClickOpen} />
      </Paper>
      <DialogDetails open={open} selectedIcon={selectedIcon} handleClose={handleClose} />
    </div>
  );
}
