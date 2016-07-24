import React from "react";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import InputBox from "./components/InputBox"
import locale from "./util/Locale"

const App = () => (
    <div>
        <AppBar title={locale.app.TITLE} showMenuIconButton={false}/>
        <InputBox />
    </div>
);

export default App;