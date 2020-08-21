import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';
import { PowerSettingsNew, PermIdentity } from "@material-ui/icons";

import theme from "../../../themes/theme";

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

  return (
    <Box className={classes.root} height={50} bgcolor="white" borderBottom="1px solid #fafafa" display="flex"
      justifyContent="space-between" alignItems="center">
        <Box paddingLeft={1} color={theme.palette.primary.main}>
          <Typography variant="h6" color="inherit">REIED</Typography>          
        </Box>
        <Box display="flex" color="gray" justifyContent="space-between" 
            marginRight={1} alignItems="center">
            <PermIdentity color="inherit" />
          <Typography variant="subtitle2" color="inherit">&nbsp;&nbsp;xyz@gmail.com</Typography>
        </Box>

    </Box>
  );
}
