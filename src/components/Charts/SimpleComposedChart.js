import React from 'react';
import { Area, ComposedChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useTheme } from '@material-ui/core';
import { sales } from './constants';

function SimpleComposedChart() {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" minWidth={500} height={350}>
      <ComposedChart margin={{ top: 0, right: -15, left: -15, bottom: 0 }} data={sales}>
        <YAxis ticks={[0, 2500, 5000, 9800]} tick={{ fontSize: 12 }} tickLine={false} />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} />
        <Area
          type="natural"
          dataKey="area"
          fill={theme.palette.primary.light}
          strokeWidth={0}
          activeDot={false}
        />
        <Line type="monotone" dataKey="sales" stroke={theme.palette.primary.dark} strokeWidth={2} />
        <Line
          type="monotone"
          dataKey="orders"
          stroke={theme.palette.success.light}
          strokeWidth={2}
          dot={{
            stroke: theme.palette.success.dark,
            strokeWidth: 2,
            fill: theme.palette.success.main
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default SimpleComposedChart;
