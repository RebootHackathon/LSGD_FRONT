import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root} height={60} bgcolor="gray">
    </Box>
  );
}
