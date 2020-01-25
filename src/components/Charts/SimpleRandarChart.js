import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';
import { salesByBrand } from './constants';
import { useTheme } from '@material-ui/core';

export default function SimpleRandarChart() {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" minWidth={500} height={350}>
      <RadarChart cx={200} cy={150} outerRadius={150} data={salesByBrand}>
        <PolarGrid />
        <PolarAngleAxis dataKey="brand" tick={{ fill: theme.palette.contrastText, fontSize: 12 }} />
        <PolarRadiusAxis />
        <Radar name="Brand" dataKey="sales" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
