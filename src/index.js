import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import App from "./App";

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById("root"));
