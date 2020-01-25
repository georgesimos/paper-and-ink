import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from '@material-ui/core';
import useStyles from './styles';

export default function PageTitle({ title }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h2">
        {title}
      </Typography>
      <Divider />
    </>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string
};
