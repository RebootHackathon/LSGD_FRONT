import React from "react";

import {Box} from '@material-ui/core';



import AppBar from "../../Components/Donatto/AppBar/AppBar";
import useStyles from "./styles";


const HomePage = (props) => {
    const classes = useStyles();
  
    return (
        <React.Fragment>
            <AppBar />
            <Box bgcolor="red" minHeight={200}>

            </Box>
        </React.Fragment>
    );
}

export default HomePage;
