import React from "react";
import theme from "../../../themes/theme";
import {withStyles, Button } from '@material-ui/core';

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

export default ButtonCustom;