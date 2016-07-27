import React from "react";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {locale, MessageKey} from "../utils/Locale";
import store from "../store/Store";

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                hint: "..."
            }, control: {
                title: "..."
            }
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                input: {
                    hint: locale.getMessage(MessageKey.input.HINT)
                }, control: {
                    title: locale.getMessage(MessageKey.input.APPLY)
                }
            })
        });
    }

    render() {
        return <Paper className="input-box">
            <TextField className="input-field"
                       hintText={this.state.input.hint}
                       fullWidth={true}
                       multiLine={true}
                       rows={1}
                       rowsMax={4}/>
            <RaisedButton className="input-control"
                          label={this.state.control.title}
                          primary={true}/>
        </Paper>;
    }
}

export default InputBox;