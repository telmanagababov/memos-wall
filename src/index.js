import React from "react";
import ReactDOM from "react-dom";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux"
import store from "./store/Store";
import App from "./App";

import locale from "./utils/Locale";
locale.init();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root"));