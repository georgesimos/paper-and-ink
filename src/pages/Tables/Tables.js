import React from 'react';
import { Grid } from '@material-ui/core';
import { Widget, SimpleTable, EnhancedTable, PageTitle } from 'components';
import useStyles from './styles';

export default function Tables() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <PageTitle title="Tables" />
        </Grid>
        <Grid item xs={12}>
          <Widget title="Simple Table">
            <SimpleTable />
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget title="Enhanced Table">
            <EnhancedTable />
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
