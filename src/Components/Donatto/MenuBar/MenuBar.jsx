import React from "react";
import {Box, Typography} from '@material-ui/core';
import {DashboardOutlined, Telegram, HowToReg, PowerSettingsNew} from '@material-ui/icons';

import {history} from "../../../helpers/history";
import {userServices} from "../../../services/user.services";


import useStyles from "./styles";

const Menu = (props) => {
    const classes = useStyles(props);
    const {activeTab, Icon, label, to} = props;
    var redirectfn;
    if(to==="/logout") {
        redirectfn = ()=>userServices.logout().then(history.push("/"))
    }
    else {
        redirectfn = ()=>history.push(to)
    }
    return (
        <Box width="100%" color="rgba(0,0,0,0.3)" padding={1} marginTop={1} className={classes.menu} display="flex" 
            flexDirection="column" alignItems="center" onClick={redirectfn}>
            <Icon className={classes.icon} />
            <Typography variant="caption" color="inherit" className={classes.label}>{label}</Typography>
        </Box>
    )

}



const MenuBar = (props) => {
    const {activeTab} = props;
  
    return (
        <Box bgcolor="white" width={70}>
            <Menu index={1} activeTab={activeTab} Icon={DashboardOutlined} label="Dashboard" to="/LSGD_FRONT/mainpage" />
            <Menu index={2} activeTab={activeTab} Icon={Telegram} label="Apply" to="/LSGD_FRONT/p/listgrants"/>
            <Menu index={3} activeTab={activeTab} Icon={HowToReg} label="Register" to="/LSGD_FRONT/p/registercitizen"/>
            <Menu index={4} activeTab={activeTab} Icon={PowerSettingsNew} label="Logout" to="/logout"/>
        </Box>
    );
}

export default MenuBar;
