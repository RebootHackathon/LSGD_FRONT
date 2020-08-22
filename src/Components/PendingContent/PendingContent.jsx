import React from "react";

import {Box, Grid, Typography, withStyles, Button, Divider} from '@material-ui/core';
import theme from "../../themes/theme";
import {history} from "../../helpers/history";

function MainContent(props) {
    console.log("Theme = ", theme);
    const {data} = props;
    const grand_name = data.grantname.grant_name
    const aadhar_no = data.userName.aadhar
    const expiry = data.date

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
        <Box>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Typography variant="caption" color="textSecondary">Grand Name</Typography>
                    <Typography variant="subtitle1" color="textPrimary">{grand_name}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="caption" color="textSecondary">Aadhar No</Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h5" color="primary">&#8226;&nbsp;</Typography>
                        <Typography variant="subtitle1" color="textPrimary">{aadhar_no}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="caption" color="textSecondary">Due Date</Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h5" color="primary">&#8226;&nbsp;</Typography>
                        <Typography variant="caption" color="textPrimary">{expiry}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box display="flex" height="100%" justifyContent="flex-end" alignItems="center">
                        {/* <ButtonCustom  color="black">reject</ButtonCustom>
                        <ButtonCustom  color="black">accept</ButtonCustom> */}
                        <ButtonCustom bgColor={theme.palette.primary.main} color="white" 
                            onClick={()=>history.push({pathname: "/LSGD_FRONT/p/listgrants", 
                                state: { aadhar_no: aadhar_no }})}>details</ButtonCustom>
                    </Box>
                </Grid>
            </Grid>
            <Divider />

        </Box>
    )

}

export default MainContent;