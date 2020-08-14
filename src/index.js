import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeProvider } from '@material-ui/core/styles';
import { history } from "./helpers/history";
import theme from "./themes/theme";

import axios from "./axios";

axios.defaults.baseURL = "https://reboothack12345.herokuapp.com";
axios.defaults.withCredentials = true;

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <BrowserRouter history={history}>
        <Switch>
          {routes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </BrowserRouter> 
    </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
