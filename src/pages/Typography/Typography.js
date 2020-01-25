import React from 'react';
import { Grid, Typography as MuiTypography, Paper } from '@material-ui/core';
import { PageTitle } from 'components';
import useStyles from './styles';

const variants = {
  h1: 'h1. Heading',
  h2: 'h2. Heading',
  h3: 'h3. Heading',
  h4: 'h4. Heading',
  h5: 'h5. Heading',
  h6: 'h6. Heading',
  subtitle1:
    'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  subtitle2:
    'subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  body1:
    'body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  body2:
    'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  button: 'BUTTON TEXT',
  caption: 'caption text',
  overline: 'OVERLINE TEXT'
};

const Typography = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <PageTitle title="Typography" />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item container spacing={2} xs={12}>
              {Object.keys(variants).map((key, index) => (
                <Grid key={index} item sm={9} xs={12}>
                  <MuiTypography variant={key}>{variants[key]}</MuiTypography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Typography;
