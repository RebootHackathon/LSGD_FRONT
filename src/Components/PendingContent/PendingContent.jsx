import React from "react";

import {Box, Grid, Typography, withStyles, Button, Divider} from '@material-ui/core';
import theme from "../../themes/theme";

function MainContent(props) {
    console.log("Theme = ", theme);
    const {index}=props
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
                    <Typography variant="caption" color="textSecondary">Fact no1</Typography>
                    <Typography variant="subtitle1" color="textPrimary">7899 6895 6986 4785</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="caption" color="textSecondary">Fact no-2</Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h5" color="primary">&#8226;&nbsp;</Typography><Typography variant="subtitle1" color="textPrimary">7899 6895 6986 4785</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="caption" color="textSecondary">Fact no3</Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h5" color="primary">&#8226;&nbsp;</Typography><Typography variant="subtitle1" color="textPrimary">7899 6895 6986 4785</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box display="flex" height="100%" justifyContent="flex-end" alignItems="center">
                        <ButtonCustom  color="black">reject</ButtonCustom>
                        <ButtonCustom  color="black">accept</ButtonCustom>
                        <ButtonCustom bgColor={theme.palette.primary.main} color="white">details</ButtonCustom>
                    </Box>
                </Grid>
            </Grid>
            <Divider />

        </Box>
    )

}

export default MainContent;