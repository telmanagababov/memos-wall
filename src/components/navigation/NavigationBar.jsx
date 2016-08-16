import React from "react";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import ItemsSelect from "./ItemsSelect";
import store from "../../store/Store";
import {setLocale} from "../../actions/LocaleActions"

class NavigationBar extends React.Component {
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
            var locale = store.getState().locale;
            this.setState({
                title: locale.messages.app.TITLE,
                select: {
                    values: locale.locales,
                    currentValue: locale.currentLocale
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

export default NavigationBar;