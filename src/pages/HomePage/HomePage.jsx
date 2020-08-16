import React from "react";

import {Box, Container, Grid, Typography, Tabs, Tab} from '@material-ui/core';



import Scaffold from "../../Components/Donatto/Scaffold/Scaffold";
import lion from "../../assets/lion.png";
import useStyles from "./styles";


const Header = (props) => {
    const classes = useStyles(props);
    const {tabValue, handleChangeTab, a11yProps} = props;
    console.log(a11yProps)

    return (
        <Box display="flex" flexDirection="column">
            <Box paddingY={1}>
                <Typography variant="h6">Accounts</Typography>
                <Typography variant="subtitle2">You are in gov. employee portal</Typography>
            </Box>

            <Tabs
                value={tabValue}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChangeTab}
                selectionFollowsFocus={false}
                aria-label="disabled tabs example"
                classes={{root: classes.tabs, indicator: classes.indicator, scroller: classes.scroller}}
            >
                <Tab label="Account List" disableRipple={true} classes={{root: classes.tab, wrapper: classes.wrapper, selected: classes.selected}} />
                <Tab label="Account History" disableRipple={true} classes={{root: classes.tab, wrapper: classes.wrapper, selected: classes.selected}} />
                <Tab label="Bank Statement" disableRipple={true} classes={{root: classes.tab, wrapper: classes.wrapper, selected: classes.selected}} />
            </Tabs>

        </Box>
    )
}

const PanelBody = (props) => {
    const classes = useStyles(props);

    const Tab1Body = (props) => {

    }
    
    return (
        <Box flexGrow={1} bgcolor="none">

        </Box>
    )
}

const CardSection = (props) => {
    const classes = useStyles(props);

    function Card(props) {
        const classes = useStyles(props);
        const {title, subheading, caption, pic, url, fromColor, toColor} = props;

        return (
                <Box bgcolor="blue" height="100%" borderRadius={5} padding={2} paddingBottom={1} color="white"
                    className={classes.card} position="relative" overflow="hidden">
                    <Box zIndex={1} display="flex" flexDirection="column" height="100%">
                        <Typography variant="subtitle2" color="inherit">New Bank</Typography>
                        <Typography variant="subtitle2" color="inherit">Account</Typography>
                        <Typography variant="caption" color="textSecondary">
                            Here goes the text secondary grey color
                        </Typography>
                        <Box flexGrow={1}></Box>


                        {/* <Typography variant="caption" display="inline">make a day to visit</Typography>
                        <Typography variant="caption" display="inline">&#183;</Typography> */}
                        <Typography variant="caption" display="inline">CHECK OFFER</Typography>

                    </Box>
                    <Box className={classes.imgContainer} height="100%" display="flex" alignItems="center">
                        <img src={lion} className={classes.img} />
                    </Box>

                </Box>
        )

    }

    return (
        <Box height={140} display="flex" paddingBottom={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Card title="New Bank" subheading="Account" caption="caption goes here to demonstrate"
                         pic="" url="" fromColor="#4a148c" toColor="#6a1b9a" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card title="New Savings" subheading="Account" caption="second caption goes here"
                        pic="" url="" fromColor="#00695c" toColor="#00796b" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card title="New Currency" subheading="Account" caption="here is the third caption goes here"
                         pic="" url="" fromColor="#f9a825" toColor="#fbc02d" />
                </Grid>
            </Grid>

        </Box>
    )
}

const HomePage = (props) => {
    const classes = useStyles(props);
    const {tabValue, handleChangeTab, a11yProps} = props;
    console.log("-------------", props)
  
    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <Box height="100%" display="flex" flexDirection="column">
                    <Header tabValue={tabValue} handleChangeTab={handleChangeTab} />
                    <PanelBody tabValue={tabValue} handleChangeTab={handleChangeTab} />
                    <CardSection />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Scaffold(HomePage, 2);
