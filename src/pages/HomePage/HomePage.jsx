import React from "react";

import {Box, Container, Grid, Typography, Tabs, Tab, Paper, withStyles, Button, Divider} from '@material-ui/core';
import { FiberManualRecord } from "@material-ui/icons";



import theme from "../../themes/theme";
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
        function MainContent(props) {
            console.log("Theme = ", theme);
            const ButtonCustom = withStyles({
                root: {
                    backgroundColor: props => props.bgColor,
                    borderRadius: 50,
                    padding: "2px 10px",
                    marginLeft: 10,
                    boxShadow: theme.shadows[3],
                    color: props => props.color,
                    fontSize: 10,
                    '&:focus': {
                        outline: "none"
                    }
                }

            }) (Button)
            return (
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Typography variant="caption" color="textSecondary">Saving account number</Typography>
                            <Typography variant="subtitle1" color="textPrimary">7899 6895 6986 4785</Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography variant="caption" color="textSecondary">Saving account number</Typography>
                            <Box display="flex" alignItems="center">
                                <Typography variant="h5" color="primary">&#8226;&nbsp;</Typography><Typography variant="subtitle1" color="textPrimary">7899 6895 6986 4785</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography variant="caption" color="textSecondary">Saving account number</Typography>
                            <Box display="flex" alignItems="center">
                                <Typography variant="h5" color="primary">&#8226;&nbsp;</Typography><Typography variant="subtitle1" color="textPrimary">7899 6895 6986 4785</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box display="flex" height="100%" justifyContent="flex-end" alignItems="flex-end">
                                <ButtonCustom bgColor="none" color="black">statement</ButtonCustom>
                                <ButtonCustom bgColor="none" color="black">history</ButtonCustom>
                                <ButtonCustom bgColor={theme.palette.primary.main} color="white">details</ButtonCustom>
                            </Box>
                        </Grid>
                    </Grid>
            )
        }
        function Section1(props) {
            function Information(props) {
                function TableRow(props) {
                    const {kkey, value} = props;

                    return (
                        <React.Fragment>
                            <Grid item xs={6}><Typography variant="caption" color="textPrimary">{kkey}</Typography></Grid>
                            <Grid item xs={6}><Typography variant="caption" color="textSecondary">{value}</Typography></Grid>
                        </React.Fragment>
                    )
                }
                return (
                    <Box>
                        <Grid container>
                            <Grid item xs={4}>
                                <Grid container>
                                    <TableRow kkey="Ownership status" value="Owner" />
                                    <TableRow kkey="plan" value="Permanent Account" />
                                    <TableRow kkey="Open date" value="16-08-2020" />
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container>
                                    <TableRow kkey="Ownership status" value="Owner" />
                                    <TableRow kkey="plan" value="Permanent Account" />
                                    <TableRow kkey="Open date" value="16-08-2020" />
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container>
                                    <TableRow kkey="Ownership status" value="Owner" />
                                    <TableRow kkey="plan" value="Permanent Account" />
                                    <TableRow kkey="Open date" value="16-08-2020" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                )
            }

            return (
                <Paper elevation={3}>
                    <Box padding={2}>
                        <MainContent />
                        <Box height={20} />
                        <Divider />
                        <Box height={10} />
                        <Information />
                    </Box>
                </Paper>
            )
        }
        function Section2(props) {
            return (
                <Box marginTop={2}>
                    <Paper elevation={3}>
                        <Box padding={2}>
                            <MainContent />
                        </Box>
                    </Paper>
                </Box>
            )
        }
        function Section3(props) {
            return (
                <Box marginTop={2}>
                    <Paper elevation={3}>
                        <Box padding={2}>
                            <MainContent />
                        </Box>
                    </Paper>
                </Box>
            )
        }

        return (
            <React.Fragment>
                <Section1 />
                <Section2 />
                <Section3 />
            </React.Fragment>
        )
    }

    return (
        <Box flexGrow={1} bgcolor="none" marginY={2}>
            <Tab1Body />
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
