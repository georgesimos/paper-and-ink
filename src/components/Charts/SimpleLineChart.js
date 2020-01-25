import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@material-ui/core';
import { sales } from './constants';

function SimpleLineChart() {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" minWidth={500} height={350}>
      <LineChart
        width={600}
        height={300}
        data={sales}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="orders"
          stroke={theme.palette.primary.dark}
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="sales" stroke={theme.palette.success.light} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
