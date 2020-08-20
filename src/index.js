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
import { Provider } from 'react-redux'
import reducer from './reducer';
import {createStore} from 'redux';


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

axios.defaults.baseURL = "https://reboothack12345.herokuapp.com";
axios.defaults.withCredentials = true;

ReactDOM.render(
    <div style={{height: "100vh", display: "flex"}}>
<<<<<<< HEAD
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Switch>
                    {routes.map((prop, key) => {
                        return <Route path={prop.path} key={key} component={prop.component}/>;
                    })}
                </Switch>
            </Router>
        </ThemeProvider>
=======
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter history={history}>
                    <Switch>
                        {routes.map((prop, key) => {
                            return <Route path={prop.path} key={key} component={prop.component}/>;
                        })}
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
>>>>>>> f1519e51b48b50b7a58a49fa4388b9fefe967b09
    </div>,
    document.getElementById("root")
);
registerServiceWorker();
