import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Divider, CardContent, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Widget(props) {
  const { children, title } = props;
  return (
    <Card elevation={0}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <Divider light />
      <CardContent>{children}</CardContent>
      <Divider light />
    </Card>
  );
}

Widget.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};
