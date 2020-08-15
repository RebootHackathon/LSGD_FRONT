import React from "react";

import {Box, Container} from '@material-ui/core';



import Scaffold from "../../Components/Donatto/Scaffold/Scaffold";
import useStyles from "./styles";


const Header = (props) => {
    return (
        <Box height={120} bgcolor="cyan">

        </Box>
    )
}

const PanelBody = (props) => {
    return (
        <Box flexGrow={1} bgcolor="purple">

        </Box>
    )
}

const CardSection = (props) => {
    return (
        <Box height={160} bgcolor="green">

        </Box>
    )
}

const HomePage = (props) => {
    const classes = useStyles();
  
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Box bgcolor="red" height="100%" display="flex" flexDirection="column">
                    <Header />
                    <PanelBody />
                    <CardSection />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Scaffold(HomePage);
