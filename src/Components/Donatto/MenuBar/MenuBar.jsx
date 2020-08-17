import React from "react";


const MenuBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar/>
            <h1>Donatto</h1>
        </div>
    );
}

export default MenuBar;
