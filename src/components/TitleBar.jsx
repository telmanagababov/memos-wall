import React from "react";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import ItemsSelect from "./ItemsSelect";
import {locale, MessageKey} from "../utils/Locale";
import store from "../store/Store";
import {setLocale} from "../actions/LocaleActions"

class TitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            select: {
                values: [],
                currentValue: ""
            }
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                title: locale.getMessage(MessageKey.app.TITLE),
                select: {
                    values: store.getState().locale.locales,
                    currentValue: store.getState().locale.currentLocale
                }
            })
        });
    }

    onLanguageChanged(event, index, value) {
        store.dispatch(setLocale(value));
    }

    render() {
        return <Paper>
            <AppBar title={this.state.title}
                    showMenuIconButton={false}
                    iconElementRight={
                        <ItemsSelect
                                values={this.state.select.values}
                                currentValue={this.state.select.currentValue}
                                onChange={this.onLanguageChanged}
                        />
                    }/>
        </Paper>
    };
}

export default TitleBar;