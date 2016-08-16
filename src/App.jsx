import React from "react";
import NavigationBar from "./components/navigation/NavigationBar"
import InputBox from "./components/input/InputBox"
import MemosContainer from "./components/memo/MemosContainer"

const App = () => (
    <div>
        <NavigationBar />
        <InputBox />
        <MemosContainer />
    </div>
);

export default App;