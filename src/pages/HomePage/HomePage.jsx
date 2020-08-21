import React from "react";

import {Box, Container, Grid, Typography, Tabs, Tab, Paper, withStyles, Button, Divider} from '@material-ui/core';
import { FiberManualRecord } from "@material-ui/icons";
import Link from '@material-ui/core/Link';
import {Chart, PieSeries, Legend} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';



import theme from "../../themes/theme";
import Scaffold from "../../Components/Donatto/Scaffold/Scaffold";
import LineChart from "../../Components/Donatto/LineChart/LineChart";
import lion from "../../assets/lion.png";
import {history} from "../../helpers/history";
import useStyles, {chartRootStyles, legendStyles, legendLabelStyles, legendItemStyles} from "./styles";


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
                <Tab label="List Schemes" disableRipple={true} classes={{root: classes.tab, wrapper: classes.wrapper, selected: classes.selected}} />
                <Tab label="Blank Space Undone **" disableRipple={true} classes={{root: classes.tab, wrapper: classes.wrapper, selected: classes.selected}} />
            </Tabs>

        </Box>
    )
}

const PanelBody = (props) => {
    const classes = useStyles(props);
    const {piData, lineData} = props;

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

            return (
                <Paper elevation={3}>
                    <Box padding={2}>
                        <MainContent />
                    </Box>
                </Paper>
            )
        }
        function Section2(props) {
            function LineChartComponent(props) {
                return (
                    <React.Fragment>

                    </React.Fragment>
                )
            }
            
            function ChartComponent(props) {
                const ChartRootBase = ({ classes, ...restProps }) => (
                    <Chart.Root {...restProps} className={classes.chart} />
                );
                const LegendRootBase = ({ classes, ...restProps }) => (
                    <Legend.Root {...restProps} className={classes.root} />
                );
                const LegendLabelBase = ({ classes, ...restProps }) => (
                    <Legend.Label {...restProps} className={classes.label} />
                );
                const LegendItemBase = ({ classes, ...restProps }) => (
                    <Legend.Item {...restProps} className={classes.item} />
                );
                const ChartRoot = withStyles(chartRootStyles, { name: 'ChartRoot' })(ChartRootBase);
                const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
                const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
                const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);

                return (
                    <Chart data={piData} height={200} rootComponent={ChartRoot}>
                        <PieSeries
                            valueField="area"
                            argumentField="name"
                            innerRadius={0.6}
                            
                        />
                        <Animation />
                        <Legend
                            position="right"
                            rootComponent={LegendRoot}
                            itemComponent={LegendItem}
                            labelComponent={LegendLabel}
                        />
                    </Chart>
                )
            }
            return (
                <Box marginTop={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box>
                                <Paper elevation={3}>
                                    <Box width={400} paddingY={2}>
                                        <ChartComponent data={piData} />
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid itme xs={8}>
                            <Paper elevation={3}>
                                <Box overflow="hidden">
                                    <LineChart data={lineData}/>
                                </Box>
                            </Paper>

                        </Grid>
                    </Grid>

                </Box>
            )
        }

        return (
            <React.Fragment>
                <Section1 />
                <Section2 />
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
        const {title, subheading, caption, pic, url, fromColor, toColor, to} = props;

        return (
                <Box bgcolor="blue" height="100%" borderRadius={5} padding={2} paddingBottom={1} color="white"
                    className={`${classes.card} ${classes.link}`} position="relative" overflow="hidden" 
                    onClick={()=>history.push(to)}>
                    <Box zIndex={1} display="flex" flexDirection="column" height="100%">
                        <Typography variant="subtitle2" color="inherit">{title}</Typography>
                        {/* <Typography variant="subtitle2" color="inherit">{subheading}</Typography> */}
                        <Typography variant="caption" color="textSecondary">
                            Here goes the text secondary grey color
                        </Typography>
                        <Box flexGrow={1}></Box>
                        <Typography variant="caption" display="inline">Click Here</Typography>

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
                        <Card title="Apply to Scheme" subheading="User" caption="caption goes here to demonstrate"
                            pic="" url="" fromColor="#4a148c" toColor="#6a1b9a" className={classes.link} 
                            to="/LSGD_FRONT/p/applygrant" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card title="Register Citizen " subheading="Account" caption="second caption goes here"
                        pic="" url="" fromColor="#00695c" toColor="#00796b" to="/LSGD_FRONT/p/registercitizen" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card title="Add New Scheme" subheading="Account" caption="here is the third caption goes here"
                         pic="" url="" fromColor="#f9a825" toColor="#fbc02d"  to="/not_done"/>
                </Grid>
            </Grid>

        </Box>
    )
}

const HomePage = (props) => {
    const classes = useStyles(props);
    const {tabValue, handleChangeTab, a11yProps, piData, lineData} = props;
    console.log("-------------", props)
  
    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <Box height="100%" display="flex" flexDirection="column">
                    <Header tabValue={tabValue} handleChangeTab={handleChangeTab} />
                    <PanelBody tabValue={tabValue} handleChangeTab={handleChangeTab} piData={piData} 
                                    lineData={lineData} />
                    <CardSection />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Scaffold(HomePage, 2);
