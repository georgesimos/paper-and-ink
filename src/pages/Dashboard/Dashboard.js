import React from 'react';
import { Grid } from '@material-ui/core';
import {
  InfoBox,
  Widget,
  SimpleTable,
  SimpleLineChart,
  SimpleRandarChart,
  SimpleBarChart
} from 'components';
import useStyles from './styles';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Sales Today"
            value="1.500"
            differenceValue="+20%"
            caption="Since last week"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Visitors"
            value="200.000"
            differenceValue="-10%"
            caption="Since last week"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Total Earnings"
            value="$ 24.300"
            differenceValue="+12%"
            caption="Since last month"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Pending Orders"
            value="4"
            differenceValue="-7%"
            caption=" Since last week"
          />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Widget title="Total revenue">
            <SimpleLineChart />
          </Widget>
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <Widget title="Sales by brand">
            <SimpleRandarChart />
          </Widget>
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <Widget title="Mobile / Desktop">
            <SimpleBarChart />
          </Widget>
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Widget title="Products">
            <SimpleTable />
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
