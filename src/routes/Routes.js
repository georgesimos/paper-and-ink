import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Dashboard from 'pages/Dashboard/Dashboard';
import Tables from 'pages/Tables/Tables';
import Typography from 'pages/Typography/Typography';
import Icons from 'pages/Icons/Icons';
import WithLayoutRoute from './WithLayoutRoute';
import DashboardLayout from 'layouts/Dashboard/Dashboard';

function Routes() {
  return (
    <Switch>
      <WithLayoutRoute component={Dashboard} exact layout={DashboardLayout} path="/dashboard" />
      <WithLayoutRoute component={Tables} exact layout={DashboardLayout} path="/tables" />
      <WithLayoutRoute component={Typography} exact layout={DashboardLayout} path="/typography" />
      <WithLayoutRoute component={Icons} exact layout={DashboardLayout} path="/icons" />
      <Redirect to="/dashboard" />
    </Switch>
  );
}

export default Routes;
