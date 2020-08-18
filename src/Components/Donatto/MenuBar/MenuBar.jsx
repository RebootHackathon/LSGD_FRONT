import React from "react";
import {Box, Typography} from '@material-ui/core';
import {AcUnitTwoTone, PowerInput, PollSharp, CollectionsBookmark} from '@material-ui/icons';


import useStyles from "./styles";

const Menu = (props) => {
    const classes = useStyles(props);
    const {activeTab, Icon} = props;
    return (
        <Box width="100%" color="rgba(0,0,0,0.3)" padding={1} marginTop={1} className={classes.menu} display="flex" flexDirection="column" alignItems="center">
            <Icon className={classes.icon} />
            <Typography variant="caption" color="inherit" className={classes.label}>Dashboard</Typography>
        </Box>
    )

}



const MenuBar = (props) => {
    const {activeTab} = props;
  
    return (
        <Box bgcolor="white" width={70}>
            <Menu index={1} activeTab={activeTab} Icon={AcUnitTwoTone} />
            <Menu index={2} activeTab={activeTab} Icon={PowerInput} />
            <Menu index={3} activeTab={activeTab} Icon={PollSharp} />
            <Menu index={4} activeTab={activeTab} Icon={CollectionsBookmark} />
        </Box>
    );
}

export default MenuBar;
