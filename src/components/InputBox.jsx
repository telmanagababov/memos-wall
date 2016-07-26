import React from "react";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {locale, MessageKey} from "../util/Locale";

const InputBox = React.createClass({

    render() {
        return <Paper className="input-box">
            <TextField className="input-field"
                       hintText={locale.t(MessageKey.input.HINT)}
                       fullWidth={true}
                       multiLine={true}
                       rows={1}
                       rowsMax={4}/>
            <RaisedButton className="input-control"
                          label={locale.t(MessageKey.input.APPLY)}
                          primary={true}/>
        </Paper>;
    }
});

export default InputBox;