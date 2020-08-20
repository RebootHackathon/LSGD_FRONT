import React from "react";
import {Box} from '@material-ui/core';



import AppBar from "../AppBar/AppBar";
import MenuBar from "../MenuBar/MenuBar";


const Scaffold = (Body, activeTab) => {
  
    return (
        function (props) {
            console.log("*********", props);
            return (
                <Box height="100vh" width="100vw" display="flex" flexDirection="column">
                    <AppBar />
                    <Box display="flex" overflow="auto">
                        <MenuBar activeTab={activeTab} />
                        <Box display="flex" bgcolor="#fafafa" flexGrow={1} overflow="auto">
                            <Body {...props}/>
                        </Box>
                    </Box>
                </Box>
            )
        }
    );
}

export default Scaffold;
