import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { byDevice } from './constants';
import { useTheme } from '@material-ui/core';

export default function SimpleBarChart() {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={byDevice} margin={{ top: 0, right: -15, left: -30, bottom: 0 }}>
        <XAxis dataKey="month" tick={{ fontSize: 10 }} />
        <YAxis tick={{ fontSize: 10 }} />
        <Bar dataKey="mobile" barSize={5} fill={theme.palette.primary.dark} />
        <Bar dataKey="desktop" barSize={5} fill={theme.palette.success.light} />
      </BarChart>
    </ResponsiveContainer>
  );
}
