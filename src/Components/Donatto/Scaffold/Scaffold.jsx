import React from "react";
import {Box} from '@material-ui/core';



import AppBar from "../AppBar/AppBar";
import MenuBar from "../MenuBar/MenuBar";


const Scaffold = (Body) => {
  
    return (
        function () {
            return (
                <Box bgcolor="green" height="100vh" display="flex" flexDirection="column">
                    <AppBar />
                    <Box bgcolor="cyan" display="flex" flexGrow={1}>
                        <MenuBar />
                        <Box flexGrow={1} bgcolor="blue" display="flex">
                            <Body />
                        </Box>
                    </Box>
                </Box>
            )
        }
    );
}

export default Scaffold;
