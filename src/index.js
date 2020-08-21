import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import {BrowserRouter, Route, Switch, Router} from "react-router-dom";
import routes from "./routes/routes";
import {ThemeProvider} from '@material-ui/core/styles';
import {history} from "./helpers/history";
import theme from "./themes/theme";

import axios from "./axios";

axios.defaults.baseURL = "https://reboothack12345.herokuapp.com";
axios.defaults.withCredentials = true;

ReactDOM.render(
    <div style={{height: "100vh", display: "flex"}}>
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Switch>
                    {routes.map((prop, key) => {
                        return <Route path={prop.path} key={key} component={prop.component}/>;
                    })}
                </Switch>
            </Router>
        </ThemeProvider>
    </div>,
    document.getElementById("root")
);
registerServiceWorker();
