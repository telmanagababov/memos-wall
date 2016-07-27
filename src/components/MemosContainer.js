import React from "react";
import Paper from "material-ui/Paper";
import store from "../store/Store";

class MemosContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({

            })
        });
    }

    render() {
        return <Paper>
        </Paper>;
    }
}

export default MemosContainer;