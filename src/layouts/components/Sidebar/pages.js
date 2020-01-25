import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const pages = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    title: 'Tables',
    href: '/tables',
    icon: <HomeIcon />
  },
  {
    title: 'Typography',
    href: '/typography',
    icon: <PersonOutlineIcon />
  },
  {
    title: 'Icons',
    href: '/icons',
    icon: <PersonOutlineIcon />
  }
];

export default pages;
