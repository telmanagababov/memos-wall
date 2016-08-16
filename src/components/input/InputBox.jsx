import React from "react";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {addMemo} from "../../actions/MemoActions"
import {setActualInfo} from "../../actions/InputActions"
import store from "../../store/Store";

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                hint: "...",
                value: ""
            }, control: {
                title: "..."
            }
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            var storeState = store.getState(),
                messages = storeState.locale.messages;
            this.setState({
                input: {
                    hint: messages.input.HINT,
                    value: storeState.input.value
                }, control: {
                    title: messages.input.APPLY
                }
            });
        });
    }

    onInput(event, value) {
        store.dispatch(setActualInfo(value));
    }

    onAdd() {
        var actualValue = store.getState().input.value;
        store.dispatch(addMemo(actualValue));
    }

    render() {
        return <Paper className="input-box">
            <TextField className="input-field"
                       value={this.state.input.value}
                       hintText={this.state.input.hint}
                       fullWidth={true}
                       multiLine={true}
                       rows={1}
                       rowsMax={4}
                       onChange={this.onInput}/>
            <RaisedButton className="input-control"
                          label={this.state.control.title}
                          primary={true}
                          onTouchTap={this.onAdd}/>
        </Paper>;
    }
}

export default InputBox;