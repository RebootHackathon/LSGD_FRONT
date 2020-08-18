import React from "react";
import {Box} from '@material-ui/core';



import AppBar from "../AppBar/AppBar";
import MenuBar from "../MenuBar/MenuBar";


const Scaffold = (Body, activeTab) => {
  
    return (
        function (props) {
            console.log("*********", props);
            return (
                <Box height="100vh" display="flex" flexDirection="column">
                    <AppBar />
                    <Box display="flex" flexGrow={1}>
                        <MenuBar activeTab={activeTab} />
                        <Box flexGrow={1} display="flex" bgcolor="#f6f6f6">
                            <Body {...props}/>
                        </Box>
                    </Box>
                </Box>
            )
        }
    );
}

export default Scaffold;
